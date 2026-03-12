import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const GlowCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useSpring(0, { stiffness: 40, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 40, damping: 25 });

  const cursorX = useSpring(0, { stiffness: 120, damping: 25 });
  const cursorY = useSpring(0, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);

      cursorX.set(e.clientX - (isHovering ? 20 : 6));
      cursorY.set(e.clientY - (isHovering ? 20 : 6));
    };

    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    const hoverElements = document.querySelectorAll("a, button");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [isHovering]);

  return (
    <>
      {/* Glow aura */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="fixed top-0 left-0 w-[300px] h-[300px] bg-emerald-400/20 rounded-full blur-[120px] pointer-events-none z-[-1]"
      />

      {/* Circle cursor */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{
          width: isHovering ? 40 : 25,
          height: isHovering ? 40 : 25,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 border-2 border-emerald-400 rounded-full pointer-events-none z-[9999] opacity-80"
      />
    </>
  );
};

export default GlowCursor;