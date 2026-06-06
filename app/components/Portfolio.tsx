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
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-dark-900 mb-4">Portfolio</h2>
          <p className="text-muted max-w-xl mx-auto">
            Confira alguns dos projetos que já desenvolvemos com sucesso.
          </p>
        </div>

        {/* Portfolio Grid - Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                animation: `fadeInUp 0.7s ease-out ${index * 0.12}s both`,
              }}
              className="group cursor-pointer"
            >
              {/* Project Image */}
              <div className={`${project.image} h-72 rounded-lg flex items-center justify-center relative overflow-hidden mb-6 transition-transform duration-300 group-hover:scale-105`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <button className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-2 bg-white/20 backdrop-blur-md rounded-lg">
                    Ver Projeto
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <span className="text-xs font-bold text-dark-500 uppercase tracking-widest">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-dark-900 mt-2 mb-2 group-hover:text-dark-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-dark-600 text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="button-primary">
            Ver Mais Projetos
          </button>
        </div>
      </div>
    </section>
  );
}
