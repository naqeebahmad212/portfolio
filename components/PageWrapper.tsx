"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const path = usePathname();
  return (
    <AnimatePresence>
      <div className="relative">
        <motion.div
          key={path}
          className="fixed top-0 left-0 h-screen w-screen bg-blue-400 flex justify-center items-center text-2xl font-bold text-themeText pointer-events-none"
          // key={path}
          initial={{ x: "-100vw" }}
          animate={{
            x: ["-100vw", "0vw", "-100vw"],
            // transitionEnd: { display: "none" },
          }}
          exit={{ x: "-100vw" }}
          transition={{ duration: 0.9, delay: 0 }}
        >
          <p>{path.slice(1) == "" ? "HOME" : path.slice(1).toUpperCase()}</p>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key="modal"
            initial={{ opacity: 0, x: "0vw" }}
            animate={{ opacity: 1, x: ["100vw", "0"] }}
            exit={{ opacity: 0, x: ["0", "100vw"] }}
            transition={{
              delay: 0.7,
              duration: 0.5,
              type: "spring",
            }}
            className={`${className}`}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};
