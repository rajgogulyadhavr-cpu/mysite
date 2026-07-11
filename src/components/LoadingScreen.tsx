import { motion } from "framer-motion";
import { RobotMascot } from "./RobotMascot";

export function LoadingScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] grid-bg flex items-center justify-center"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 radial-fade pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#00f2ff]/10 blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#5d8bff]/10 blur-3xl animate-float-slow" style={{ animationDelay: "1.5s" }} />

      <div className="relative flex flex-col items-center gap-8 text-center px-6">
        <div className="relative animate-float-slow">
          <div className="absolute inset-0 -z-10 rounded-full bg-[#00f2ff]/20 blur-2xl scale-110 animate-pulse-glow" />
          <RobotMascot size={220} />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Hi, Welcome to <span className="neon-text">Rajalingam's Portfolio</span>!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground max-w-md"
        >
          Tap the robot to enter the experience. Built with AI, design and a lot of curiosity.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="glass neon-glow-soft px-8 py-3 rounded-full font-medium text-foreground hover:neon-glow transition-all"
        >
          Enter Portfolio →
        </motion.button>
      </div>
    </motion.div>
  );
}
