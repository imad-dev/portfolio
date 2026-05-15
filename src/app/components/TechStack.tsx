import { useRef } from "react";
import { motion, useInView } from "motion/react";

function SkillTag({ skill, delay }: { skill: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.3 }}
      className="px-3 py-2 bg-[#0F1520] border border-[#1A2035] text-[#8892A4] rounded-lg hover:border-[#00E5FF] hover:text-[#00E5FF] hover:scale-105 transition-all duration-200 cursor-default"
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "13px",
      }}
    >
      {skill}
    </motion.div>
  );
}

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      title: "PAID ACQUISITION",
      skills: [
        "Meta Ads",
        "TikTok Ads",
        "Google Ads",
        "CBO/ABO",
        "UGC Creative",
        "ROAS Optimization",
      ],
    },
    {
      title: "AI & AUTOMATION",
      skills: [
        "Claude API",
        "Veo 3.1",
        "n8n",
        "Apify",
        "Python",
        "GCP/Vertex AI",
        "Prompt Engineering",
      ],
    },
    {
      title: "E-COMMERCE",
      skills: [
        "Shopify",
        "WooCommerce",
        "WordPress",
        "COD Funnels",
        "Catalogue Management",
        "CRO",
      ],
    },
    {
      title: "DEVELOPMENT",
      skills: [
        "Next.js 14",
        "React",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "HTML/CSS",
      ],
    },
    {
      title: "ANALYTICS",
      skills: [
        "GA4",
        "Custom Dashboards",
        "scikit-learn",
        "Pandas",
        "Excel Advanced",
        "A/B Testing",
      ],
    },
  ];

  return (
    <section
      id="stack"
      className="bg-[#0F1520]"
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
            // 002 TECH STACK
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
            Tools I Deploy Daily
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.6 }}
            >
              <h3
                className="text-[#F0F4FF] mb-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                }}
              >
                {category.title}
              </h3>
              <div className="flex flex-col gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag
                    key={skill}
                    skill={skill}
                    delay={0.3 + categoryIndex * 0.1 + skillIndex * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
