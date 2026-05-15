import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  status?: {
    label: string;
    color: string;
  };
  metrics?: string;
  metricBadge?: string;
  link?: string;
  featured?: boolean;
  delay: number;
};

function StatusBadge({ label, color }: { label: string; color: string }) {
  const bgOpacity = "1a"; // ~10% opacity
  const borderOpacity = "4d"; // ~30% opacity

  return (
    <span
      className="px-2 py-1 rounded flex items-center gap-1"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        backgroundColor: `${color}${bgOpacity}`,
        color: color,
        border: `1px solid ${color}${borderOpacity}`,
      }}
    >
      {label === "ACTIVE" && "●"}
      {label === "IN PROGRESS" && "◐"}
      {label === "COMPLETE" && "✓"}
      <span>{label}</span>
    </span>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  status,
  metrics,
  metricBadge,
  link,
  featured,
  delay,
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-[#0F1520] border border-[#1A2035] rounded-lg p-8 hover:border-[#00E5FF] hover:-translate-y-1 transition-all duration-200 hover:shadow-[0_20px_40px_rgba(0,229,255,0.08)] ${
        featured ? "lg:col-span-2" : ""
      }`}
      style={{
        borderLeft: featured ? "2px solid #00E5FF" : undefined,
      }}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-[#080B12] border border-[#1A2035] text-[#8892A4] rounded"
            style={{ fontFamily: "var(--font-mono)", fontSize: "10px" }}
          >
            {tag}
          </span>
        ))}
        {status && <StatusBadge label={status.label} color={status.color} />}
      </div>

      {/* Title */}
      <h3
        className="text-[#F0F4FF] mb-3"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: featured ? "24px" : "20px",
          fontWeight: 800,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-[#8892A4] mb-4"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>

      {/* Metrics or Badge */}
      {metrics && (
        <div
          className="text-[#8892A4] mb-4"
          style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}
        >
          {metrics}
        </div>
      )}

      {metricBadge && (
        <div className="mb-4">
          <span
            className="px-3 py-1 bg-[#00E5FF]/10 border border-[#00E5FF] text-[#00E5FF] rounded"
            style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}
          >
            {metricBadge}
          </span>
        </div>
      )}

      {/* Link */}
      {link && (
        <a
          href={link}
          className="inline-flex items-center gap-2 text-[#00E5FF] hover:gap-3 transition-all"
          style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}
        >
          <span>{link.includes("Case") ? "VIEW CASE STUDY" : "VIEW PIPELINE"}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "COD Africa — Kenya E-Commerce Pipeline",
      description:
        "End-to-end cash-on-delivery operation targeting Kenyan market. Alibaba sourcing → Apify scraping → Supabase product scoring → Meta Ads campaigns. Category: supplements and wellness.",
      tags: ["E-Commerce", "Meta Ads", "Supabase", "Python"],
      status: { label: "ACTIVE", color: "#00FF85" },
      metrics: "2 Ad Accounts · Supabase DB · n8n Automated · Meta CBO Structure",
      link: "#case-study",
      featured: true,
    },
    {
      title: "AI Video Ad Creative Pipeline",
      description:
        "Automated UGC-style video generation via GCP/Vertex AI Veo 3.1. Integrated with Meta Ads creative workflow for skincare and wellness products.",
      tags: ["AI", "GCP", "Vertex AI", "Video"],
      status: { label: "ACTIVE", color: "#00FF85" },
      link: "#pipeline",
    },
    {
      title: "BirdCLEF+ 2026 — Kaggle Competition",
      description:
        "234-class bioacoustic multi-label classification. 0.690 macro ROC-AUC baseline using BirdNET V2.4 embeddings + logistic regression. CPU-only pipeline.",
      tags: ["ML", "Python", "Bioacoustics", "Kaggle"],
      metricBadge: "0.690 ROC-AUC",
    },
    {
      title: "World Cup 2026 Arabic Web Hub",
      description:
        "Arabic-language content hub targeting North African audience. Next.js 14 + Tailwind + Supabase + Vercel. AdSense + MENA affiliate monetization.",
      tags: ["Next.js", "Supabase", "Vercel"],
      status: { label: "IN PROGRESS", color: "#FFA500" },
    },
    {
      title: "Notion Life & Business OS",
      description:
        "Full workspace deployed via MCP: Command Center, Business Ops, Marketing Assets, Academia. 20+ interconnected databases.",
      tags: ["Automation", "Notion", "MCP"],
      status: { label: "COMPLETE", color: "#8892A4" },
    },
    {
      title: "House Prices — Kaggle",
      description:
        "0.12151 RMSLE on Ames Housing dataset. Weighted ensemble: XGBoost + LightGBM + Ridge + Lasso. 22 engineered features + Box-Cox correction.",
      tags: ["ML", "XGBoost", "LightGBM"],
      status: { label: "COMPLETE", color: "#8892A4" },
      metricBadge: "0.12151 RMSLE",
    },
  ];

  return (
    <section
      id="projects"
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
            // 003 PROJECTS
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
            What I've Built
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={0.2 + index * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
