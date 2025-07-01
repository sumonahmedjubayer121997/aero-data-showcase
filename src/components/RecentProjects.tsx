
import { ArrowRight } from "lucide-react";

const RecentProjects = () => {
  return (
    <section className="px-8 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
        
        {/* Large Team Collaboration Block */}
        <div className="lg:col-span-2 lg:row-span-2 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80" 
            alt="Team collaboration in modern office space"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold mb-2">User-centric, Cross-functional Solution Development</h3>
            <p className="text-gray-200 text-sm leading-relaxed max-w-md">
              Our team takes a human-centric approach, developing insights and scaling data/ML solutions from idea to prototype and beyond.
            </p>
          </div>
        </div>

        {/* Philosophy Statement Block */}
        <div className="lg:col-span-2 bg-lime-400 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-4 left-4 flex space-x-2">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
              We believe airlines need to instrumentalize their data as a force for good that drives their competitive edge.
            </h2>
          </div>
          <div className="absolute bottom-4 right-4 text-black">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        {/* Aviation Technology Block */}
        <div className="lg:col-span-2 bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group">
          <img 
            src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80" 
            alt="Close-up of airplane wing showing aviation technology"
            className="w-full h-64 object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-bold mb-2">Combining Aviation and Data Expertise</h3>
            <p className="text-gray-200 text-sm">
              Our experienced experts at Lufthansa provide clear insights for airline management.
            </p>
          </div>
        </div>

        {/* Knowledge Sharing Block */}
        <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
            alt="Team brainstorming with sticky notes and technology"
            className="w-full h-64 object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-bold mb-2">Knowledge Sharing and Quality Standards</h3>
            <p className="text-gray-200 text-sm max-w-xs">
              Our experienced team swiftly delivers value through proven expertise and efficient practices.
            </p>
          </div>
        </div>

      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <button className="bg-lime-400 hover:bg-lime-500 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-3 mx-auto group">
          Get in Touch
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default RecentProjects;
