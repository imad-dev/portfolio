import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

function CounterCard({
  value,
  label,
  suffix = "",
  delay = 0,
}: {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 1200;
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out curve: 1 - (1 - t)^3
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easedProgress * value);

        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#0F1520] border border-[#1A2035] border-t-[#00E5FF] border-t-2 p-8 rounded-lg hover:border-[#00E5FF] hover:-translate-y-1 transition-all duration-200 hover:shadow-xl hover:shadow-[#00E5FF]/8"
    >
      <div
        className="text-[#00E5FF] mb-2"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "48px",
          fontWeight: 800,
          lineHeight: 1.1,
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        className="text-[#8892A4]"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          lineHeight: 1.4,
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="px-6"
      style={{ padding: "clamp(80px, 10vw, 160px) clamp(20px, 5vw, 80px)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div
            className="text-[#00E5FF] mb-4"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.15em",
            }}
          >
            // 001 ABOUT
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[60%_40%] gap-12">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2
              className="text-[#F0F4FF] mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Systems thinker. Performance operator. AI-first.
            </h2>

            <div
              className="text-[#8892A4] space-y-4"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                lineHeight: 1.7,
              }}
            >
              <p>
                I build end-to-end digital systems — from Alibaba sourcing pipelines to
                Meta Ads campaigns to AI-generated video creatives. Currently pursuing
                Industrial Energy Efficiency at Ibn Zohr University while running active
                e-commerce operations across MENA and Sub-Saharan African markets.
              </p>

              <p>
                My edge: I combine technical automation depth with commercial execution
                instinct. I don't just run campaigns — I build the infrastructure that
                makes them scale.
              </p>
            </div>
          </motion.div>

          {/* Right column - Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <CounterCard value={3} label="Years Experience" suffix="+" delay={0.3} />
            <CounterCard value={4} label="Active Projects" delay={0.4} />
            <CounterCard value={3} label="Languages AR/FR/EN" delay={0.5} />
            <CounterCard value={150} label="Shoppers Ecosystem" suffix="M+" delay={0.6} />
          </div>
        </div>
      </div>
    </section>
  );
}
