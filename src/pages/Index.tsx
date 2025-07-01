
import RecentProjects from "@/components/RecentProjects";
import ConsentBanner from "@/components/ConsentBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-border">
        <div className="text-2xl font-bold">zero°</div>
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Products <span className="bg-lime-400 text-black px-2 py-0.5 rounded text-xs ml-1">NEW</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Career</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">News</a>
        </nav>
        <button className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
          Get in touch
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </header>

      {/* Recent Projects Section */}
      <RecentProjects />

      {/* Consent Banner */}
      <ConsentBanner />
    </div>
  );
};

export default Index;
