import type { ClientScene } from "@/config/clients";

/**
 * Cenas animadas (estilo "GIF", em SVG + CSS) usadas enquanto não houver
 * vídeo real de cada cliente. Leves (poucos KB), nítidas em qualquer tela
 * e pausadas automaticamente com prefers-reduced-motion.
 */

const VB = "0 0 640 360";

function Balneario() {
  return (
    <svg viewBox={VB} className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bal-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1d4e7e" />
          <stop offset="0.55" stopColor="#f59e5b" />
          <stop offset="1" stopColor="#ffd08a" />
        </linearGradient>
        <linearGradient id="bal-river" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2a7fa3" />
          <stop offset="1" stopColor="#0b3a5a" />
        </linearGradient>
        <radialGradient id="bal-sun">
          <stop offset="0" stopColor="#fff6d6" />
          <stop offset="0.5" stopColor="#ffd27a" />
          <stop offset="1" stopColor="#ffb347" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="230" fill="url(#bal-sky)" />
      <g className="sc-sink">
        <circle cx="430" cy="185" r="70" fill="url(#bal-sun)" opacity="0.8" />
        <circle cx="430" cy="185" r="30" fill="#fff1c4" />
      </g>
      <path d="M0 205 C80 180 140 195 210 186 S330 170 400 190 S540 176 640 196 L640 232 L0 232Z" fill="#5a3b46" opacity="0.75" />
      <path d="M0 215 C120 200 220 214 320 206 S520 200 640 212 L640 232 L0 232Z" fill="#3d2a3a" />
      <rect y="230" width="640" height="130" fill="url(#bal-river)" />
      <g className="sc-shimmer">
        {[244, 262, 282, 306, 334].map((y, i) => (
          <rect key={y} x={430 - 34 + i * 4} y={y} width={68 - i * 8} height="3" rx="1.5" fill="#ffe2a0" opacity={0.85 - i * 0.12} />
        ))}
      </g>
      <g className="sc-waves" opacity="0.35">
        {[252, 276, 300, 326, 350].map((y, i) => (
          <path key={y} d={`M-40 ${y} q20 -5 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0`} stroke="#bfe9ff" strokeWidth={1.2 + i * 0.2} fill="none" />
        ))}
      </g>
      {/* Canoa */}
      <g className="sc-drift">
        <g className="sc-bob">
          <path d="M0 0 h70 q-8 12 -27 12 h-16 q-19 0 -27 -12z" fill="#2a1b17" transform="translate(150 262)" />
          <path d="M190 262 l0 -34 l18 30z" fill="#f4efe6" />
          <line x1="190" y1="262" x2="190" y2="224" stroke="#2a1b17" strokeWidth="2" />
          <circle cx="172" cy="254" r="5" fill="#2a1b17" />
          <rect x="168" y="257" width="8" height="6" fill="#2a1b17" />
        </g>
      </g>
      {/* Margem com palhoça e coqueiro */}
      <path d="M0 236 L0 360 L120 360 C110 320 90 270 60 246 C40 236 20 234 0 236Z" fill="#c9a36b" />
      <path d="M0 250 L0 360 L80 360 C70 320 55 278 30 258Z" fill="#a9844f" />
      <g>
        <rect x="8" y="196" width="4" height="50" fill="#4a2f22" />
        <rect x="58" y="196" width="4" height="50" fill="#4a2f22" />
        <path d="M-6 200 L35 168 L76 200Z" fill="#8a5a2b" />
        <path d="M-6 200 L35 168 L76 200" stroke="#6b4320" strokeWidth="3" fill="none" />
        <path d="M2 212 Q35 222 68 212" stroke="#3a2a1f" strokeWidth="1" fill="none" />
        {[10, 22, 35, 48, 60].map((x, i) => (
          <circle key={x} className="sc-twinkle" style={{ animationDelay: `${i * 0.35}s` }} cx={x} cy={213 + (i % 2) * 3} r="2.4" fill="#ffd75e" />
        ))}
      </g>
      <g className="sc-sway" style={{ transformOrigin: "110px 300px" }}>
        <path d="M110 300 C112 260 116 220 124 176" stroke="#5b3a26" strokeWidth="6" fill="none" strokeLinecap="round" />
        {[-60, -25, 10, 45, 80, 120].map((r) => (
          <path key={r} d="M124 176 q30 -6 52 14 q-26 -8 -52 -14z" fill="#2f6b3a" transform={`rotate(${r} 124 176)`} />
        ))}
      </g>
      {[
        [520, 70],
        [548, 58],
      ].map(([x, y], i) => (
        <path key={x} className="sc-fly" style={{ animationDelay: `${i * 0.6}s` }} d={`M${x} ${y} q6 -6 12 0 q6 -6 12 0`} stroke="#2b2a3a" strokeWidth="2" fill="none" />
      ))}
    </svg>
  );
}

function Acai() {
  return (
    <svg viewBox={VB} className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="ac-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0" stopColor="#7b2fd1" />
          <stop offset="1" stopColor="#2a0a4d" />
        </radialGradient>
        <radialGradient id="ac-cream" cx="40%" cy="30%" r="70%">
          <stop offset="0" stopColor="#7d3a8f" />
          <stop offset="0.6" stopColor="#4a1258" />
          <stop offset="1" stopColor="#2b0836" />
        </radialGradient>
        <linearGradient id="ac-bowl" x1="0" x2="1">
          <stop offset="0" stopColor="#5b3a1f" />
          <stop offset="0.5" stopColor="#8b5a2b" />
          <stop offset="1" stopColor="#4a2d17" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#ac-bg)" />
      <g className="sc-spin-slow" opacity="0.5">
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (i / 10) * Math.PI * 2;
          return <circle key={i} cx={320 + Math.cos(a) * 230} cy={200 + Math.sin(a) * 130} r={6 + (i % 3) * 3} fill="#1b0629" stroke="#9b59d0" strokeWidth="1" />;
        })}
      </g>
      {[
        [90, 70],
        [560, 90],
        [120, 300],
        [520, 290],
        [300, 40],
      ].map(([x, y], i) => (
        <path key={i} className="sc-twinkle" style={{ animationDelay: `${i * 0.4}s` }} d={`M${x} ${y - 8} L${x + 2} ${y - 2} L${x + 8} ${y} L${x + 2} ${y + 2} L${x} ${y + 8} L${x - 2} ${y + 2} L${x - 8} ${y} L${x - 2} ${y - 2}Z`} fill="#f5e1ff" />
      ))}
      <ellipse cx="320" cy="322" rx="150" ry="14" fill="#000" opacity="0.35" />
      <g className="sc-float">
        <path d="M190 212 Q200 312 320 316 Q440 312 450 212Z" fill="url(#ac-bowl)" />
        <path d="M205 240 Q320 252 435 240" stroke="#3a2412" strokeWidth="2" fill="none" opacity="0.5" />
        <ellipse cx="320" cy="212" rx="130" ry="26" fill="#3b2412" />
        <path d="M196 212 Q210 132 320 128 Q430 132 444 212 Q320 236 196 212Z" fill="url(#ac-cream)" />
        <path d="M250 160 Q280 140 320 142" stroke="#c48ad6" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.5" />
        {/* Toppings que caem */}
        <g className="sc-drop" style={{ animationDelay: "0s" }}>
          <circle cx="268" cy="176" r="15" fill="#fbe7a1" stroke="#e8c96a" strokeWidth="2" />
          <circle cx="268" cy="176" r="4" fill="#e8c96a" />
        </g>
        <g className="sc-drop" style={{ animationDelay: "0.35s" }}>
          <circle cx="300" cy="160" r="14" fill="#fbe7a1" stroke="#e8c96a" strokeWidth="2" />
          <circle cx="300" cy="160" r="4" fill="#e8c96a" />
        </g>
        <g className="sc-drop" style={{ animationDelay: "0.7s" }}>
          <path d="M360 150 q18 -6 22 14 q-4 22 -22 26 q-18 -4 -22 -26 q4 -20 22 -14z" fill="#e8213a" />
          <path d="M352 146 l8 6 l8 -6 l-8 -4z" fill="#2f8f3a" />
        </g>
        <g className="sc-drop" style={{ animationDelay: "1s" }}>
          {[
            [330, 186],
            [342, 196],
            [318, 198],
            [396, 186],
            [404, 176],
            [240, 196],
          ].map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="8" height="6" rx="2" fill="#c98d3c" transform={`rotate(${i * 30} ${x} ${y})`} />
          ))}
        </g>
        <path className="sc-draw" d="M230 180 Q260 196 290 182 T350 186 T410 178" stroke="#fff8ef" strokeWidth="6" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

function Espetinho() {
  const skewers = [0, 1, 2];
  return (
    <svg viewBox={VB} className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="es-bg" cx="50%" cy="85%" r="80%">
          <stop offset="0" stopColor="#5a1a0a" />
          <stop offset="0.6" stopColor="#1c0d08" />
          <stop offset="1" stopColor="#0b0705" />
        </radialGradient>
        <linearGradient id="es-ember" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ffb340" />
          <stop offset="1" stopColor="#ff3d1f" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#es-bg)" />
      {/* Fumaça */}
      {[200, 300, 400].map((x, i) => (
        <path key={x} className="sc-smoke" style={{ animationDelay: `${i * 1.1}s` }} d={`M${x} 170 q-20 -30 0 -60 q20 -30 0 -60`} stroke="#b8aea8" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0" />
      ))}
      {/* Churrasqueira */}
      <rect x="110" y="232" width="420" height="80" rx="8" fill="#2a2420" />
      <rect x="122" y="232" width="396" height="30" fill="#140c08" />
      <g>
        {Array.from({ length: 14 }).map((_, i) => (
          <circle key={i} className="sc-ember" style={{ animationDelay: `${(i * 0.23) % 1.6}s` }} cx={140 + i * 28} cy={252 + (i % 3) * 3} r={9 + (i % 2) * 3} fill="url(#es-ember)" />
        ))}
      </g>
      {/* Chamas */}
      {Array.from({ length: 7 }).map((_, i) => (
        <path key={i} className="sc-flame" style={{ animationDelay: `${i * 0.17}s`, transformOrigin: `${150 + i * 56}px 236px` }} d={`M${150 + i * 56} 236 q-14 -22 0 -46 q4 18 12 22 q4 -14 -2 -26 q20 16 6 50z`} fill="#ff8a1f" opacity="0.85" />
      ))}
      {/* Grelha */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="118" x2="522" y1={222 + (i % 1)} y2={222} stroke="#6b625b" strokeWidth="3" transform={`translate(0 ${i === 0 ? 0 : 0})`} />
      ))}
      <rect x="114" y="220" width="412" height="6" rx="3" fill="#7a716a" />
      {/* Espetos */}
      {skewers.map((s) => (
        <g key={s} className="sc-turn" style={{ animationDelay: `${s * 0.4}s`, transformOrigin: `${197 + s * 125}px 196px` }}>
          <line x1={150 + s * 125} y1="222" x2={244 + s * 125} y2="170" stroke="#d9b98a" strokeWidth="4" strokeLinecap="round" />
          {[0, 1, 2, 3].map((k) => {
            const x = 172 + s * 125 + k * 17;
            const y = 214 - k * 9.4;
            const meat = s === 2 ? (k % 2 ? "#f2e1b8" : "#c98d3c") : k % 2 ? "#8b3a1c" : "#6b2a14";
            return <rect key={k} x={x - 9} y={y - 12} width="18" height="20" rx="5" fill={meat} stroke="#3a1608" strokeWidth="1.5" />;
          })}
        </g>
      ))}
      {/* Baião cremoso */}
      <g className="sc-float" style={{ animationDuration: "5s" }}>
        <ellipse cx="560" cy="306" rx="58" ry="12" fill="#000" opacity="0.4" />
        <path d="M502 268 Q506 312 560 314 Q614 312 618 268Z" fill="#e9e4dc" />
        <ellipse cx="560" cy="268" rx="58" ry="14" fill="#f3d9a4" />
        {[
          [540, 266],
          [566, 262],
          [584, 270],
          [552, 272],
        ].map(([x, y], i) => (
          <ellipse key={i} cx={x} cy={y} rx="6" ry="3" fill="#7a4a1c" />
        ))}
        <circle cx="574" cy="268" r="3" fill="#3f8f3a" />
        {[540, 560, 580].map((x, i) => (
          <path key={x} className="sc-steam" style={{ animationDelay: `${i * 0.5}s` }} d={`M${x} 250 q-8 -12 0 -24 q8 -12 0 -24`} stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0" />
        ))}
      </g>
    </svg>
  );
}

function Sunset() {
  return (
    <svg viewBox={VB} className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="su-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2b1856" />
          <stop offset="0.45" stopColor="#c2417a" />
          <stop offset="0.8" stopColor="#ff8a3d" />
          <stop offset="1" stopColor="#ffc46b" />
        </linearGradient>
        <linearGradient id="su-pool" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#3fd0e0" />
          <stop offset="1" stopColor="#127a96" />
        </linearGradient>
        <radialGradient id="su-sun">
          <stop offset="0" stopColor="#fff2c2" />
          <stop offset="0.6" stopColor="#ffb04a" />
          <stop offset="1" stopColor="#ff7a2e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="360" fill="url(#su-sky)" />
      {[
        [60, 40],
        [140, 22],
        [250, 50],
        [400, 30],
        [500, 56],
        [600, 24],
      ].map(([x, y], i) => (
        <circle key={i} className="sc-twinkle" style={{ animationDelay: `${i * 0.5}s` }} cx={x} cy={y} r="1.6" fill="#fff" />
      ))}
      <g className="sc-sink">
        <circle cx="330" cy="190" r="90" fill="url(#su-sun)" />
        <circle cx="330" cy="190" r="42" fill="#ffe3a0" />
      </g>
      <path d="M0 220 L70 168 L120 196 L190 140 L260 200 L340 176 L420 206 L500 150 L570 192 L640 170 L640 250 L0 250Z" fill="#5b2350" opacity="0.85" />
      <path d="M0 236 C120 222 240 240 360 228 S560 226 640 236 L640 260 L0 260Z" fill="#3a1638" />
      {[
        [470, 80],
        [496, 70],
        [520, 84],
      ].map(([x, y], i) => (
        <path key={i} className="sc-fly" style={{ animationDelay: `${i * 0.5}s` }} d={`M${x} ${y} q5 -5 10 0 q5 -5 10 0`} stroke="#2b1630" strokeWidth="2" fill="none" />
      ))}
      {/* Deck e piscina */}
      <rect y="256" width="640" height="104" fill="#d9b58a" />
      <path d="M60 280 H580 Q600 280 600 300 V340 Q600 352 588 352 H72 Q60 352 60 340Z" fill="url(#su-pool)" />
      <g className="sc-waves" opacity="0.7">
        {[292, 310, 328, 344].map((y) => (
          <path key={y} d={`M40 ${y} q15 -4 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0`} stroke="#c9f6ff" strokeWidth="1.6" fill="none" />
        ))}
      </g>
      <g className="sc-shimmer">
        <rect x="300" y="290" width="60" height="3" rx="1.5" fill="#ffe2a0" />
        <rect x="310" y="306" width="40" height="3" rx="1.5" fill="#ffe2a0" opacity="0.7" />
      </g>
      {/* Guarda-sol e espreguiçadeira */}
      <line x1="512" y1="268" x2="512" y2="196" stroke="#5b3a26" strokeWidth="4" />
      <path d="M462 206 Q512 168 562 206Z" fill="#ff5e7e" />
      <path d="M487 206 Q512 176 537 206" fill="#fff" opacity="0.6" />
      <path d="M440 270 L470 252 L520 252 L530 270" stroke="#fff" strokeWidth="5" fill="none" strokeLinejoin="round" />
      {/* Mandacarus */}
      {[
        { x: 40, h: 120, s: 1 },
        { x: 600, h: 100, s: 0.85 },
        { x: 150, h: 70, s: 0.6 },
      ].map(({ x, h, s }, i) => (
        <g key={i} className="sc-sway" style={{ transformOrigin: `${x}px 270px`, animationDuration: `${6 + i}s` }}>
          <rect x={x - 9 * s} y={270 - h} width={18 * s} height={h} rx={9 * s} fill="#1f6b3a" />
          <path d={`M${x - 9 * s} ${270 - h * 0.45} h-${18 * s} v-${32 * s}`} stroke="#1f6b3a" strokeWidth={14 * s} strokeLinecap="round" fill="none" />
          <path d={`M${x + 9 * s} ${270 - h * 0.6} h${16 * s} v-${28 * s}`} stroke="#1f6b3a" strokeWidth={14 * s} strokeLinecap="round" fill="none" />
          <rect x={x - 2 * s} y={274 - h} width={4 * s} height={h - 8} fill="#2f8f4e" opacity="0.6" />
        </g>
      ))}
    </svg>
  );
}

function Pizzaria() {
  const pepperoni = [
    [-40, -30],
    [30, -44],
    [50, 10],
    [-10, 30],
    [-56, 16],
    [10, -8],
  ];
  return (
    <svg viewBox={VB} className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="pz-fire" cx="50%" cy="80%" r="60%">
          <stop offset="0" stopColor="#ffd25e" />
          <stop offset="0.5" stopColor="#ff6a1a" />
          <stop offset="1" stopColor="#2a0d06" />
        </radialGradient>
        <radialGradient id="pz-cheese" cx="45%" cy="40%" r="60%">
          <stop offset="0" stopColor="#ffe9a3" />
          <stop offset="1" stopColor="#f5b942" />
        </radialGradient>
      </defs>
      <rect width="640" height="360" fill="#3a1d14" />
      {Array.from({ length: 9 }).map((_, r) =>
        Array.from({ length: 12 }).map((__, c) => (
          <rect key={`${r}-${c}`} x={c * 56 - (r % 2 ? 28 : 0)} y={r * 26} width="52" height="22" rx="3" fill="#5a2a1c" opacity="0.55" />
        )),
      )}
      {/* Forno */}
      <path d="M170 210 Q170 70 320 70 Q470 70 470 210Z" fill="#1a0b07" />
      <path d="M200 210 Q200 100 320 100 Q440 100 440 210Z" fill="url(#pz-fire)" className="sc-glow" />
      {Array.from({ length: 5 }).map((_, i) => (
        <path key={i} className="sc-flame" style={{ animationDelay: `${i * 0.2}s`, transformOrigin: `${250 + i * 35}px 210px` }} d={`M${250 + i * 35} 210 q-14 -26 2 -54 q6 22 14 26 q4 -16 -2 -30 q22 20 2 58z`} fill="#ffb02e" opacity="0.9" />
      ))}
      <rect x="150" y="206" width="340" height="16" rx="4" fill="#24120c" />
      {/* Bancada */}
      <rect y="250" width="640" height="110" fill="#6b3f22" />
      <rect y="250" width="640" height="8" fill="#80502d" />
      {/* Pizza */}
      <g transform="translate(320 300)">
        <ellipse cx="0" cy="22" rx="150" ry="22" fill="#000" opacity="0.35" />
        <g transform="scale(1 0.42)">
          <g className="sc-spin-slow">
            <circle r="128" fill="#d99a4a" />
            <circle r="112" fill="#c2402a" />
            <circle r="108" fill="url(#pz-cheese)" />
            {pepperoni.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="16" fill="#a3281c" stroke="#7d1c13" strokeWidth="3" />
            ))}
            {[
              [-20, -60],
              [60, -20],
              [-70, -10],
            ].map(([x, y], i) => (
              <ellipse key={i} cx={x} cy={y} rx="12" ry="6" fill="#2f8f3a" transform={`rotate(${i * 50} ${x} ${y})`} />
            ))}
          </g>
        </g>
      </g>
      {/* Fatia sendo puxada com queijo esticando */}
      <g className="sc-lift">
        <path d="M398 262 L470 248 L460 290Z" fill="url(#pz-cheese)" stroke="#d99a4a" strokeWidth="6" strokeLinejoin="round" />
        <circle cx="448" cy="264" r="7" fill="#a3281c" />
      </g>
      <g className="sc-stretch" style={{ transformOrigin: "420px 292px" }}>
        <path d="M410 292 q4 -16 2 -30" stroke="#ffe08a" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M426 292 q-3 -14 0 -32" stroke="#ffe08a" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>
      {[280, 320, 360].map((x, i) => (
        <path key={x} className="sc-steam" style={{ animationDelay: `${i * 0.6}s` }} d={`M${x} 280 q-10 -14 0 -28 q10 -14 0 -28`} stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0" />
      ))}
    </svg>
  );
}

const scenes: Record<ClientScene, () => React.JSX.Element> = {
  balneario: Balneario,
  acai: Acai,
  espetinho: Espetinho,
  sunset: Sunset,
  pizzaria: Pizzaria,
};

export function ClientSceneView({ scene }: { scene: ClientScene }) {
  const Scene = scenes[scene];
  return <Scene />;
}

/** Pequenos "adesivos" ilustrados ao lado de cada rótulo (como os recortes do site de referência). */
export function ClientSticker({ scene, className }: { scene: ClientScene; className?: string }) {
  const common = { viewBox: "0 0 64 64", className, "aria-hidden": true as const };
  switch (scene) {
    case "balneario":
      return (
        <svg {...common}>
          <circle cx="40" cy="22" r="11" fill="#ffcf5a" />
          <path d="M4 40 q8 -6 16 0 t16 0 t16 0 t16 0" stroke="#22d3ee" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M4 52 q8 -6 16 0 t16 0 t16 0 t16 0" stroke="#0ea5c6" strokeWidth="5" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "acai":
      return (
        <svg {...common}>
          <path d="M8 30 Q10 56 32 57 Q54 56 56 30Z" fill="#8b5a2b" />
          <path d="M8 30 Q12 12 32 11 Q52 12 56 30 Q32 36 8 30Z" fill="#4a1258" />
          <circle cx="24" cy="22" r="5" fill="#fbe7a1" />
          <circle cx="40" cy="20" r="5" fill="#e8213a" />
        </svg>
      );
    case "espetinho":
      return (
        <svg {...common}>
          <path d="M18 58 q-8 -14 2 -26 q2 10 8 12 q0 -12 -4 -18 q18 12 8 32z" fill="#ff8a1f" />
          <line x1="6" y1="40" x2="60" y2="14" stroke="#d9b98a" strokeWidth="3" strokeLinecap="round" />
          {[16, 28, 40].map((x, i) => (
            <rect key={x} x={x - 6} y={34 - i * 6 - 7} width="12" height="13" rx="3" fill={i % 2 ? "#f2e1b8" : "#8b3a1c"} />
          ))}
        </svg>
      );
    case "sunset":
      return (
        <svg {...common}>
          <circle cx="40" cy="30" r="14" fill="#ff8a3d" />
          <rect x="18" y="16" width="10" height="44" rx="5" fill="#1f6b3a" />
          <path d="M18 34 h-8 v-12" stroke="#1f6b3a" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M28 28 h8 v-10" stroke="#1f6b3a" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "pizzaria":
      return (
        <svg {...common}>
          <path d="M8 12 L58 20 L22 58Z" fill="#f5b942" stroke="#d99a4a" strokeWidth="5" strokeLinejoin="round" />
          <circle cx="28" cy="24" r="5" fill="#a3281c" />
          <circle cx="24" cy="40" r="4" fill="#a3281c" />
          <circle cx="40" cy="28" r="4" fill="#a3281c" />
        </svg>
      );
  }
}
