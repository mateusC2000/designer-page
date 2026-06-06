'use client';

import { Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-dark-100 to-dark-300 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4">
                  <Rocket size={80} className="text-dark-900" />
                </div>
                <p className="text-dark-600 font-medium">Equipa Criativa</p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="animate-fade-in-up">
            <h2 className="heading-lg text-dark-900 mb-6">
              Sobre o Designer<span className="block text-dark-500">Studio</span>
            </h2>
            <p className="text-muted mb-6">
              Somos um estúdio de design e desenvolvimento web focado em criar experiências digitais que transformam marcas. Com mais de uma década de experiência, ajudamos empresas a alcançar seus objetivos através de design estratégico e desenvolvimento inovador.
            </p>
            <p className="text-dark-600 mb-8">
              Nossa equipa multidisciplinar é apaixonada por criar soluções que combinam criatividade, funcionalidade e tecnologia de ponta.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '150+', label: 'Projetos' },
                { number: '50+', label: 'Clientes' },
                { number: '10+', label: 'Anos' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="heading-md text-dark-900">{stat.number}</div>
                  <p className="text-dark-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
