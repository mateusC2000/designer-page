'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Bem-vindo ao Futuro
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Uma landing page ultra moderna, responsiva e otimizada para conversão. Pronta para impressionar.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            Começar Agora
          </button>
          <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
            Saber Mais
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-20">
          {[
            {
              icon: '⚡',
              title: 'Ultra Rápido',
              description: 'Otimizado para performance máxima e velocidade de carregamento',
            },
            {
              icon: '🎨',
              title: 'Design Moderno',
              description: 'Interface intuitiva e visualmente impressionante',
            },
            {
              icon: '📱',
              title: 'Responsivo',
              description: 'Funciona perfeitamente em todos os dispositivos',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:bg-white/10"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 flex justify-center items-center py-8 border-t border-white/10 mt-20">
        <p className="text-slate-400 text-sm">
          © 2024 Designer Page. Criado com ❤️ em Portugal.
        </p>
      </div>
    </main>
  );
}
