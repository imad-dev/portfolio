import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Obfuscated email to prevent scraping
  const handleEmailClick = () => {
    const user = "imad";
    const domain = "hadda.dev";
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 bg-[#0F1520]"
        aria-label="Contact section"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              className="text-[#00E5FF] mb-6"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.15em",
              }}
            >
              // 006 CONTACT
            </div>

            <h2
              className="text-[#F0F4FF] mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 8vw, 80px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              LET'S BUILD SOMETHING THAT SCALES.
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[#8892A4] mb-8"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "18px",
                lineHeight: 1.6,
              }}
            >
              Open to remote roles worldwide. Available for immediate start.
            </motion.p>

            {/* Location tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#080B12] border border-[#1A2035] rounded-full mb-12"
            >
              <MapPin className="w-4 h-4 text-[#00E5FF]" aria-hidden="true" />
              <span
                className="text-[#8892A4]"
                style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}
              >
                Taroudant, Morocco → Relocating to Madrid, Spain
              </span>
            </motion.div>

            {/* Contact buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={handleEmailClick}
                className="group w-full sm:w-auto px-8 py-4 border border-[#00E5FF] text-[#00E5FF] rounded hover:bg-[#00E5FF] hover:text-[#080B12] transition-all duration-200 flex items-center justify-center gap-3"
                style={{ fontFamily: "var(--font-mono)", fontSize: "14px" }}
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
                <span>EMAIL</span>
              </button>

              <a
                href="https://linkedin.com/in/imad-hadda"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="group w-full sm:w-auto px-8 py-4 border border-[#00E5FF] text-[#00E5FF] rounded hover:bg-[#00E5FF] hover:text-[#080B12] transition-all duration-200 flex items-center justify-center gap-3"
                style={{ fontFamily: "var(--font-mono)", fontSize: "14px" }}
              >
                <Linkedin className="w-5 h-5" />
                <span>LINKEDIN</span>
              </a>

              <a
                href="https://github.com/imad-hadda"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="group w-full sm:w-auto px-8 py-4 border border-[#00E5FF] text-[#00E5FF] rounded hover:bg-[#00E5FF] hover:text-[#080B12] transition-all duration-200 flex items-center justify-center gap-3"
                style={{ fontFamily: "var(--font-mono)", fontSize: "14px" }}
              >
                <Github className="w-5 h-5" />
                <span>GITHUB</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080B12] border-t border-[#1A2035] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div
            className="text-[#8892A4]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}
          >
            IMAD HADDA © 2026
          </div>

          <div
            className="text-[#8892A4] text-center"
            style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}
          >
            Built with React · Deployed on Vercel
          </div>

          <div
            className="text-[#8892A4]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}
          >
            Available for remote contracts worldwide
          </div>
        </div>
      </footer>
    </>
  );
}
