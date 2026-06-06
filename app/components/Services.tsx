'use client';

export default function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'Brand Design',
      description: 'Identidade visual completa e coerente para sua marca.',
    },
    {
      icon: '💻',
      title: 'Web Design',
      description: 'Websites modernos, responsivos e otimizados para conversão.',
    },
    {
      icon: '📱',
      title: 'App Design',
      description: 'Interfaces intuitivas para aplicações mobile e web.',
    },
    {
      icon: '🛍️',
      title: 'E-commerce',
      description: 'Plataformas de venda online funcionales e atrativas.',
    },
    {
      icon: '🔧',
      title: 'Dev Frontend',
      description: 'Desenvolvimento web com tecnologias modernas.',
    },
    {
      icon: '📊',
      title: 'UX/UI',
      description: 'Experiências digitais pensadas no utilizador.',
    },
  ];

  return (
    <section id="serviços" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-dark-900 mb-4">Nossos Serviços</h2>
          <p className="text-muted max-w-xl mx-auto">
            Oferecemos soluções completas de design e desenvolvimento web.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-dark-50 rounded-xl border border-dark-200 hover:border-dark-400 hover:bg-white transition-all duration-300 group"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="heading-md text-dark-900 mb-3">{service.title}</h3>
              <p className="text-dark-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
