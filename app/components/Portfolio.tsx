'use client';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Moderno',
      category: 'E-commerce',
      image: 'bg-gradient-to-br from-dark-300 to-dark-400',
      description: 'Plataforma de venda online com design inovador.',
    },
    {
      title: 'App de Produtividade',
      category: 'Mobile App',
      image: 'bg-gradient-to-br from-dark-200 to-dark-300',
      description: 'Aplicação mobile intuitiva e moderna.',
    },
    {
      title: 'Brand Studio',
      category: 'Branding',
      image: 'bg-gradient-to-br from-dark-400 to-dark-500',
      description: 'Identidade visual completa para estúdio criativo.',
    },
    {
      title: 'Portfólio Designer',
      category: 'Web Design',
      image: 'bg-gradient-to-br from-dark-100 to-dark-200',
      description: 'Website portfolio elegante e responsivo.',
    },
    {
      title: 'SaaS Platform',
      category: 'Web App',
      image: 'bg-gradient-to-br from-dark-300 to-dark-200',
      description: 'Plataforma SaaS funcional e escalável.',
    },
    {
      title: 'Travel Blog',
      category: 'Web Design',
      image: 'bg-gradient-to-br from-dark-200 to-dark-400',
      description: 'Blog de viagens com design inspirador.',
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-dark-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-dark-900 mb-4">Portfolio</h2>
          <p className="text-muted max-w-xl mx-auto">
            Confira alguns dos projetos que já desenvolvemos com sucesso.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-xl"
            >
              {/* Project Image */}
              <div className={`${project.image} h-64 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <button className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 button-base bg-white/20 backdrop-blur-md">
                    Ver Projeto
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-white p-6 border-t border-dark-200">
                <span className="text-xs font-semibold text-dark-500 uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="heading-md text-dark-900 mt-2 mb-2">{project.title}</h3>
                <p className="text-dark-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="button-primary">
            Ver Mais Projetos
          </button>
        </div>
      </div>
    </section>
  );
}
