// High-fidelity official Indonesian Village Secretary (Sekretaris Desa / Carik Wegil) portrait SVG
// Portrays Bapak Lilik Sugiyanto wearing khaki Indonesian civil servant uniform (PDH Khaki) with solid red background

export const DEFAULT_SEKDES_PHOTO_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 440" width="100%" height="100%">
  <defs>
    <linearGradient id="sekdesRedBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#df0c1a"/>
      <stop offset="100%" stop-color="#b80512"/>
    </linearGradient>
    <linearGradient id="khakiUniform" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c9b085"/>
      <stop offset="60%" stop-color="#ba9f72"/>
      <stop offset="100%" stop-color="#a68a5d"/>
    </linearGradient>
    <linearGradient id="khakiDark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#b19669"/>
      <stop offset="100%" stop-color="#937a50"/>
    </linearGradient>
    <linearGradient id="khakiLight" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#dbcaa4"/>
      <stop offset="100%" stop-color="#c6ad81"/>
    </linearGradient>
    <linearGradient id="skinGradSekdes" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e2a680"/>
      <stop offset="60%" stop-color="#d4946d"/>
      <stop offset="100%" stop-color="#be7f56"/>
    </linearGradient>
    <linearGradient id="khakiButton" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d2c199"/>
      <stop offset="100%" stop-color="#8c754d"/>
    </linearGradient>
    <filter id="sekdesShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-opacity="0.2"/>
    </filter>
  </defs>

  <!-- Solid Official Red Background -->
  <rect width="400" height="440" fill="url(#sekdesRedBg)"/>

  <!-- Subtle Studio Light Vignette -->
  <circle cx="200" cy="190" r="170" fill="#ffffff" opacity="0.05"/>

  <!-- Body / Khaki Uniform (PDH Perangkat Desa) -->
  <g filter="url(#sekdesShadow)">
    <!-- Shoulders & Torso -->
    <path d="M 20 440 L 20 340 C 35 285 95 260 145 250 L 180 260 L 200 265 L 220 260 L 255 250 C 305 260 365 285 380 340 L 380 440 Z" fill="url(#khakiUniform)"/>
    
    <!-- Epaulette Straps (Pangkat Bahu Khaki) -->
    <!-- Left Epaulette -->
    <path d="M 40 310 L 110 270 L 116 288 L 46 328 Z" fill="url(#khakiLight)" stroke="#937a50" stroke-width="1"/>
    <circle cx="106" cy="278" r="4.5" fill="url(#khakiButton)" stroke="#745e38" stroke-width="1"/>
    <!-- Right Epaulette -->
    <path d="M 360 310 L 290 270 L 284 288 L 354 328 Z" fill="url(#khakiLight)" stroke="#937a50" stroke-width="1"/>
    <circle cx="294" cy="278" r="4.5" fill="url(#khakiButton)" stroke="#745e38" stroke-width="1"/>

    <!-- Shirt Placket Center -->
    <rect x="190" y="275" width="20" height="165" fill="url(#khakiDark)"/>
    
    <!-- Shirt Buttons Down Center -->
    <circle cx="200" cy="312" r="5.5" fill="url(#khakiButton)" stroke="#745e38" stroke-width="1"/>
    <circle cx="200" cy="360" r="5.5" fill="url(#khakiButton)" stroke="#745e38" stroke-width="1"/>
    <circle cx="200" cy="408" r="5.5" fill="url(#khakiButton)" stroke="#745e38" stroke-width="1"/>

    <!-- Pockets (Kantong Kemeja Kiri & Kanan) -->
    <!-- Left Pocket -->
    <rect x="65" y="375" width="85" height="65" rx="3" fill="url(#khakiLight)" stroke="#937a50" stroke-width="1"/>
    <path d="M 62 368 L 153 368 L 148 388 L 107 394 L 67 388 Z" fill="url(#khakiUniform)" stroke="#82693e" stroke-width="1"/>
    <circle cx="107" cy="386" r="4.5" fill="url(#khakiButton)"/>

    <!-- Right Pocket -->
    <rect x="250" y="375" width="85" height="65" rx="3" fill="url(#khakiLight)" stroke="#937a50" stroke-width="1"/>
    <path d="M 247 368 L 338 368 L 333 388 L 293 394 L 252 388 Z" fill="url(#khakiUniform)" stroke="#82693e" stroke-width="1"/>
    <circle cx="293" cy="386" r="4.5" fill="url(#khakiButton)"/>

    <!-- Collar & Open Neck -->
    <!-- Collar Left Wing -->
    <path d="M 140 250 L 180 300 L 195 272 L 175 245 Z" fill="url(#khakiLight)" stroke="#8c754d" stroke-width="1"/>
    <!-- Collar Right Wing -->
    <path d="M 260 250 L 220 300 L 205 272 L 225 245 Z" fill="url(#khakiLight)" stroke="#8c754d" stroke-width="1"/>
    <!-- Collar Band Under Chin -->
    <path d="M 175 245 L 200 268 L 225 245 Z" fill="url(#khakiDark)"/>
  </g>

  <!-- Neck -->
  <path d="M 168 185 L 168 255 C 180 268 220 268 232 255 L 232 185 Z" fill="url(#skinGradSekdes)"/>
  <!-- Neck Shadow -->
  <ellipse cx="200" cy="205" rx="32" ry="12" fill="#9e5b32" opacity="0.3"/>

  <!-- Head Base Shape (Round & Composed) -->
  <ellipse cx="200" cy="150" rx="72" ry="78" fill="url(#skinGradSekdes)"/>

  <!-- Hair (Short Buzz-Cut Hairline, Receding Temples) -->
  <!-- Top hair contour -->
  <path d="M 132 145 C 132 85 160 72 200 72 C 240 72 268 85 268 145 C 268 128 258 102 245 98 C 230 94 218 96 200 96 C 182 96 170 94 155 98 C 142 102 132 128 132 145 Z" fill="#262322"/>
  <!-- Soft buzz hair shadow on crown -->
  <path d="M 148 100 Q 200 86 252 100 Q 200 92 148 100 Z" fill="#1c1917" opacity="0.8"/>

  <!-- Ears -->
  <ellipse cx="127" cy="152" rx="9" ry="18" fill="#d4946d"/>
  <path d="M 129 144 Q 133 152 129 160" stroke="#9e5b32" stroke-width="1.5" fill="none"/>
  <ellipse cx="273" cy="152" rx="9" ry="18" fill="#d4946d"/>
  <path d="M 271 144 Q 267 152 271 160" stroke="#9e5b32" stroke-width="1.5" fill="none"/>

  <!-- Forehead Texture / Subtle Tone -->
  <path d="M 165 110 Q 200 106 235 110" stroke="#c07e55" stroke-width="1" fill="none" opacity="0.4"/>

  <!-- Eyebrows -->
  <path d="M 152 128 Q 170 123 186 127" stroke="#262322" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M 248 128 Q 230 123 214 127" stroke="#262322" stroke-width="3.5" fill="none" stroke-linecap="round"/>

  <!-- Eyes (Almond Shaped, Attentive & Friendly) -->
  <!-- Left Eye -->
  <ellipse cx="170" cy="138" rx="10" ry="6" fill="#ffffff"/>
  <circle cx="170" cy="138" r="4.5" fill="#262322"/>
  <circle cx="172" cy="136" r="1.5" fill="#ffffff"/>
  <path d="M 158 136 Q 170 131 182 136" stroke="#5a3821" stroke-width="1.5" fill="none"/>

  <!-- Right Eye -->
  <ellipse cx="230" cy="138" rx="10" ry="6" fill="#ffffff"/>
  <circle cx="230" cy="138" r="4.5" fill="#262322"/>
  <circle cx="232" cy="136" r="1.5" fill="#ffffff"/>
  <path d="M 218 136 Q 230 131 242 136" stroke="#5a3821" stroke-width="1.5" fill="none"/>

  <!-- Nose -->
  <path d="M 199 133 L 195 163 Q 200 168 205 163 Z" fill="#be7f56"/>
  <path d="M 189 164 Q 200 171 211 164" stroke="#9e5b32" stroke-width="1.5" fill="none"/>
  <ellipse cx="193" cy="165" rx="3.5" ry="2" fill="#5a3821" opacity="0.6"/>
  <ellipse cx="207" cy="165" rx="3.5" ry="2" fill="#5a3821" opacity="0.6"/>

  <!-- Signature Mustache (Kumis Khas Bapak Lilik Sugiyanto) -->
  <path d="M 172 176 Q 200 171 228 176 Q 215 186 200 181 Q 185 186 172 176 Z" fill="#221f1e"/>
  <path d="M 174 177 Q 200 174 226 177" stroke="#171413" stroke-width="2" fill="none"/>

  <!-- Lips -->
  <path d="M 184 186 Q 200 191 216 186" stroke="#9e5b32" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M 188 191 Q 200 196 212 191" stroke="#b06b42" stroke-width="1.5" fill="none"/>

  <!-- Chin contour -->
  <ellipse cx="200" cy="204" rx="14" ry="7" fill="#b06b42" opacity="0.3"/>
</svg>
`)}`;
