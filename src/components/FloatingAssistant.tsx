import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RobotMascot } from "./RobotMascot";
import { X } from "lucide-react";

export function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 14, delay: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="absolute bottom-24 right-0 w-72 glass rounded-2xl p-4 neon-glow-soft"
          >
            <button onClick={() => setOpen(false)} className="absolute top-2 right-2 text-muted-foreground hover:text-foreground">
              <X size={16} />
            </button>
            <p className="text-sm font-medium mb-1">Vanakkam! 👋</p>
            <p className="text-xs text-muted-foreground">
              I'm Raja-bot. Scroll to explore projects, designs and achievements.
              Use the buttons in the hero to grab the resume or connect on LinkedIn.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(o => !o)}
        className="relative animate-float-slow"
        aria-label="Open assistant"
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-[#00f2ff]/30 blur-xl animate-pulse-glow" />
        <div className="glass rounded-full p-2">
          <RobotMascot size={72} waving={false} />
        </div>
      </button>
    </motion.div>
  );
}
