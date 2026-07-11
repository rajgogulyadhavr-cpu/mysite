import { motion } from "framer-motion";

interface Props {
  size?: number;
  waving?: boolean;
}

export function RobotMascot({ size = 180, waving = true }: Props) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      className="drop-shadow-[0_10px_30px_rgba(0,242,255,0.35)]"
    >
      <defs>
        <radialGradient id="bodyGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="80%" stopColor="#eaf6ff" />
          <stop offset="100%" stopColor="#cde7ff" />
        </radialGradient>
        <radialGradient id="eyeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7ff7ff" />
          <stop offset="100%" stopColor="#00b8d4" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Antenna */}
      <line x1="100" y1="30" x2="100" y2="48" stroke="#9bdcff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="26" r="6" fill="#00f2ff" filter="url(#glow)">
        <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Head */}
      <rect x="50" y="48" width="100" height="80" rx="28" fill="url(#bodyGrad)" stroke="#cdeeff" strokeWidth="2" />

      {/* Eyes */}
      <g className="animate-blink">
        <ellipse cx="80" cy="88" rx="10" ry="12" fill="url(#eyeGrad)" filter="url(#glow)" />
        <ellipse cx="120" cy="88" rx="10" ry="12" fill="url(#eyeGrad)" filter="url(#glow)" />
        <circle cx="83" cy="84" r="3" fill="#fff" />
        <circle cx="123" cy="84" r="3" fill="#fff" />
      </g>

      {/* Smile */}
      <path d="M 82 108 Q 100 122 118 108" stroke="#5cc8ff" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="65" cy="105" r="4" fill="#ffd1e8" opacity="0.7" />
      <circle cx="135" cy="105" r="4" fill="#ffd1e8" opacity="0.7" />

      {/* Body */}
      <rect x="62" y="130" width="76" height="50" rx="18" fill="url(#bodyGrad)" stroke="#cdeeff" strokeWidth="2" />
      <circle cx="100" cy="155" r="5" fill="#00f2ff" filter="url(#glow)" />

      {/* Arms */}
      <rect x="40" y="138" width="14" height="30" rx="7" fill="url(#bodyGrad)" stroke="#cdeeff" strokeWidth="2" />
      <g className={waving ? "animate-wave" : ""} style={{ transformOrigin: "150px 150px" }}>
        <rect x="146" y="120" width="14" height="36" rx="7" fill="url(#bodyGrad)" stroke="#cdeeff" strokeWidth="2" />
        <circle cx="153" cy="118" r="9" fill="url(#bodyGrad)" stroke="#cdeeff" strokeWidth="2" />
      </g>
    </motion.svg>
  );
}
