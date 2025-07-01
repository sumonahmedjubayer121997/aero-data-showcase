
const Knowledge = () => {
  const expertiseAreas = [
    {
      title: "Data Science & ML",
      description: "Advanced machine learning models for aviation analytics",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
      metrics: "500+ Models"
    },
    {
      title: "Workshop Excellence",
      description: "Collaborative problem-solving with industry experts",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      metrics: "200+ Sessions"
    },
    {
      title: "Quality Standards",
      description: "ISO-certified processes ensuring highest data quality",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
      metrics: "99.9% Accuracy"
    },
    {
      title: "Innovation Labs",
      description: "Cutting-edge research in aviation technology",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      metrics: "50+ Patents"
    },
    {
      title: "Client Success",
      description: "Proven track record with global airline partners",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      metrics: "150+ Airlines"
    },
    {
      title: "Real-time Analytics",
      description: "Live dashboard monitoring and instant insights",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      metrics: "24/7 Monitoring"
    }
  ];

  return (
    <section className="px-8 py-16 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Knowledge & Expertise</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Our team combines deep aviation domain knowledge with cutting-edge data science expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {expertiseAreas.map((area, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group hover:shadow-lg transition-all duration-300">
            <div className="relative">
              <img 
                src={area.image}
                alt={area.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                {area.metrics}
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg mb-2">{area.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy Statement */}
      <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-lime-400 opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-lime-400 opacity-10 rounded-full translate-x-12 translate-y-12"></div>
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            "Data without context is noise. 
            <span className="text-lime-400"> Context without expertise is guesswork.</span>
            Together, they become intelligence."
          </h3>
          <p className="text-gray-300 text-lg">
            — Our approach to aviation data analytics
          </p>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
