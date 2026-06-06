'use client';

import { HeroIllustration } from '@/lib/illustrations';

export default function Hero() {
  return (
    <section id="hero" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-in-up">
            <h1 className="heading-xl text-dark-900 mb-6">
              Experiências Digitais 
              <span className="block text-dark-500">Que Transformam</span>
            </h1>
            <p className="text-muted mb-8 max-w-md">
              Criamos design moderno, websites inovadores e soluções digitais que elevam sua marca a novos patamares. Combinamos criatividade com tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="button-primary">
                Iniciar Projeto
              </button>
              <button className="button-secondary">
                Ver Portfolio
              </button>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="animate-fade-in">
            <div className="rounded-2xl aspect-square overflow-hidden shadow-lg">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
