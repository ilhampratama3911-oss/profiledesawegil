// Authentic visual representation of Sendang Jepatan, Dukuh Jepatan, Desa Wegil
// Accurately portrays the real site photo:
// - Shady ancient tree on the bank
// - Clear natural spring water with greenish-emerald hue and concentric surface ripples
// - Reflections of the tree and sky
// - Low stone retaining wall, rustic village backdrop with corrugated roof and banana trees
// - Curved stone paving border in the foreground

export const SENDANG_JEPATAN_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  <defs>
    <!-- Sky & Upper Canopy Gradients -->
    <linearGradient id="skyGlow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eaf5df"/>
      <stop offset="40%" stop-color="#cde3be"/>
      <stop offset="100%" stop-color="#9ebd85"/>
    </linearGradient>

    <!-- Clear Spring Water Gradient -->
    <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#6b9685"/>
      <stop offset="30%" stop-color="#558271"/>
      <stop offset="65%" stop-color="#416c5c"/>
      <stop offset="100%" stop-color="#2d5244"/>
    </linearGradient>

    <!-- Tree Reflection Gradient -->
    <linearGradient id="treeReflectGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2c4739" stop-opacity="0.85"/>
      <stop offset="50%" stop-color="#345443" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#466f5a" stop-opacity="0.2"/>
    </linearGradient>

    <!-- Sunlight Surface Sheen -->
    <linearGradient id="sunSheen" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="50%" stop-color="#e6fff7" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>

    <!-- Rustic Corrugated Roof Pattern -->
    <pattern id="corrugation" width="12" height="60" patternUnits="userSpaceOnUse">
      <rect width="6" height="60" fill="#758287"/>
      <rect x="6" width="6" height="60" fill="#8d9a9f"/>
      <line x1="0" y1="0" x2="0" y2="60" stroke="#5a656a" stroke-width="1.5"/>
    </pattern>

    <!-- Stone Wall Texture Pattern -->
    <linearGradient id="stoneWallGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d4cbba"/>
      <stop offset="50%" stop-color="#b8ad9a"/>
      <stop offset="100%" stop-color="#8c826f"/>
    </linearGradient>

    <!-- Foreground Curb Gradient -->
    <linearGradient id="curbGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d8dbdc"/>
      <stop offset="40%" stop-color="#b6bbbd"/>
      <stop offset="100%" stop-color="#737a7d"/>
    </linearGradient>
  </defs>

  <!-- 1. Background Sky & High Sunlight -->
  <rect width="1000" height="420" fill="url(#skyGlow)"/>

  <!-- Sunlit Tree Canopy & Leaves Background (Upper Left and Center) -->
  <g id="upperCanopy">
    <!-- Soft background trees -->
    <circle cx="120" cy="90" r="140" fill="#76a858" opacity="0.85"/>
    <circle cx="280" cy="80" r="130" fill="#88bd62" opacity="0.9"/>
    <circle cx="450" cy="90" r="120" fill="#679749" opacity="0.85"/>
    <circle cx="680" cy="110" r="130" fill="#7ba85a" opacity="0.9"/>
    <circle cx="860" cy="100" r="150" fill="#608d43" opacity="0.95"/>
    
    <!-- Sun highlights on top foliage -->
    <circle cx="220" cy="50" r="80" fill="#aee07d" opacity="0.6"/>
    <circle cx="580" cy="60" r="90" fill="#c3eb94" opacity="0.55"/>
    <circle cx="790" cy="70" r="100" fill="#9cd169" opacity="0.6"/>
  </g>

  <!-- 2. Rural Buildings Behind Pond (Center-Left) -->
  <g id="villageBuilding">
    <!-- Brick/Plastered Wall on Left -->
    <rect x="220" y="240" width="160" height="120" fill="#b0aba2"/>
    <rect x="225" y="245" width="150" height="110" fill="#9c958a"/>
    <!-- Brick lines -->
    <line x1="220" y1="270" x2="380" y2="270" stroke="#7e786e" stroke-width="1.5"/>
    <line x1="220" y1="300" x2="380" y2="300" stroke="#7e786e" stroke-width="1.5"/>
    <line x1="220" y1="330" x2="380" y2="330" stroke="#7e786e" stroke-width="1.5"/>
    
    <!-- Corrugated Metal Roof Shed (Center) -->
    <polygon points="360,275 690,265 710,305 350,315" fill="#616c70"/>
    <polygon points="365,278 685,268 705,302 355,312" fill="url(#corrugation)"/>
    <!-- Rusty/Weathered Roof patches -->
    <path d="M 450,285 Q 520,280 580,295 Q 510,300 450,285 Z" fill="#945738" opacity="0.75"/>
    <path d="M 590,275 Q 640,272 670,285 Q 630,290 590,275 Z" fill="#854c2e" opacity="0.7"/>

    <!-- Shed Wall below roof -->
    <rect x="375" y="310" width="310" height="55" fill="#4d443b"/>
    <rect x="390" y="315" width="120" height="48" fill="#38312a"/>
  </g>

  <!-- 3. Banana Trees & Lush Tropical Foliage on Right Bank -->
  <g id="bananaTreesRight">
    <!-- Banana Stems -->
    <path d="M 850,370 Q 860,260 880,140" stroke="#719445" stroke-width="14" fill="none"/>
    <path d="M 770,370 Q 765,280 740,190" stroke="#68873d" stroke-width="12" fill="none"/>
    <path d="M 930,370 Q 940,270 960,170" stroke="#5d7d36" stroke-width="11" fill="none"/>

    <!-- Banana Leaves (Large drooping paddle shapes) -->
    <!-- Leaf 1 -->
    <path d="M 880,140 Q 820,100 780,130 Q 790,170 880,140 Z" fill="#7ebf47"/>
    <path d="M 880,140 Q 830,115 780,130" stroke="#a4db69" stroke-width="2.5" fill="none"/>
    <!-- Leaf 2 -->
    <path d="M 880,140 Q 940,80 970,120 Q 930,160 880,140 Z" fill="#6fa83b"/>
    <path d="M 880,140 Q 935,100 970,120" stroke="#93cc58" stroke-width="2.5" fill="none"/>
    <!-- Leaf 3 -->
    <path d="M 740,190 Q 660,160 620,200 Q 670,240 740,190 Z" fill="#8bc94b"/>
    <path d="M 740,190 Q 670,180 620,200" stroke="#b2e874" stroke-width="2.5" fill="none"/>
    <!-- Leaf 4 -->
    <path d="M 740,190 Q 790,140 840,170 Q 800,210 740,190 Z" fill="#699e33"/>
    <!-- Leaf 5 -->
    <path d="M 870,200 Q 800,210 750,250 Q 810,275 870,200 Z" fill="#7ebf47"/>
    <!-- Leaf 6 -->
    <path d="M 940,210 Q 980,170 1000,205 Q 980,245 940,210 Z" fill="#61942d"/>
    <!-- Leaf 7 drooping -->
    <path d="M 640,230 Q 600,260 590,300 Q 630,310 640,230 Z" fill="#5b872d"/>

    <!-- Bamboo/Branch details on right -->
    <line x1="720" y1="365" x2="790" y2="280" stroke="#4a3e30" stroke-width="4"/>
    <line x1="740" y1="365" x2="810" y2="290" stroke="#5c4e3d" stroke-width="3"/>
  </g>

  <!-- 4. Low Stone Wall Border Along Rear of Pond -->
  <g id="stoneWallBack">
    <!-- Base stone wall structure -->
    <polygon points="140,350 920,370 920,430 140,410" fill="url(#stoneWallGrad)"/>
    <!-- Stone wall top capping edge -->
    <polygon points="135,348 925,368 925,380 135,360" fill="#e8dfce"/>
    
    <!-- Stone block joints & mortar lines -->
    <path d="M 200,360 L 205,405 M 280,362 L 275,408 M 370,365 L 375,410 M 460,367 L 455,412 M 560,370 L 565,415 M 660,372 L 655,418 M 760,374 L 765,420 M 850,376 L 850,423" stroke="#5f5647" stroke-width="2" opacity="0.6"/>
    <!-- Horizontal mortar line -->
    <path d="M 140,385 Q 530,395 920,400" stroke="#5f5647" stroke-width="2" fill="none" opacity="0.5"/>
    
    <!-- Path / Paved border between wall and water -->
    <polygon points="140,405 920,425 920,450 140,435" fill="#c4bbaa"/>
    <polygon points="140,430 920,448 920,455 140,438" fill="#8f8576"/>
  </g>

  <!-- 5. Majestic Old Shade Tree on Left Bank -->
  <g id="bigTreeLeft">
    <!-- Tree Trunk & Exposed Gnarled Roots -->
    <!-- Main thick trunk -->
    <path d="M 300,160 Q 340,240 370,330 Q 395,380 405,425 Q 390,435 360,430 Q 330,370 300,340 Q 285,380 270,430 Q 245,432 230,425 Q 260,350 250,280 Q 240,220 280,160 Z" fill="#4d3827"/>
    
    <!-- Left secondary trunk & root spread -->
    <path d="M 255,270 Q 220,320 180,370 Q 150,390 130,425 Q 115,420 135,385 Q 170,350 210,300 Z" fill="#3f2d1f"/>

    <!-- Trunk bark textures, ridges, and shadow hollows -->
    <path d="M 330,240 Q 355,300 365,360 Q 375,400 380,425" stroke="#2a1e15" stroke-width="6" fill="none"/>
    <path d="M 300,280 Q 320,330 330,390" stroke="#6e5239" stroke-width="4.5" fill="none"/>
    <path d="M 270,310 Q 285,360 280,410" stroke="#2a1e15" stroke-width="5" fill="none"/>
    <!-- Tree hollow in the center (visible in photo) -->
    <ellipse cx="345" cy="355" rx="12" ry="24" fill="#1b120c"/>
    <ellipse cx="347" cy="355" rx="7" ry="18" fill="#0d0906"/>
    
    <!-- Massive root base spreading into the ground -->
    <path d="M 230,425 Q 310,415 405,425 Q 410,435 390,440 Q 310,430 220,435 Z" fill="#38271a"/>

    <!-- Canopy foliage directly on tree branches -->
    <circle cx="280" cy="180" r="85" fill="#3f6626" opacity="0.95"/>
    <circle cx="340" cy="190" r="75" fill="#588537" opacity="0.9"/>
    <circle cx="210" cy="180" r="70" fill="#4a752c" opacity="0.95"/>
    <circle cx="290" cy="130" r="90" fill="#6fa145" opacity="0.85"/>
    <circle cx="380" cy="140" r="80" fill="#7eb54f" opacity="0.9"/>

    <!-- Sunlit leafy clusters -->
    <circle cx="270" cy="115" r="45" fill="#99d65c" opacity="0.75"/>
    <circle cx="360" cy="120" r="50" fill="#aee86d" opacity="0.7"/>
    <circle cx="220" cy="150" r="40" fill="#84bf4b" opacity="0.8"/>
  </g>

  <!-- 6. THE WATER POND (Sendang Jepatan) -->
  <g id="springPond">
    <!-- Main Water Body -->
    <polygon points="0,440 1000,445 1000,940 0,940" fill="url(#waterGrad)"/>

    <!-- Deep Water Shading on Left (under tree) -->
    <polygon points="0,440 480,443 450,850 0,850" fill="url(#treeReflectGrad)"/>

    <!-- Tree Reflection in the Water (Distorted soft ripples) -->
    <g opacity="0.75">
      <!-- Main trunk reflection -->
      <path d="M 270,445 Q 310,540 330,640 Q 320,720 280,780 Q 240,700 250,580 Q 260,500 270,445 Z" fill="#1f3629" filter="blur(4px)"/>
      <path d="M 330,445 Q 365,520 380,600 Q 370,680 340,750 Q 320,660 325,550 Z" fill="#294435" filter="blur(3px)"/>
      <!-- Green foliage reflection -->
      <ellipse cx="320" cy="510" rx="90" ry="40" fill="#2d4a36" opacity="0.6"/>
      <ellipse cx="340" cy="590" rx="80" ry="35" fill="#365741" opacity="0.55"/>
      <ellipse cx="300" cy="670" rx="70" ry="30" fill="#27402f" opacity="0.5"/>
    </g>

    <!-- Sky and Daylight Reflection (Right and Center) -->
    <ellipse cx="650" cy="530" rx="260" ry="90" fill="#7bbda3" opacity="0.35"/>
    <ellipse cx="720" cy="620" rx="220" ry="80" fill="#8ecdb4" opacity="0.3"/>
    <ellipse cx="600" cy="700" rx="280" ry="90" fill="#69a890" opacity="0.25"/>

    <!-- Sunlight Surface Sheen -->
    <rect x="0" y="445" width="1000" height="495" fill="url(#sunSheen)"/>

    <!-- Water Surface Ripples & Wavelets (Characteristic of Sendang Spring) -->
    <!-- Center circular spring bubbling ripples (Distinct feature in photo) -->
    <g id="springBubblingRipples">
      <ellipse cx="530" cy="610" rx="35" ry="14" stroke="#b6edd8" stroke-width="2.2" fill="none" opacity="0.8"/>
      <ellipse cx="530" cy="610" rx="65" ry="24" stroke="#a4e4cd" stroke-width="2.2" fill="none" opacity="0.75"/>
      <ellipse cx="530" cy="610" rx="100" ry="36" stroke="#90dac0" stroke-width="2" fill="none" opacity="0.65"/>
      <ellipse cx="530" cy="610" rx="145" ry="50" stroke="#7ecdb1" stroke-width="1.8" fill="none" opacity="0.55"/>
      <ellipse cx="530" cy="610" rx="195" ry="68" stroke="#71c4a7" stroke-width="1.6" fill="none" opacity="0.45"/>
      <ellipse cx="530" cy="610" rx="250" ry="85" stroke="#66b89c" stroke-width="1.4" fill="none" opacity="0.35"/>
    </g>

    <!-- Ambient Horizontal Surface Ripples -->
    <g stroke="#a6e8d2" stroke-width="1.5" fill="none" opacity="0.5">
      <path d="M 80,480 Q 180,475 280,482 Q 380,489 480,481"/>
      <path d="M 450,475 Q 600,470 750,478 Q 850,483 950,476"/>
      <path d="M 120,530 Q 250,522 380,532"/>
      <path d="M 680,520 Q 780,515 880,523"/>
      <path d="M 180,575 Q 310,568 440,578"/>
      <path d="M 720,565 Q 830,558 940,568"/>
      <path d="M 60,630 Q 190,622 320,633"/>
      <path d="M 700,630 Q 820,620 940,632"/>
      <path d="M 140,690 Q 280,680 420,693"/>
      <path d="M 620,695 Q 770,685 920,697"/>
      <path d="M 80,750 Q 230,740 380,753"/>
      <path d="M 520,760 Q 690,750 860,763"/>
      <path d="M 120,820 Q 300,810 480,823"/>
      <path d="M 540,825 Q 720,815 900,828"/>
      <path d="M 220,870 Q 420,858 620,872"/>
      <path d="M 680,875 Q 820,865 960,878"/>
    </g>
  </g>

  <!-- 7. Foreground Curved Paved Stone Border (Bottom Edge) -->
  <g id="foregroundCurb">
    <!-- Curved border matching photo (arched upward from corners) -->
    <path d="M 0,935 Q 500,955 1000,920 L 1000,1000 L 0,1000 Z" fill="url(#curbGrad)"/>
    <!-- Top beveled edge of stone curb -->
    <path d="M 0,935 Q 500,955 1000,920" stroke="#f1f3f4" stroke-width="5" fill="none"/>
    <path d="M 0,942 Q 500,962 1000,927" stroke="#7e8588" stroke-width="2" fill="none"/>
    
    <!-- Paving stone vertical joints -->
    <path d="M 120,940 L 110,1000 M 240,946 L 230,1000 M 370,951 L 360,1000 M 500,954 L 495,1000 M 640,948 L 640,1000 M 770,939 L 775,1000 M 890,929 L 900,1000" stroke="#5c6366" stroke-width="2.5" opacity="0.65"/>

    <!-- Subtle water lap against the stone curb -->
    <path d="M 0,936 Q 500,956 1000,921" stroke="#b2ede0" stroke-width="2.5" fill="none" opacity="0.75"/>
  </g>

  <!-- 8. Identification Badge / Overlay Tag -->
  <g id="overlayBadge" transform="translate(30, 930)">
    <rect width="360" height="42" rx="12" fill="#0f172a" fill-opacity="0.88"/>
    <rect width="360" height="42" rx="12" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.5" fill="none"/>
    <circle cx="22" cy="21" r="7" fill="#10b981"/>
    <text x="38" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#ffffff" letter-spacing="0.5">
      Sendang Jepatan — Desa Wegil
    </text>
  </g>
</svg>
`)}`;
