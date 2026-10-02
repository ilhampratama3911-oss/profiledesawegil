// High-fidelity official Indonesian Village Finance Head (Kaur Keuangan Desa Wegil) portrait SVG
// Portrays Bapak Subiyanto wearing black peci with gold embroidery, glasses, mustache, and khaki civil servant uniform (PDH Khaki) with solid red background

export const DEFAULT_KAUR_KEUANGAN_PHOTO_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="100%" height="100%">
  <defs>
    <linearGradient id="kaurRedBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e30613"/>
      <stop offset="100%" stop-color="#ba030d"/>
    </linearGradient>
    <linearGradient id="peciGold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ca8a04"/>
      <stop offset="25%" stop-color="#facc15"/>
      <stop offset="50%" stop-color="#eab308"/>
      <stop offset="75%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#a16207"/>
    </linearGradient>
    <linearGradient id="khakiUniformKaur" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cbb389"/>
      <stop offset="60%" stop-color="#bda276"/>
      <stop offset="100%" stop-color="#a68a5e"/>
    </linearGradient>
    <linearGradient id="khakiLightKaur" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#dccea9"/>
      <stop offset="100%" stop-color="#c7af83"/>
    </linearGradient>
    <linearGradient id="khakiDarkKaur" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ad9266"/>
      <stop offset="100%" stop-color="#8f764c"/>
    </linearGradient>
    <linearGradient id="skinGradKaur" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e2a781"/>
      <stop offset="60%" stop-color="#d4946c"/>
      <stop offset="100%" stop-color="#bd7d53"/>
    </linearGradient>
    <linearGradient id="khakiButtonKaur" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d6c59d"/>
      <stop offset="100%" stop-color="#897249"/>
    </linearGradient>
    <linearGradient id="lensGlare" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.5"/>
      <stop offset="40%" stop-color="#93c5fd" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#60a5fa" stop-opacity="0.05"/>
    </linearGradient>
    <filter id="kaurShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Solid Official Indonesian Red Photographic Background -->
  <rect width="400" height="480" fill="url(#kaurRedBg)"/>

  <!-- Subtle Studio Light Vignette -->
  <circle cx="200" cy="220" r="180" fill="#ffffff" opacity="0.06"/>

  <!-- Body / Khaki Uniform (PDH Perangkat Desa) -->
  <g filter="url(#kaurShadow)">
    <!-- Shoulders & Torso -->
    <path d="M 15 480 L 15 375 C 30 315 95 285 145 275 L 180 285 L 200 290 L 220 285 L 255 275 C 305 285 370 315 385 375 L 385 480 Z" fill="url(#khakiUniformKaur)"/>
    
    <!-- Epaulette Straps (Pangkat Bahu Khaki) -->
    <!-- Left Epaulette -->
    <path d="M 35 345 L 105 300 L 112 318 L 42 363 Z" fill="url(#khakiLightKaur)" stroke="#8f764c" stroke-width="1"/>
    <circle cx="102" cy="308" r="4.5" fill="url(#khakiButtonKaur)" stroke="#6d5833" stroke-width="1"/>
    <!-- Right Epaulette -->
    <path d="M 365 345 L 295 300 L 288 318 L 358 363 Z" fill="url(#khakiLightKaur)" stroke="#8f764c" stroke-width="1"/>
    <circle cx="298" cy="308" r="4.5" fill="url(#khakiButtonKaur)" stroke="#6d5833" stroke-width="1"/>

    <!-- Shirt Placket Center -->
    <rect x="189" y="300" width="22" height="180" fill="url(#khakiDarkKaur)"/>
    
    <!-- Shirt Buttons Down Center -->
    <circle cx="200" cy="335" r="5.5" fill="url(#khakiButtonKaur)" stroke="#6d5833" stroke-width="1"/>
    <circle cx="200" cy="390" r="5.5" fill="url(#khakiButtonKaur)" stroke="#6d5833" stroke-width="1"/>
    <circle cx="200" cy="445" r="5.5" fill="url(#khakiButtonKaur)" stroke="#6d5833" stroke-width="1"/>

    <!-- Pockets (Kantong Kemeja Kiri & Kanan) -->
    <!-- Left Pocket -->
    <rect x="62" y="405" width="88" height="70" rx="3" fill="url(#khakiLightKaur)" stroke="#8f764c" stroke-width="1"/>
    <path d="M 59 398 L 153 398 L 148 420 L 106 426 L 64 420 Z" fill="url(#khakiUniformKaur)" stroke="#7c653d" stroke-width="1"/>
    <circle cx="106" cy="418" r="4.5" fill="url(#khakiButtonKaur)"/>

    <!-- Right Pocket -->
    <rect x="250" y="405" width="88" height="70" rx="3" fill="url(#khakiLightKaur)" stroke="#8f764c" stroke-width="1"/>
    <path d="M 247 398 L 341 398 L 336 420 L 294 426 L 252 420 Z" fill="url(#khakiUniformKaur)" stroke="#7c653d" stroke-width="1"/>
    <circle cx="294" cy="418" r="4.5" fill="url(#khakiButtonKaur)"/>

    <!-- Collar & Open Neck -->
    <!-- Collar Left Wing -->
    <path d="M 142 275 L 180 328 L 195 295 L 175 268 Z" fill="url(#khakiLightKaur)" stroke="#8f764c" stroke-width="1"/>
    <!-- Collar Right Wing -->
    <path d="M 258 275 L 220 328 L 205 295 L 225 268 Z" fill="url(#khakiLightKaur)" stroke="#8f764c" stroke-width="1"/>
    <!-- Collar Band Under Chin -->
    <path d="M 175 268 L 200 295 L 225 268 Z" fill="url(#khakiDarkKaur)"/>
  </g>

  <!-- Neck -->
  <path d="M 168 200 L 168 275 C 180 290 220 290 232 275 L 232 200 Z" fill="url(#skinGradKaur)"/>
  <!-- Neck Shadow -->
  <ellipse cx="200" cy="225" rx="32" ry="14" fill="#9e5b32" opacity="0.35"/>

  <!-- Head Base Shape -->
  <ellipse cx="200" cy="180" rx="74" ry="80" fill="url(#skinGradKaur)"/>

  <!-- Ears -->
  <ellipse cx="126" cy="182" rx="9" ry="19" fill="#d4946c"/>
  <path d="M 128 173 Q 132 182 128 191" stroke="#9e5b32" stroke-width="1.5" fill="none"/>
  <ellipse cx="274" cy="182" rx="9" ry="19" fill="#d4946c"/>
  <path d="M 272 173 Q 268 182 272 191" stroke="#9e5b32" stroke-width="1.5" fill="none"/>

  <!-- Peci / Songkok Hitam Motif Emas (Subiyanto's Signature Cap) -->
  <g filter="url(#kaurShadow)">
    <!-- Base Peci Body -->
    <path d="M 128 142 L 132 78 C 132 68 140 60 160 56 L 200 52 L 240 56 C 260 60 268 68 268 78 L 272 142 C 255 152 225 156 200 156 C 175 156 145 152 128 142 Z" fill="#141312"/>
    
    <!-- Peci Velvet Crown Texture Shading -->
    <path d="M 134 78 C 145 68 180 62 200 62 C 220 62 255 68 266 78 L 268 115 C 248 110 220 108 200 108 C 180 108 152 110 132 115 Z" fill="#242220" opacity="0.6"/>

    <!-- Gold Embroidered Border Ribbon (Bordir Emas Tradisional) -->
    <!-- Gold Band Base -->
    <path d="M 130 115 L 270 115 L 272 142 C 252 152 225 156 200 156 C 175 156 148 152 128 142 Z" fill="#1c1917"/>
    
    <!-- Gold Border Waves & Zig-zag Embroideries -->
    <path d="M 132 126 L 140 118 L 148 126 L 156 118 L 164 126 L 172 118 L 180 126 L 188 118 L 196 126 L 204 118 L 212 126 L 220 118 L 228 126 L 236 118 L 244 126 L 252 118 L 260 126 L 268 118" stroke="url(#peciGold)" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M 131 136 Q 140 132 150 136 Q 160 140 170 136 Q 180 132 190 136 Q 200 140 210 136 Q 220 132 230 136 Q 240 140 250 136 Q 260 132 269 136" stroke="url(#peciGold)" stroke-width="2" fill="none"/>
    
    <!-- Gold Dots / Motifs -->
    <circle cx="140" cy="132" r="1.5" fill="#fde047"/>
    <circle cx="156" cy="132" r="1.5" fill="#fde047"/>
    <circle cx="172" cy="132" r="1.5" fill="#fde047"/>
    <circle cx="188" cy="132" r="1.5" fill="#fde047"/>
    <circle cx="204" cy="132" r="1.5" fill="#fde047"/>
    <circle cx="220" cy="132" r="1.5" fill="#fde047"/>
    <circle cx="236" cy="132" r="1.5" fill="#fde047"/>
    <circle cx="252" cy="132" r="1.5" fill="#fde047"/>
    <circle cx="268" cy="132" r="1.5" fill="#fde047"/>
    
    <!-- Gold Lower Lip Trim -->
    <path d="M 129 143 C 148 152 175 156 200 156 C 225 156 252 152 271 143" stroke="url(#peciGold)" stroke-width="1.8" fill="none"/>
  </g>

  <!-- Forehead Texture below Peci -->
  <path d="M 155 156 Q 200 160 245 156" stroke="#9e5b32" stroke-width="1" fill="none" opacity="0.4"/>

  <!-- Eyebrows (Visible Above/Behind Glasses) -->
  <path d="M 148 156 Q 168 150 186 154" stroke="#221f1e" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M 252 156 Q 232 150 214 154" stroke="#221f1e" stroke-width="3.5" fill="none" stroke-linecap="round"/>

  <!-- Eyes Behind Lenses -->
  <!-- Left Eye -->
  <ellipse cx="168" cy="170" rx="9.5" ry="5.5" fill="#ffffff"/>
  <circle cx="168" cy="170" r="4.2" fill="#23201f"/>
  <circle cx="170" cy="168" r="1.4" fill="#ffffff"/>
  <!-- Right Eye -->
  <ellipse cx="232" cy="170" rx="9.5" ry="5.5" fill="#ffffff"/>
  <circle cx="232" cy="170" r="4.2" fill="#23201f"/>
  <circle cx="234" cy="168" r="1.4" fill="#ffffff"/>

  <!-- Eye Bags / Warm Smile Wrinkles -->
  <path d="M 156 177 Q 168 181 180 177" stroke="#b06b42" stroke-width="1.2" fill="none" opacity="0.6"/>
  <path d="M 220 177 Q 232 181 244 177" stroke="#b06b42" stroke-width="1.2" fill="none" opacity="0.6"/>

  <!-- Glasses (Kacamata Bingkai Hitam Persegi & Pantulan Cahaya) -->
  <!-- Left Frame Lens -->
  <rect x="146" y="157" width="44" height="30" rx="6" fill="#f8fafc" fill-opacity="0.12" stroke="#18181b" stroke-width="4"/>
  <!-- Left Lens Glare Reflection -->
  <path d="M 149 160 L 175 160 L 163 184 L 149 184 Z" fill="url(#lensGlare)"/>

  <!-- Right Frame Lens -->
  <rect x="210" y="157" width="44" height="30" rx="6" fill="#f8fafc" fill-opacity="0.12" stroke="#18181b" stroke-width="4"/>
  <!-- Right Lens Glare Reflection -->
  <path d="M 213 160 L 239 160 L 227 184 L 213 184 Z" fill="url(#lensGlare)"/>

  <!-- Glasses Bridge & Temples -->
  <path d="M 190 167 Q 200 164 210 167" stroke="#18181b" stroke-width="4" fill="none"/>
  <!-- Temples to Ears -->
  <path d="M 146 168 L 128 173" stroke="#18181b" stroke-width="3" fill="none"/>
  <path d="M 254 168 L 272 173" stroke="#18181b" stroke-width="3" fill="none"/>

  <!-- Nose -->
  <path d="M 200 165 L 195 198 Q 200 204 205 198 Z" fill="#bd7d53"/>
  <path d="M 188 199 Q 200 207 212 199" stroke="#9e5b32" stroke-width="1.8" fill="none"/>
  <ellipse cx="192" cy="201" rx="4" ry="2.2" fill="#5a3821" opacity="0.65"/>
  <ellipse cx="208" cy="201" rx="4" ry="2.2" fill="#5a3821" opacity="0.65"/>

  <!-- Subiyanto's Signature Mustache (Kumis Tebal Hitam Rapih) -->
  <path d="M 166 215 Q 200 207 234 215 Q 220 228 200 222 Q 180 228 166 215 Z" fill="#181615"/>
  <path d="M 168 216 Q 200 210 232 216" stroke="#09090b" stroke-width="2.5" fill="none"/>

  <!-- Lips -->
  <path d="M 180 228 Q 200 234 220 228" stroke="#9e5b32" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  <path d="M 184 233 Q 200 239 216 233" stroke="#b06b42" stroke-width="1.8" fill="none"/>

  <!-- Chin contour -->
  <ellipse cx="200" cy="248" rx="16" ry="8" fill="#b06b42" opacity="0.3"/>
</svg>
`)}`;
