import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Search, Terminal, Video, Rocket, TrendingUp } from "lucide-react";

type WorkflowStepProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isLast?: boolean;
};

function WorkflowStep({ icon, title, description, delay, isLast }: WorkflowStepProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex flex-col items-center relative">
      {/* Icon Circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay, duration: 0.5 }}
        className="w-16 h-16 rounded-full bg-[#0F1520] border-2 border-[#00E5FF] flex items-center justify-center mb-4 relative z-10"
        style={{ willChange: "transform" }}
      >
        <div className="text-[#00E5FF]" aria-hidden="true">{icon}</div>
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
        className="text-[#F0F4FF] mb-2"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "18px",
          fontWeight: 800,
        }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
        className="text-[#8892A4] text-center max-w-[200px]"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "13px",
          lineHeight: 1.5,
        }}
      >
        {description}
      </motion.p>

      {/* Connecting Line (hidden on mobile, shown on desktop, not on last item) */}
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: delay + 0.5, duration: 0.8 }}
          className="hidden lg:block absolute top-8 left-[50%] w-full h-0.5 bg-[#00E5FF] origin-left"
          style={{ willChange: "transform" }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export function Workflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "RESEARCH",
      description:
        "Apify scrapes competitor ads + products. Supabase scores by engagement signals.",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "SCRIPT",
      description:
        "Claude generates UGC hooks using structured framework: trouble → myth-bust → reveal.",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "PRODUCE",
      description:
        "Veo 3.1 generates video creatives. CapCut finalizes. Zero studio required.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "LAUNCH",
      description:
        "Meta Ads CBO structure. Cold audiences. A/B creative testing from day one.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "OPTIMIZE",
      description:
        "GA4 + Supabase dashboards. Loop back to step 1 with performance data.",
    },
  ];

  return (
    <section
      id="workflow"
      className="bg-[#0F1520]"
      style={{ padding: "clamp(80px, 10vw, 160px) clamp(20px, 5vw, 80px)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div
            className="text-[#00E5FF] mb-4"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.15em",
            }}
          >
            // 004 HOW I WORK
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
            From Signal to Scale
          </h2>
        </motion.div>

        {/* Desktop: Horizontal Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <WorkflowStep
              key={step.title}
              {...step}
              delay={0.2 + index * 0.15}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Mobile/Tablet: Vertical Layout */}
        <div className="lg:hidden flex flex-col gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center">
              <WorkflowStep {...step} delay={0.2 + index * 0.15} isLast={true} />
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                  className="w-0.5 h-16 bg-[#00E5FF] mt-8 origin-top"
                  style={{ willChange: "transform" }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
