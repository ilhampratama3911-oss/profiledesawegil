// Robust storage & client-side compression for village officer portraits
// Uses IndexedDB for unlimited capacity + compressed localStorage fallback with QuotaExceeded protection

const DB_NAME = 'wegil_village_db';
const STORE_NAME = 'officer_photos';

function openDB(): Promise<IDBDatabase | null> {
  if (typeof window === 'undefined' || !window.indexedDB) {
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    try {
      const request = window.indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

/**
 * Safely retrieve value from localStorage without throwing Quota or security errors
 */
export function safeGetLocalStorage(key: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Safely set value into localStorage with QuotaExceededError protection
 */
export function safeSetLocalStorage(key: string, value: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.warn(`[Storage] localStorage quota reached while saving ${key}. Handled safely:`, e);
    // Attempt cleanup of large legacy items if quota exceeded
    try {
      const keysToCheck = [
        'kades_custom_photo',
        'sekdes_custom_photo',
        'kaur_custom_photo',
        'kaur_perencanaan_custom_photo',
        'kaur_pelayanan_custom_photo'
      ];
      for (const k of keysToCheck) {
        if (k !== key) {
          const val = localStorage.getItem(k);
          if (val && val.length > 200000) {
            localStorage.removeItem(k);
          }
        }
      }
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }
}

/**
 * Safely remove value from localStorage
 */
export function safeRemoveLocalStorage(key: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(key);
  } catch {}
}

/**
 * Compress an image file using an HTML5 Canvas down to an avatar size (<500px, JPEG 0.82)
 * Reduces a 5MB PNG/JPEG file down to ~25KB - 40KB
 */
export function compressImageFile(file: File, maxDim = 480, quality = 0.82): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('Berkas harus berupa gambar (PNG/JPEG/WebP)'));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Gagal membaca berkas'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Gagal memuat gambar'));
      img.onload = () => {
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(reader.result as string);
          return;
        }

        // Draw with white background to prevent black PNG transparency
        ctx.fillStyle = '#b91c1c'; // default red passport tone if transparent
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to compact JPEG (typically 25KB - 45KB)
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Persist photo to both IndexedDB and compressed localStorage
 */
export async function saveOfficerPhoto(key: string, dataUrl: string): Promise<void> {
  // 1. Save to IndexedDB (No quota limits)
  try {
    const db = await openDB();
    if (db) {
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const req = store.put(dataUrl, key);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    }
  } catch (err) {
    console.warn('[IndexedDB] Save warning:', err);
  }

  // 2. Safe save to localStorage
  safeSetLocalStorage(key, dataUrl);
}

/**
 * Load all custom officer photos from IndexedDB with localStorage fallback
 */
export async function loadAllOfficerPhotos(): Promise<Record<string, string>> {
  const result: Record<string, string> = {};

  // First read from localStorage for instant initial render
  const officerKeys = [
    'kades_custom_photo',
    'sekdes_custom_photo',
    'kaur_custom_photo',
    'kaur_perencanaan_custom_photo',
    'kaur_pelayanan_custom_photo'
  ];

  for (const k of officerKeys) {
    const val = safeGetLocalStorage(k);
    if (val) {
      result[k] = val;
    }
  }

  // Next read from IndexedDB to override or load any items that exceeded localStorage quota
  try {
    const db = await openDB();
    if (db) {
      await new Promise<void>((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.openCursor();
        req.onsuccess = (e) => {
          const cursor = (e.target as IDBRequest<IDBCursorWithValue>).result;
          if (cursor) {
            if (typeof cursor.key === 'string' && typeof cursor.value === 'string') {
              result[cursor.key] = cursor.value;
            }
            cursor.continue();
          } else {
            resolve();
          }
        };
        req.onerror = () => resolve();
      });
    }
  } catch (err) {
    console.warn('[IndexedDB] Load warning:', err);
  }

  return result;
}

/**
 * Remove officer photo from both IndexedDB and localStorage
 */
export async function removeOfficerPhoto(key: string): Promise<void> {
  try {
    const db = await openDB();
    if (db) {
      await new Promise<void>((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const req = store.delete(key);
        req.onsuccess = () => resolve();
        req.onerror = () => resolve();
      });
    }
  } catch {}

  safeRemoveLocalStorage(key);
}
