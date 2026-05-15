import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Download, Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Stack", id: "stack" },
    { label: "Projects", id: "projects" },
    { label: "Results", id: "workflow" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl bg-[#080B12]/80" : "bg-transparent"
        }`}
        style={{
          borderBottom: scrolled ? "1px solid #00E5FF" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-10 h-10 border border-[#00E5FF] rounded"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="text-[#00E5FF]">IH</span>
            </div>
            <span
              className="text-[#F0F4FF] hidden sm:block"
              style={{ fontFamily: "var(--font-mono)", fontSize: "14px" }}
            >
              IMAD HADDA
            </span>
          </div>

          {/* Center - Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[#8892A4] hover:text-[#00E5FF] transition-colors"
                style={{ fontFamily: "var(--font-body)", fontSize: "14px" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right - CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="/cv.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 border border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#080B12] transition-all rounded"
              style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD CV</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#00E5FF] p-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-[#080B12] md:hidden pt-20"
        >
          <nav aria-label="Mobile navigation">
            <div className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[#F0F4FF] hover:text-[#00E5FF] text-2xl transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#080B12] transition-all rounded mt-4"
                style={{ fontFamily: "var(--font-mono)", fontSize: "14px" }}
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD CV</span>
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
}
