'use client';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-dark-200">
      <div className="container-max section-padding !py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-dark-900">
            Designer<span className="font-light">Studio</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8">
            {['Etapas', 'Serviços', 'Portfolio', 'Sobre', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-dark-600 hover:text-dark-900 transition-colors duration-200 font-medium text-sm"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="button-primary text-sm">
            Contactar
          </button>
        </div>
      </div>
    </header>
  );
}
