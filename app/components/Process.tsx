'use client';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Descoberta',
      description: 'Entendemos suas necessidades, objetivos e visão para o projeto.',
    },
    {
      number: '02',
      title: 'Estratégia',
      description: 'Desenvolvemos uma estratégia sólida baseada em pesquisa e análise.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Criamos designs modernos e inovadores que refletem sua marca.',
    },
    {
      number: '04',
      title: 'Desenvolvimento',
      description: 'Transformamos designs em código limpo e funcional.',
    },
    {
      number: '05',
      title: 'Testes',
      description: 'Garantimos qualidade através de testes rigorosos e ajustes.',
    },
    {
      number: '06',
      title: 'Entrega',
      description: 'Disponibilizamos seu projeto e oferecemos suporte contínuo.',
    },
  ];

  return (
    <section id="etapas" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-dark-900 mb-4">Nosso Processo</h2>
          <p className="text-muted max-w-xl mx-auto">
            Seguimos uma metodologia comprovada que garante excelência em cada projeto.
          </p>
        </div>

        {/* Timeline Layout - Staggered alternating */}
        <div className="space-y-16 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex gap-12 items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              style={{
                animation: `fadeInUp 0.7s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-dark-200 to-dark-300 flex items-center justify-center">
                  <span className="text-4xl font-bold text-dark-900">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-dark-900 mb-3">{step.title}</h3>
                <p className="text-dark-600 text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
