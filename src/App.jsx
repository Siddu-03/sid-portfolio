import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/ThemeProvider";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Projects } from "@/pages/Projects";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { Photography } from "@/pages/Photography";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";
import { siteConfig } from "@/data/siteConfig";

function App() {
  useSmoothScroll();

  return (
    <ThemeProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[var(--color-ink)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--color-bg)]"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          {siteConfig.enablePhotography && (
            <Route path="/photography" element={<Photography />} />
          )}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
