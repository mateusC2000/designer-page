'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sofia Martins',
      role: 'CEO, TechStart',
      text: 'O trabalho da Designer Studio transformou completamente a nossa presença online. Recomendamos vivamente!',
      rating: 5,
    },
    {
      name: 'João Silva',
      role: 'Founder, E-commerce Plus',
      text: 'Profissionais talentosos, prazos cumpridos e resultados excecionais. Uma verdadeira parceria.',
      rating: 5,
    },
    {
      name: 'Maria Costa',
      role: 'Marketing Manager, Global Brand',
      text: 'Criatividade, inovação e atenção ao detalhe. Exactamente o que procurávamos na nossa equipa.',
      rating: 5,
    },
  ];

  return (
    <section id="avaliacao" className="section-padding bg-dark-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-dark-900 mb-4">Depoimentos</h2>
          <p className="text-muted max-w-xl mx-auto">
            O que os nossos clientes dizem sobre o nosso trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-dark-200 hover:border-dark-400 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="text-lg">
                      ⭐
                    </span>
                  ))}
              </div>

              {/* Text */}
              <p className="text-dark-600 mb-6 italic">&quot;{testimonial.text}&quot;</p>

              {/* Author */}
              <div className="border-t border-dark-200 pt-6">
                <p className="font-semibold text-dark-900">{testimonial.name}</p>
                <p className="text-sm text-dark-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
