// High-fidelity official Indonesian Village Chief (Kepala Desa) portrait SVG in PDU attire
// Matches the official photo: red background, white PDU uniform, Garuda cap, tie, rank insignia, name tag HERI PRIYANTO

export const DEFAULT_KADES_PHOTO_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 520" width="100%" height="100%">
  <defs>
    <linearGradient id="redBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cc091f"/>
      <stop offset="100%" stop-color="#ab0416"/>
    </linearGradient>
    <linearGradient id="goldCap" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="50%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
    <linearGradient id="silverMedal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="50%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#df9e76"/>
      <stop offset="60%" stop-color="#cf8c64"/>
      <stop offset="100%" stop-color="#b87850"/>
    </linearGradient>
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Solid Official Indonesian Red Photographic Background -->
  <rect width="400" height="520" fill="url(#redBg)"/>

  <!-- Subtle Studio Vignette Effect -->
  <circle cx="200" cy="220" r="190" fill="#ffffff" opacity="0.06"/>

  <!-- Body / Shoulders (White PDU Uniform) -->
  <g filter="url(#dropShadow)">
    <!-- Main White Suit Torso -->
    <path d="M 60 520 L 60 410 C 65 375 110 345 150 335 L 180 345 L 200 350 L 220 345 L 250 335 C 290 345 335 375 340 410 L 340 520 Z" fill="#ffffff"/>
    <!-- Collar & Lapels -->
    <path d="M 150 335 L 185 410 L 200 425 L 215 410 L 250 335 L 210 330 L 200 345 L 190 330 Z" fill="#f1f5f9"/>
    <path d="M 120 355 L 165 425 L 175 420 L 140 345 Z" fill="#e2e8f0"/>
    <path d="M 280 355 L 235 425 L 225 420 L 260 345 Z" fill="#e2e8f0"/>
  </g>

  <!-- Epaulettes (Pangkat Bahu Hitam & Emas) -->
  <!-- Left Epaulette -->
  <polygon points="75,370 120,350 126,368 81,388" fill="#0f172a"/>
  <polygon points="77,372 118,352 124,366 83,386" fill="url(#goldCap)" stroke="#ca8a04" stroke-width="1"/>
  <!-- Right Epaulette -->
  <polygon points="325,370 280,350 274,368 319,388" fill="#0f172a"/>
  <polygon points="323,372 282,352 276,366 317,386" fill="url(#goldCap)" stroke="#ca8a04" stroke-width="1"/>

  <!-- Neck & Undershirt -->
  <path d="M 175 320 L 175 345 L 200 365 L 225 345 L 225 320 Z" fill="#f8fafc"/>
  <!-- Dark Blue / Purple Tie -->
  <path d="M 193 345 L 207 345 L 212 400 L 200 425 L 188 400 Z" fill="#312e81"/>
  <path d="M 192 342 L 208 342 L 205 355 L 195 355 Z" fill="#1e1b4b"/>

  <!-- Neck -->
  <path d="M 172 260 L 172 325 C 180 335 220 335 228 325 L 228 260 Z" fill="url(#skinGrad)"/>
  <!-- Chin Shadow -->
  <ellipse cx="200" cy="275" rx="28" ry="12" fill="#8c5030" opacity="0.4"/>

  <!-- Face Head -->
  <ellipse cx="200" cy="210" rx="68" ry="76" fill="url(#skinGrad)"/>

  <!-- Ears -->
  <ellipse cx="132" cy="215" rx="8" ry="16" fill="#cf8c64"/>
  <ellipse cx="268" cy="215" rx="8" ry="16" fill="#cf8c64"/>

  <!-- Eyes & Eyebrows -->
  <path d="M 162 188 Q 177 184 188 188" stroke="#1c1917" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M 238 188 Q 223 184 212 188" stroke="#1c1917" stroke-width="4" fill="none" stroke-linecap="round"/>

  <!-- Eyes -->
  <ellipse cx="175" cy="198" rx="8" ry="5" fill="#ffffff"/>
  <circle cx="175" cy="198" r="4" fill="#292524"/>
  <circle cx="177" cy="196" r="1.5" fill="#ffffff"/>

  <ellipse cx="225" cy="198" rx="8" ry="5" fill="#ffffff"/>
  <circle cx="225" cy="198" r="4" fill="#292524"/>
  <circle cx="227" cy="196" r="1.5" fill="#ffffff"/>

  <!-- Nose -->
  <path d="M 200 195 L 196 226 Q 200 231 204 226 Z" fill="#b87850"/>

  <!-- Mustache & Goatee (Kumis & Jenggot Rapih Kades) -->
  <path d="M 176 238 Q 200 236 224 238 Q 200 248 176 238 Z" fill="#1c1917"/>
  <!-- Lips -->
  <path d="M 185 246 Q 200 250 215 246" stroke="#a16207" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Chin Goatee -->
  <ellipse cx="200" cy="265" rx="8" ry="6" fill="#1c1917"/>
  <ellipse cx="200" cy="254" rx="4" ry="2" fill="#1c1917"/>

  <!-- Peaked Official Cap (Pet Upacara Kades) -->
  <!-- Cap Crown / Body -->
  <path d="M 130 170 Q 200 95 270 170 C 275 180 250 185 200 185 C 150 185 125 180 130 170 Z" fill="#0f172a"/>
  <!-- Cap Front White/Light Strap -->
  <path d="M 134 172 Q 200 162 266 172 L 268 180 Q 200 170 132 180 Z" fill="#f8fafc"/>
  <!-- Cap Visor (Brim) -->
  <path d="M 130 178 Q 200 196 270 178 Q 200 184 130 178 Z" fill="#020617"/>
  <!-- Visor Highlight -->
  <path d="M 150 183 Q 200 192 250 183" stroke="#475569" stroke-width="2" fill="none"/>

  <!-- Garuda Pancasila Gold Emblem on Cap -->
  <g transform="translate(200, 138)">
    <!-- Outer Glow / Radiance -->
    <circle cx="0" cy="0" r="24" fill="url(#goldCap)" opacity="0.2"/>
    <!-- Garuda Wings -->
    <path d="M 0 -18 Q -16 -12 -22 4 Q -10 2 0 -2 Q 10 2 22 4 Q 16 -12 0 -18 Z" fill="url(#goldCap)" stroke="#ca8a04" stroke-width="1"/>
    <!-- Garuda Tail Feathers -->
    <path d="M -8 10 L 0 18 L 8 10 Q 0 8 -8 10 Z" fill="url(#goldCap)"/>
    <!-- Center Shield (Perisai Merah Putih & Bintang) -->
    <path d="M -8 -4 L 8 -4 L 6 8 L 0 12 L -6 8 Z" fill="#991b1b" stroke="#fde047" stroke-width="1"/>
    <circle cx="0" cy="2" r="3" fill="#fde047"/>
    <!-- Garuda Head -->
    <circle cx="0" cy="-14" r="4" fill="url(#goldCap)"/>
    <polygon points="0,-16 4,-14 0,-12" fill="#ca8a04"/>
  </g>

  <!-- Uniform Details: Name Plate (HERI PRIYANTO) -->
  <rect x="95" y="445" width="85" height="18" rx="2" fill="#09090b" stroke="#27272a" stroke-width="1"/>
  <text x="137" y="458" fill="#ffffff" font-size="8.5" font-family="sans-serif" font-weight="bold" text-anchor="middle" letter-spacing="1">HERI PRIYANTO</text>

  <!-- Left Lapel Pin (Garuda / Korpri Gold Pin) -->
  <circle cx="270" cy="435" r="7" fill="url(#goldCap)" stroke="#ca8a04" stroke-width="1"/>
  <circle cx="270" cy="435" r="3" fill="#fef08a"/>

  <!-- Left Pocket Medallion (Lencana Jabatan Kepala Desa) -->
  <circle cx="108" cy="485" r="14" fill="url(#silverMedal)" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="108" cy="485" r="9" fill="url(#goldCap)"/>
  <circle cx="108" cy="485" r="4" fill="#1e293b"/>

  <!-- Golden Suit Buttons -->
  <circle cx="198" cy="455" r="6" fill="url(#goldCap)" stroke="#ca8a04" stroke-width="1"/>
  <circle cx="198" cy="495" r="6" fill="url(#goldCap)" stroke="#ca8a04" stroke-width="1"/>
</svg>
`)}`;
