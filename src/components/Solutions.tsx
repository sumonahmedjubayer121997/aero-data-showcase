
const Solutions = () => {
  const solutions = [
    {
      title: "Predictive Maintenance",
      description: "AI-powered maintenance scheduling reduces aircraft downtime by up to 40%",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      title: "Route Optimization",
      description: "Dynamic routing algorithms that adapt to real-time conditions",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      featured: false
    },
    {
      title: "Fleet Analytics",
      description: "Comprehensive fleet performance monitoring and insights",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      featured: false
    },
    {
      title: "Passenger Experience",
      description: "Data-driven personalization for enhanced customer satisfaction",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      featured: false
    }
  ];

  return (
    <section className="px-8 py-16 max-w-7xl mx-auto bg-gray-50">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions & Services</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Comprehensive aviation data solutions designed to transform your operations and drive measurable results
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-auto">
        
        {/* Featured Solution - Large Block */}
        <div className="md:col-span-2 lg:col-span-3 lg:row-span-2 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
          <img 
            src={solutions[0].image}
            alt={solutions[0].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <div className="bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
              FEATURED SOLUTION
            </div>
            <h3 className="text-3xl font-bold mb-3">{solutions[0].title}</h3>
            <p className="text-gray-200 text-lg leading-relaxed max-w-md mb-6">
              {solutions[0].description}
            </p>
            <button className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 group">
              Learn More
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Service Cards */}
        {solutions.slice(1).map((solution, index) => (
          <div key={index} className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group hover:shadow-lg transition-shadow duration-300">
            <img 
              src={solution.image}
              alt={solution.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-bold text-lg mb-2">{solution.title}</h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          </div>
        ))}

        {/* CTA Block */}
        <div className="md:col-span-3 lg:col-span-5 bg-gradient-to-r from-lime-400 to-yellow-400 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Ready to Transform Your Operations?</h3>
          <p className="text-black/80 mb-6 max-w-2xl mx-auto">
            Join leading airlines who trust our data solutions to drive efficiency, reduce costs, and enhance passenger satisfaction.
          </p>
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-3 mx-auto group">
            Schedule a Demo
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
