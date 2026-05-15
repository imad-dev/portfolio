import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device supports hover (i.e., has a pointing device like a mouse)
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia("(hover: hover)").matches && window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop, { passive: true });

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isDesktop) {
      window.addEventListener("mousemove", updateMousePosition, { passive: true });
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", checkDesktop);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Small cyan dot - follows cursor immediately */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-3 h-3 rounded-full bg-[#00E5FF] pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
          mass: 0.2,
        }}
        style={{ willChange: "transform" }}
        aria-hidden="true"
      />

      {/* Larger ring - follows with lag */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full border border-[#00E5FF]/40 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          mass: 0.5,
        }}
        style={{ willChange: "transform" }}
        aria-hidden="true"
      />
    </>
  );
}
