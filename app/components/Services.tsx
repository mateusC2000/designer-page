'use client';

import { Palette, Code, Smartphone, ShoppingCart, Wrench, BarChart3 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Identidade visual completa e coerente para sua marca.',
    },
    {
      icon: Code,
      title: 'Web Design',
      description: 'Websites modernos, responsivos e otimizados para conversão.',
    },
    {
      icon: Smartphone,
      title: 'App Design',
      description: 'Interfaces intuitivas para aplicações mobile e web.',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Plataformas de venda online funcionales e atrativas.',
    },
    {
      icon: Wrench,
      title: 'Dev Frontend',
      description: 'Desenvolvimento web com tecnologias modernas.',
    },
    {
      icon: BarChart3,
      title: 'UX/UI',
      description: 'Experiências digitais pensadas no utilizador.',
    },
  ];

  return (
    <section id="serviços" className="section-padding bg-dark-50">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-dark-900 mb-4">Nossos Serviços</h2>
          <p className="text-muted max-w-xl mx-auto">
            Oferecemos soluções completas de design e desenvolvimento web.
          </p>
        </div>

        {/* Services Grid - Minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
                className="group"
              >
                <div className="mb-6">
                  <IconComponent size={56} className="text-dark-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-dark-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">{service.description}</p>
                <div className="h-1 w-0 bg-dark-900 mt-4 group-hover:w-12 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
