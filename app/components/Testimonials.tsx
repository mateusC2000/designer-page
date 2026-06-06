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
    <section id="avaliacao" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-dark-900 mb-4">Depoimentos</h2>
          <p className="text-muted max-w-xl mx-auto">
            O que os nossos clientes dizem sobre o nosso trabalho.
          </p>
        </div>

        {/* Testimonials - Minimalista Layout */}
        <div className="space-y-12 max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                animation: `fadeInUp 0.7s ease-out ${index * 0.2}s both`,
              }}
              className="group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="text-2xl">
                      ⭐
                    </span>
                  ))}
              </div>

              {/* Quote */}
              <p className="text-2xl font-light text-dark-900 mb-8 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author - Below with divider */}
              <div className="border-t border-dark-300 pt-6">
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
