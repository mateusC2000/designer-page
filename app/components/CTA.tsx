'use client';

export default function CTA() {
  return (
    <section id="contacto" className="section-padding bg-dark-900 text-white">
      <div className="container-max text-center">
        <h2 className="heading-lg text-white mb-4">
          Pronto para começar?
        </h2>
        <p className="text-dark-200 max-w-xl mx-auto mb-8 text-lg">
          Vamos colaborar para transformar sua visão em realidade. Entre em contacto hoje mesmo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="button-base bg-white text-dark-900 hover:bg-dark-100 font-semibold">
            Começar Agora
          </button>
          <button className="button-base border-2 border-white text-white hover:bg-white/10">
            Agendar Chamada
          </button>
        </div>
      </div>
    </section>
  );
}
