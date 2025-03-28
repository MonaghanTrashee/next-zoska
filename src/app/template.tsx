"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier curve for smooth feel
        staggerChildren: 0.1
      }}
    >
      {children}
    </motion.div>
  );
}