// High-fidelity official Indonesian Village Planning Head (Kaur Perencanaan Desa Wegil) portrait SVG
// Portrays Bapak Supriyadi wearing khaki civil servant uniform (PDH Khaki) with arched shoulder loops, badge patch, and solid red background

export const DEFAULT_KAUR_PERENCANAAN_PHOTO_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="100%" height="100%">
  <defs>
    <linearGradient id="perencanaanRedBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eb0a1e"/>
      <stop offset="100%" stop-color="#ba030d"/>
    </linearGradient>
    <linearGradient id="khakiUniformSupri" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ceb58c"/>
      <stop offset="60%" stop-color="#bea378"/>
      <stop offset="100%" stop-color="#a4885c"/>
    </linearGradient>
    <linearGradient id="khakiLightSupri" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#decfa9"/>
      <stop offset="100%" stop-color="#c9b185"/>
    </linearGradient>
    <linearGradient id="khakiDarkSupri" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ad9165"/>
      <stop offset="100%" stop-color="#8d744b"/>
    </linearGradient>
    <linearGradient id="skinGradSupri" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e3a783"/>
      <stop offset="50%" stop-color="#d69670"/>
      <stop offset="100%" stop-color="#be7b55"/>
    </linearGradient>
    <linearGradient id="khakiButtonSupri" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d6c59d"/>
      <stop offset="100%" stop-color="#897249"/>
    </linearGradient>
    <filter id="supriShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Solid Official Indonesian Red Background -->
  <rect width="400" height="480" fill="url(#perencanaanRedBg)"/>

  <!-- Subtle Studio Light Vignette -->
  <circle cx="200" cy="220" r="180" fill="#ffffff" opacity="0.05"/>

  <!-- Body / Khaki Uniform (PDH Perangkat Desa) -->
  <g filter="url(#supriShadow)">
    <!-- Shoulders & Torso -->
    <path d="M 0 480 L 0 370 C 25 320 90 288 145 278 L 180 286 L 200 290 L 220 286 L 255 278 C 310 288 375 320 400 370 L 400 480 Z" fill="url(#khakiUniformSupri)"/>

    <!-- Right Shoulder Emblem Patch (Logo Daerah / Pemkab Pati / Pemdes) -->
    <g transform="translate(15, 330) rotate(-12)">
      <!-- Patch Shield Base -->
      <path d="M 10 10 L 60 10 C 65 35 60 65 35 80 C 10 65 5 35 10 10 Z" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
      <!-- Inner Patch Content -->
      <path d="M 14 14 L 56 14 C 60 35 56 60 35 73 C 14 60 10 35 14 14 Z" fill="#0284c7"/>
      <!-- Green Mount / Field inside patch -->
      <circle cx="35" cy="52" r="14" fill="#15803d"/>
      <path d="M 20 22 L 50 22" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="25" y="28" width="20" height="12" rx="2" fill="#facc15"/>
      <text x="35" y="66" font-size="6" font-weight="bold" fill="#ffffff" text-anchor="middle">PATI</text>
    </g>

    <!-- Arched Epaulettes / Shoulder Straps (Khas Melengkung di Pundak) -->
    <!-- Left Epaulette (Viewer's Left) -->
    <path d="M 68 335 C 65 275 110 280 138 318 C 122 312 88 298 84 340 Z" fill="url(#khakiLightSupri)" stroke="#8d744b" stroke-width="1.2"/>
    <circle cx="132" cy="315" r="4" fill="url(#khakiButtonSupri)" stroke="#6d5833" stroke-width="1"/>

    <!-- Right Epaulette (Viewer's Right) -->
    <path d="M 332 335 C 335 275 290 280 262 318 C 278 312 312 298 316 340 Z" fill="url(#khakiLightSupri)" stroke="#8d744b" stroke-width="1.2"/>
    <circle cx="268" cy="315" r="4" fill="url(#khakiButtonSupri)" stroke="#6d5833" stroke-width="1"/>

    <!-- Shirt Placket Center -->
    <rect x="189" y="300" width="22" height="180" fill="url(#khakiDarkSupri)"/>

    <!-- Buttons -->
    <circle cx="200" cy="336" r="5.5" fill="url(#khakiButtonSupri)" stroke="#6d5833" stroke-width="1"/>
    <circle cx="200" cy="405" r="5.5" fill="url(#khakiButtonSupri)" stroke="#6d5833" stroke-width="1"/>
    <circle cx="200" cy="470" r="5.5" fill="url(#khakiButtonSupri)" stroke="#6d5833" stroke-width="1"/>

    <!-- Collar & Open Neck -->
    <!-- Collar Left Wing -->
    <path d="M 136 275 L 180 340 L 195 295 L 175 268 Z" fill="url(#khakiLightSupri)" stroke="#8d744b" stroke-width="1"/>
    <!-- Collar Right Wing -->
    <path d="M 264 275 L 220 340 L 205 295 L 225 268 Z" fill="url(#khakiLightSupri)" stroke="#8d744b" stroke-width="1"/>
    <!-- Collar Under Neck Band -->
    <path d="M 175 268 L 200 300 L 225 268 Z" fill="url(#khakiDarkSupri)"/>
  </g>

  <!-- Neck -->
  <path d="M 166 200 L 166 280 C 180 295 220 295 234 280 L 234 200 Z" fill="url(#skinGradSupri)"/>
  <!-- Neck Shadow -->
  <ellipse cx="200" cy="228" rx="34" ry="15" fill="#9e5b32" opacity="0.35"/>
  <!-- Adam's apple subtle line -->
  <path d="M 197 245 Q 200 248 203 245" stroke="#9e5b32" stroke-width="1.2" fill="none"/>

  <!-- Head Base Shape (Oval with prominent forehead) -->
  <path d="M 132 170 C 128 100 150 70 200 70 C 250 70 272 100 268 170 C 265 220 245 258 200 258 C 155 258 135 220 132 170 Z" fill="url(#skinGradSupri)"/>

  <!-- Textured Hair (Short crop with spiked top & high forehead) -->
  <g fill="#181616">
    <!-- Main Hair Mass -->
    <path d="M 134 165 C 130 115 142 55 180 48 C 190 45 210 45 220 48 C 258 55 270 115 266 165 C 268 140 264 105 248 85 C 238 75 224 82 200 82 C 176 82 162 75 152 85 C 136 105 132 140 134 165 Z"/>

    <!-- Spiky Hair Edges on Top -->
    <path d="M 155 78 L 158 64 L 164 74 L 170 58 L 178 70 L 186 52 L 194 66 L 200 48 L 206 66 L 214 52 L 222 70 L 230 58 L 236 74 L 242 64 L 245 78 Z"/>
    <path d="M 144 110 L 138 95 L 148 102 L 142 88 L 152 94 Z"/>
    <path d="M 256 110 L 262 95 L 252 102 L 258 88 L 248 94 Z"/>

    <!-- Sideburns -->
    <path d="M 134 165 L 136 185 L 140 185 L 140 165 Z"/>
    <path d="M 266 165 L 264 185 L 260 185 L 260 165 Z"/>
  </g>

  <!-- Ears -->
  <ellipse cx="128" cy="188" rx="8" ry="19" fill="#d69670"/>
  <path d="M 130 178 Q 134 188 130 198" stroke="#9e5b32" stroke-width="1.5" fill="none"/>
  <ellipse cx="272" cy="188" rx="8" ry="19" fill="#d69670"/>
  <path d="M 270 178 Q 266 188 270 198" stroke="#9e5b32" stroke-width="1.5" fill="none"/>

  <!-- Forehead Texture / Subtle Expression Lines -->
  <path d="M 172 110 Q 200 106 228 110" stroke="#be7b55" stroke-width="1.2" fill="none" opacity="0.45"/>
  <path d="M 166 126 Q 200 120 234 126" stroke="#be7b55" stroke-width="1.2" fill="none" opacity="0.45"/>

  <!-- Eyebrows (Thick, defined, slightly arched) -->
  <path d="M 152 152 Q 170 144 188 149" stroke="#1f1d1c" stroke-width="4.2" stroke-linecap="round" fill="none"/>
  <path d="M 248 152 Q 230 144 212 149" stroke="#1f1d1c" stroke-width="4.2" stroke-linecap="round" fill="none"/>

  <!-- Eyes -->
  <!-- Left Eye -->
  <ellipse cx="170" cy="166" rx="10" ry="6" fill="#ffffff"/>
  <circle cx="171" cy="166" r="4.8" fill="#262220"/>
  <circle cx="171" cy="166" r="2.2" fill="#09090b"/>
  <circle cx="173" cy="164" r="1.4" fill="#ffffff"/>
  <path d="M 159 164 Q 170 159 181 164" stroke="#221e1d" stroke-width="1.8" fill="none"/>
  <path d="M 162 173 Q 170 176 179 173" stroke="#b87249" stroke-width="1.2" fill="none"/>

  <!-- Right Eye -->
  <ellipse cx="230" cy="166" rx="10" ry="6" fill="#ffffff"/>
  <circle cx="229" cy="166" r="4.8" fill="#262220"/>
  <circle cx="229" cy="166" r="2.2" fill="#09090b"/>
  <circle cx="231" cy="164" r="1.4" fill="#ffffff"/>
  <path d="M 219 164 Q 230 159 241 164" stroke="#221e1d" stroke-width="1.8" fill="none"/>
  <path d="M 221 173 Q 230 176 238 173" stroke="#b87249" stroke-width="1.2" fill="none"/>

  <!-- Nose -->
  <path d="M 197 150 L 195 198 C 195 204 205 204 205 198 L 203 150" fill="none"/>
  <!-- Nose bridge highlight & shadow -->
  <path d="M 198 152 L 196 195 C 196 202 204 202 204 195" stroke="#be7b55" stroke-width="1.8" fill="none"/>
  <!-- Nose tip bulb -->
  <ellipse cx="200" cy="198" rx="7.5" ry="5.5" fill="#ca8963"/>
  <!-- Nostrils -->
  <path d="M 188 199 Q 192 195 196 200" stroke="#9e5b32" stroke-width="1.5" fill="none"/>
  <path d="M 212 199 Q 208 195 204 200" stroke="#9e5b32" stroke-width="1.5" fill="none"/>
  <ellipse cx="193" cy="201" rx="3" ry="1.8" fill="#58341e" opacity="0.6"/>
  <ellipse cx="207" cy="201" rx="3" ry="1.8" fill="#58341e" opacity="0.6"/>

  <!-- Philtrum -->
  <path d="M 198 205 L 197 215" stroke="#be7b55" stroke-width="1" fill="none"/>
  <path d="M 202 205 L 203 215" stroke="#be7b55" stroke-width="1" fill="none"/>

  <!-- Mouth & Lips (Warm, Calm Smile) -->
  <!-- Upper Lip -->
  <path d="M 182 219 C 192 216 198 218 200 219 C 202 218 208 216 218 219 C 210 223 190 223 182 219 Z" fill="#b96a4b"/>
  <!-- Lip Line -->
  <path d="M 180 220 Q 200 226 220 220" stroke="#783a24" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Lower Lip -->
  <path d="M 184 221 Q 200 232 216 221 C 210 230 190 230 184 221 Z" fill="#d97d5d"/>

  <!-- Chin Crease & Contour -->
  <path d="M 190 237 Q 200 241 210 237" stroke="#be7b55" stroke-width="1.4" fill="none"/>
  <ellipse cx="200" cy="246" rx="14" ry="7" fill="#b87249" opacity="0.25"/>
</svg>
`)}`;
