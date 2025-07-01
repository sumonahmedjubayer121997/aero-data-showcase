
import { ArrowRight, Code, Palette, Smartphone, Database, Lightbulb, Users } from "lucide-react";

const Capabilities = () => {
  const capabilities = [
    {
      icon: Code,
      label: "Web Development"
    },
    {
      icon: Palette,
      label: "UI/UX Design"
    },
    {
      icon: Smartphone,
      label: "App Development"
    },
    {
      icon: Database,
      label: "Data Solutions"
    },
    {
      icon: Lightbulb,
      label: "Innovative Ideas"
    },
    {
      icon: Users,
      label: "Consulting"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Empowering Your Business with{" "}
            <span className="bg-lime-400 text-black px-4 py-2 rounded-full inline-block mx-2">
              Data
            </span>{" "}
            and{" "}
            <span className="bg-lime-400 text-black px-4 py-2 rounded-full inline-block mx-2">
              Design
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            We help startups and enterprises create powerful brands, apps, and digital platforms that drive growth through innovative aviation data solutions and cutting-edge technology.
          </p>
          
          <button className="bg-lime-400 hover:bg-lime-500 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 mx-auto group hover:scale-105">
            Let's Build Together
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Capabilities Band */}
        <div className="border-t border-gray-700 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="group">
                <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-lime-400 transition-colors duration-300">
                    <capability.icon className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {capability.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Divider Line */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            {capabilities.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-lime-400 rounded-full opacity-50"></div>
                {index < capabilities.length - 1 && (
                  <div className="w-8 h-px bg-gray-700 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
