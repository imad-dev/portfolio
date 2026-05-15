import { motion } from "motion/react";
import { ChevronDown, Download, ArrowRight } from "lucide-react";

export function Hero() {
  const heroLines = ["AI-DRIVEN", "MARKETING &", "E-COMMERCE", "OPERATOR"];

  const scrollToWork = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6"
      aria-label="Hero"
    >
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00E5FF] rounded-full">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#00FF85]"
              aria-hidden="true"
            />
            <span
              className="text-[#00E5FF]"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.1em",
              }}
            >
              AVAILABLE FOR REMOTE ROLES
            </span>
          </div>
        </motion.div>

        {/* Main headline — single H1 with clip-path word reveal */}
        <div className="mb-8">
          <h1
            className="text-[#F0F4FF]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(48px, 10vw, 140px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {heroLines.map((line, lineIndex) => (
              <span key={lineIndex} className="block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{
                    delay: 0.3 + lineIndex * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-[#8892A4] max-w-2xl mx-auto mb-12"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            lineHeight: 1.6,
          }}
        >
          Building automated growth systems at the intersection of paid acquisition,
          Shopify infrastructure, and generative AI.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={scrollToWork}
            className="group relative px-8 py-4 bg-[#00E5FF] text-[#080B12] rounded overflow-hidden transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00E5FF]/30"
            style={{ fontFamily: "var(--font-mono)", fontSize: "14px", fontWeight: 600 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              VIEW MY WORK
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href="/cv.pdf"
            download
            className="px-8 py-4 border border-[#00E5FF] text-[#00E5FF] rounded hover:bg-[rgba(0,229,255,0.08)] transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)", fontSize: "14px", fontWeight: 600 }}
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              DOWNLOAD CV
            </span>
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-[#8892A4] flex flex-wrap items-center justify-center gap-2"
          style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}
        >
          <span>3+ Years Experience</span>
          <span className="text-[#00E5FF]" aria-hidden="true">·</span>
          <span>Meta Ads</span>
          <span className="text-[#00E5FF]" aria-hidden="true">·</span>
          <span>Shopify</span>
          <span className="text-[#00E5FF]" aria-hidden="true">·</span>
          <span>n8n</span>
          <span className="text-[#00E5FF]" aria-hidden="true">·</span>
          <span>Veo 3.1</span>
          <span className="text-[#00E5FF]" aria-hidden="true">·</span>
          <span>GCP</span>
          <span className="text-[#00E5FF]" aria-hidden="true">·</span>
          <span>Python</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer bg-transparent border-none"
          onClick={scrollToWork}
          aria-label="Scroll to projects section"
        >
          <span
            className="text-[#8892A4]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ willChange: "transform" }}
          >
            <ChevronDown className="w-5 h-5 text-[#00E5FF]" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
