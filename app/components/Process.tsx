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
    <section id="etapas" className="section-padding bg-dark-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-dark-900 mb-4">Nosso Processo</h2>
          <p className="text-muted max-w-xl mx-auto">
            Seguimos uma metodologia comprovada que garante excelência em cada projeto.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-dark-200 hover:border-dark-400 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-4xl font-bold text-dark-300 mb-4 group-hover:text-dark-900 transition-colors">
                {step.number}
              </div>
              <h3 className="heading-md text-dark-900 mb-3">{step.title}</h3>
              <p className="text-dark-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
