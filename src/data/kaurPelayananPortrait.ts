// High-fidelity official portrait of Kaur Pelayanan Desa Wegil (Bapak Karyono)
// Faithfully matches the official photograph: red background, khaki civil servant uniform (PDH Pemda),
// shoulder epaulets with buttons, two flap chest pockets, Pati district arm badge, distinctive mustache, and facial mole.

export const DEFAULT_KAUR_PELAYANAN_PHOTO_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="100%" height="100%">
  <defs>
    <!-- Solid Official Indonesian Red Background -->
    <linearGradient id="karyonoRedBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#df0a19"/>
      <stop offset="100%" stop-color="#ba020e"/>
    </linearGradient>

    <!-- Khaki Uniform Gradients -->
    <linearGradient id="khakiBase" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ceb387"/>
      <stop offset="50%" stop-color="#bd9f71"/>
      <stop offset="100%" stop-color="#9a7c51"/>
    </linearGradient>
    <linearGradient id="khakiLight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ded0ab"/>
      <stop offset="100%" stop-color="#c5a97d"/>
    </linearGradient>
    <linearGradient id="khakiShadow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a48759"/>
      <stop offset="100%" stop-color="#7e633a"/>
    </linearGradient>
    <linearGradient id="khakiButton" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#6e532b"/>
      <stop offset="50%" stop-color="#4d381b"/>
      <stop offset="100%" stop-color="#2c1e0e"/>
    </linearGradient>

    <!-- Skin Tones (Warm Indonesian Sawo Matang) -->
    <linearGradient id="skinBase" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e9b491"/>
      <stop offset="45%" stop-color="#db9f77"/>
      <stop offset="85%" stop-color="#c4835a"/>
      <stop offset="100%" stop-color="#ad6f49"/>
    </linearGradient>
    <linearGradient id="skinHighlight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f5caa8"/>
      <stop offset="100%" stop-color="#e2aa85"/>
    </linearGradient>

    <!-- Hair Volume Gradients -->
    <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#342d27"/>
      <stop offset="35%" stop-color="#1e1a17"/>
      <stop offset="100%" stop-color="#0f0d0b"/>
    </linearGradient>

    <filter id="bodyShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="5" stdDeviation="5" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Official Solid Red Background -->
  <rect width="400" height="480" fill="url(#karyonoRedBg)"/>

  <!-- Soft Studio Ambient Light -->
  <circle cx="200" cy="210" r="185" fill="#ffffff" opacity="0.04"/>

  <!-- Body and Khaki Uniform -->
  <g filter="url(#bodyShadow)">
    <!-- Main Shoulders & Torso -->
    <path d="M 0 480 L 0 375 C 18 318 85 282 142 272 L 176 282 L 200 286 L 224 282 L 258 272 C 315 282 382 318 400 375 L 400 480 Z" fill="url(#khakiBase)"/>

    <!-- Left Arm District Emblem Patch (Viewer's Right Side) -->
    <!-- Yellow Arched Header Tab "KABUPATEN PATI" -->
    <g transform="translate(346, 296) rotate(6)">
      <path d="M 5 0 Q 28 -5 51 0 L 49 10 Q 28 6 7 10 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <text x="28" y="7" font-size="4.2" font-weight="bold" fill="#1e1b18" text-anchor="middle" letter-spacing="0.5">PATI</text>
    </g>
    <!-- Yellow Embroidered Shield Badge of Kabupaten Pati -->
    <g transform="translate(348, 308) rotate(6)">
      <path d="M 6 4 L 46 4 C 50 25 46 52 26 64 C 6 52 2 25 6 4 Z" fill="#eab308" stroke="#a16207" stroke-width="1.6"/>
      <!-- Inner Shield (Blue Sky & Sea) -->
      <path d="M 10 8 L 42 8 C 45 25 42 47 26 57 C 10 47 7 25 10 8 Z" fill="#0284c7"/>
      <!-- Green Mount Muria landscape -->
      <circle cx="26" cy="40" r="11" fill="#16a34a"/>
      <!-- Gold Star / Emblem Details -->
      <path d="M 15 14 L 37 14" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="18" y="19" width="16" height="9" rx="2" fill="#facc15"/>
      <text x="26" y="52" font-size="5" font-weight="bold" fill="#ffffff" text-anchor="middle">PATI</text>
    </g>

    <!-- Shoulder Epaulets (Lidah Pundak Khaki) -->
    <!-- Left Epaulet (Viewer's Left) -->
    <path d="M 55 304 L 136 272 L 128 286 L 60 320 Z" fill="url(#khakiLight)" stroke="#7e633a" stroke-width="1.2"/>
    <circle cx="124" cy="278" r="4.5" fill="url(#khakiButton)" stroke="#d5b583" stroke-width="0.8"/>

    <!-- Right Epaulet (Viewer's Right) -->
    <path d="M 345 304 L 264 272 L 272 286 L 340 320 Z" fill="url(#khakiLight)" stroke="#7e633a" stroke-width="1.2"/>
    <circle cx="276" cy="278" r="4.5" fill="url(#khakiButton)" stroke="#d5b583" stroke-width="0.8"/>

    <!-- Left Chest Pocket (Viewer's Left) -->
    <g transform="translate(72, 388)">
      <!-- Pocket Bag -->
      <rect x="0" y="22" width="88" height="52" rx="2" fill="url(#khakiLight)" stroke="#7e633a" stroke-width="1.2"/>
      <!-- Vertical Pocket Center Pleat Line -->
      <line x1="44" y1="22" x2="44" y2="74" stroke="#a48759" stroke-width="1.2"/>
      <!-- Pointed Pocket Flap -->
      <path d="M -2 0 L 90 0 L 90 16 L 44 26 L -2 16 Z" fill="url(#khakiLight)" stroke="#7e633a" stroke-width="1.2"/>
      <!-- Flap Buttonhole Stitch -->
      <line x1="44" y1="10" x2="44" y2="20" stroke="#4d381b" stroke-width="1.4"/>
      <!-- Flap Button -->
      <circle cx="44" cy="16" r="4" fill="url(#khakiButton)" stroke="#d5b583" stroke-width="0.8"/>
    </g>

    <!-- Right Chest Pocket (Viewer's Right) -->
    <g transform="translate(240, 388)">
      <!-- Pocket Bag -->
      <rect x="0" y="22" width="88" height="52" rx="2" fill="url(#khakiLight)" stroke="#7e633a" stroke-width="1.2"/>
      <!-- Vertical Pocket Center Pleat Line -->
      <line x1="44" y1="22" x2="44" y2="74" stroke="#a48759" stroke-width="1.2"/>
      <!-- Pointed Pocket Flap -->
      <path d="M -2 0 L 90 0 L 90 16 L 44 26 L -2 16 Z" fill="url(#khakiLight)" stroke="#7e633a" stroke-width="1.2"/>
      <!-- Flap Buttonhole Stitch -->
      <line x1="44" y1="10" x2="44" y2="20" stroke="#4d381b" stroke-width="1.4"/>
      <!-- Flap Button -->
      <circle cx="44" cy="16" r="4" fill="url(#khakiButton)" stroke="#d5b583" stroke-width="0.8"/>
    </g>

    <!-- Center Shirt Placket -->
    <rect x="189" y="324" width="22" height="156" fill="url(#khakiShadow)"/>
    <line x1="189" y1="324" x2="189" y2="480" stroke="#684f2b" stroke-width="1"/>
    <line x1="211" y1="324" x2="211" y2="480" stroke="#684f2b" stroke-width="1"/>
    <!-- Placket Buttons -->
    <circle cx="200" cy="342" r="5" fill="url(#khakiButton)" stroke="#d5b583" stroke-width="0.9"/>
    <circle cx="200" cy="436" r="5" fill="url(#khakiButton)" stroke="#d5b583" stroke-width="0.9"/>

    <!-- Open Pointed Collar Wings -->
    <!-- Left Collar Wing (Viewer's Left) -->
    <path d="M 130 270 L 180 340 L 196 292 L 170 264 Z" fill="url(#khakiLight)" stroke="#7e633a" stroke-width="1.5"/>
    <!-- Right Collar Wing (Viewer's Right) -->
    <path d="M 270 270 L 220 340 L 204 292 L 230 264 Z" fill="url(#khakiLight)" stroke="#7e633a" stroke-width="1.5"/>
    <!-- Open Collar Throat Triangle Shadow -->
    <path d="M 170 264 L 200 324 L 230 264 Z" fill="url(#khakiShadow)"/>
  </g>

  <!-- Neck -->
  <path d="M 166 195 L 166 278 C 178 296 222 296 234 278 L 234 195 Z" fill="url(#skinBase)"/>
  <ellipse cx="200" cy="224" rx="34" ry="14" fill="#9e5b32" opacity="0.32"/>
  <!-- Adam's Apple -->
  <path d="M 197 238 Q 200 243 203 238" stroke="#9e5b32" stroke-width="1.4" fill="none"/>

  <!-- Head Base -->
  <path d="M 130 162 C 126 95 146 64 200 64 C 254 64 274 95 270 162 C 267 218 246 256 200 256 C 154 256 133 218 130 162 Z" fill="url(#skinBase)"/>

  <!-- Forehead Highlights -->
  <path d="M 155 105 Q 200 95 245 105 C 240 145 160 145 155 105 Z" fill="url(#skinHighlight)" opacity="0.25"/>

  <!-- Hair (Black, Thick Wavy Volume Swept Up and Back as in Photo) -->
  <g fill="url(#hairGrad)">
    <!-- Main Voluminous Hair Body -->
    <path d="M 128 158 C 122 102 134 38 178 30 C 190 28 212 28 224 30 C 266 38 278 102 272 158 C 274 132 270 90 252 70 C 238 58 222 68 200 68 C 178 68 162 58 148 70 C 130 90 126 132 128 158 Z"/>
    
    <!-- Top Hair Wave Crests -->
    <path d="M 150 60 Q 160 40 172 52 Q 185 30 198 46 Q 212 28 224 45 Q 236 32 248 56 Z"/>
    <!-- Subtle Stray Hair Tufts on Crest -->
    <path d="M 188 28 Q 193 20 197 28" stroke="#1e1a17" stroke-width="1.8" fill="none"/>
    <path d="M 204 27 Q 209 19 214 27" stroke="#1e1a17" stroke-width="1.8" fill="none"/>

    <!-- Side Hair & Natural Sideburns -->
    <path d="M 128 158 L 131 188 L 137 188 L 137 158 Z"/>
    <path d="M 272 158 L 269 188 L 263 188 L 263 158 Z"/>
  </g>

  <!-- Ears -->
  <ellipse cx="125" cy="186" rx="8.5" ry="20" fill="#d99d75"/>
  <path d="M 127 175 Q 131 186 127 197" stroke="#9e5b32" stroke-width="1.5" fill="none"/>
  <ellipse cx="275" cy="186" rx="8.5" ry="20" fill="#d99d75"/>
  <path d="M 273 175 Q 269 186 273 197" stroke="#9e5b32" stroke-width="1.5" fill="none"/>

  <!-- Forehead Texture Lines -->
  <path d="M 166 108 Q 200 102 234 108" stroke="#be7b55" stroke-width="1.2" fill="none" opacity="0.4"/>
  <path d="M 162 122 Q 200 115 238 122" stroke="#be7b55" stroke-width="1.2" fill="none" opacity="0.4"/>

  <!-- Eyebrows (Prominent, natural dark, arched) -->
  <path d="M 148 148 Q 170 139 190 146" stroke="#171513" stroke-width="4.2" stroke-linecap="round" fill="none"/>
  <path d="M 252 148 Q 230 139 210 146" stroke="#171513" stroke-width="4.2" stroke-linecap="round" fill="none"/>

  <!-- Eyes -->
  <!-- Left Eye (Viewer's Left) -->
  <ellipse cx="170" cy="164" rx="10.5" ry="6.5" fill="#ffffff"/>
  <circle cx="171" cy="164" r="5.2" fill="#292019"/>
  <circle cx="171" cy="164" r="2.5" fill="#090807"/>
  <circle cx="173" cy="162" r="1.4" fill="#ffffff"/>
  <!-- Upper Eyelid & Crease -->
  <path d="M 158 162 Q 170 156 182 162" stroke="#221e1d" stroke-width="2" fill="none"/>
  <path d="M 159 157 Q 170 152 181 157" stroke="#a66742" stroke-width="1" fill="none"/>
  <!-- Under-Eye Bags / Crease -->
  <path d="M 160 171 Q 170 175 180 171" stroke="#b87249" stroke-width="1.4" fill="none"/>

  <!-- Right Eye (Viewer's Right) -->
  <ellipse cx="230" cy="164" rx="10.5" ry="6.5" fill="#ffffff"/>
  <circle cx="229" cy="164" r="5.2" fill="#292019"/>
  <circle cx="229" cy="164" r="2.5" fill="#090807"/>
  <circle cx="231" cy="162" r="1.4" fill="#ffffff"/>
  <!-- Upper Eyelid & Crease -->
  <path d="M 218 162 Q 230 156 242 162" stroke="#221e1d" stroke-width="2" fill="none"/>
  <path d="M 219 157 Q 230 152 241 157" stroke="#a66742" stroke-width="1" fill="none"/>
  <!-- Under-Eye Bags / Crease -->
  <path d="M 220 171 Q 230 175 240 171" stroke="#b87249" stroke-width="1.4" fill="none"/>

  <!-- Nose -->
  <!-- Nose Bridge Contour -->
  <path d="M 197 148 L 195 194 C 195 200 205 200 205 194 L 203 148" fill="none"/>
  <path d="M 198 150 L 196 193 C 196 199 204 199 204 193" stroke="#be7b55" stroke-width="1.8" fill="none"/>
  <!-- Nose Bulb -->
  <ellipse cx="200" cy="195" rx="8.5" ry="6.5" fill="#ca8963"/>
  <ellipse cx="200" cy="193" rx="4" ry="2.5" fill="#e8ad88" opacity="0.4"/>
  <!-- Nostrils -->
  <path d="M 188 196 Q 192 192 196 197" stroke="#9e5b32" stroke-width="1.5" fill="none"/>
  <path d="M 212 196 Q 208 192 204 197" stroke="#9e5b32" stroke-width="1.5" fill="none"/>
  <ellipse cx="193" cy="198" rx="3.2" ry="1.9" fill="#4d2c16" opacity="0.7"/>
  <ellipse cx="207" cy="198" rx="3.2" ry="1.9" fill="#4d2c16" opacity="0.7"/>

  <!-- Characteristic Full Black Mustache (Kumis Rapi Pak Karyono) -->
  <g fill="#141210">
    <path d="M 174 214 C 182 202 195 201 200 205 C 205 201 218 202 226 214 C 229 220 224 223 218 220 C 212 216 206 218 200 219 C 194 218 188 216 182 220 C 176 223 171 220 174 214 Z"/>
    <!-- Realistic Feathered Mustache Bristles -->
    <path d="M 172 216 L 175 210 L 179 215 L 184 209 L 191 214 L 198 207 L 200 215 L 202 207 L 209 214 L 216 209 L 221 215 L 225 210 L 228 216 Z"/>
  </g>

  <!-- Lips -->
  <path d="M 183 221 Q 200 226 217 221" stroke="#682f1b" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M 186 222 Q 200 231 214 222 C 209 229 191 229 186 222 Z" fill="#d97d5d"/>

  <!-- Characteristic Facial Mole: Left upper lip / cheek (Viewer's Left) -->
  <circle cx="166" cy="211" r="2.4" fill="#2d1b11"/>
  <circle cx="166" cy="211" r="1.3" fill="#140a04"/>

  <!-- Chin Crease & Contour -->
  <path d="M 191 237 Q 200 241 209 237" stroke="#be7b55" stroke-width="1.4" fill="none"/>
  <ellipse cx="200" cy="245" rx="14" ry="7" fill="#b87249" opacity="0.25"/>
</svg>
`)}`;
