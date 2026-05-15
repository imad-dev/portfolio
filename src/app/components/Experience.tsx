import { useRef } from "react";
import { motion, useInView } from "motion/react";

type ExperienceItemProps = {
  period: string;
  title: string;
  organization: string;
  description: string;
  delay: number;
};

function ExperienceItem({
  period,
  title,
  organization,
  description,
  delay,
}: ExperienceItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="relative pl-8 pb-12"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#00E5FF] border-2 border-[#080B12]"
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="text-[#00E5FF] mb-2"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          letterSpacing: "0.1em",
        }}
      >
        {period}
      </div>

      <h3
        className="text-[#F0F4FF] mb-1"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "20px",
          fontWeight: 800,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>

      <div
        className="text-[#8892A4] mb-2"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          fontStyle: "italic",
        }}
      >
        {organization}
      </div>

      <p
        className="text-[#8892A4]"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const lineRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const lineInView = useInView(lineRef, { once: true, margin: "-50px" });

  const experiences = [
    {
      period: "2024–PRESENT",
      title: "EEIA Student",
      organization: "Ibn Zohr University, Taroudant",
      description:
        "Industrial & Agricultural Energy Efficiency — Licence Year 1, Semester 2",
    },
    {
      period: "2024–PRESENT",
      title: "Kaggle ML Competitor",
      organization: "Independent",
      description:
        "BirdCLEF+ 2026 (0.690 ROC-AUC) · House Prices (0.12151 RMSLE) · BDAI Real Estate",
    },
    {
      period: "2022–PRESENT",
      title: "Freelance Digital Operator",
      organization: "Remote",
      description:
        "Meta Ads · Shopify · WordPress · n8n Automation · AI Creative Pipelines · MENA + Kenya markets",
    },
  ];

  return (
    <section
      id="experience"
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
            // 005 EXPERIENCE
          </div>
          <h2
            className="text-[#F0F4FF]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Professional Journey
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          <div className="relative">
            {/* Vertical timeline line */}
            <motion.div
              ref={lineRef}
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[5px] top-2 bottom-12 w-0.5 bg-[#00E5FF] origin-top"
              style={{ willChange: "transform" }}
              aria-hidden="true"
            />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={exp.title}
                {...exp}
                delay={0.3 + index * 0.15}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
