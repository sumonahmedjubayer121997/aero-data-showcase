
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Solutions from "@/components/Solutions";
import Knowledge from "@/components/Knowledge";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-border relative z-50">
        <div className="text-2xl font-bold">zero°</div>
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects <span className="bg-lime-400 text-black px-2 py-0.5 rounded text-xs ml-1">NEW</span>
          </a>
          <a href="#knowledge" className="text-muted-foreground hover:text-foreground transition-colors">Expertise</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>
        <button className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 group">
          Get in touch
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Recent Projects Section */}
      <section id="projects">
        <RecentProjects />
      </section>

      {/* Solutions Section */}
      <section id="solutions">
        <Solutions />
      </section>

      {/* Knowledge & Expertise Section */}
      <section id="knowledge">
        <Knowledge />
      </section>

      {/* Footer */}
      <Footer />

      {/* Consent Banner */}
      <ConsentBanner />
    </div>
  );
};

export default Index;
