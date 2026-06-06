'use client';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      {/* Main Footer */}
      <div className="section-padding border-b border-dark-700">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold mb-4">
                Designer<span className="font-light">Studio</span>
              </h3>
              <p className="text-dark-400 text-sm">
                Criando experiências digitais que transformam marcas.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-dark-100">Menu</h4>
              <ul className="space-y-2">
                {['Sobre', 'Serviços', 'Portfolio', 'Contacto'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-dark-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-dark-100">Serviços</h4>
              <ul className="space-y-2">
                {['Web Design', 'App Design', 'Branding', 'Dev'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-dark-400 hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-dark-100">Contacto</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:hello@designerstudio.pt"
                    className="text-dark-400 hover:text-white transition-colors text-sm"
                  >
                    hello@designerstudio.pt
                  </a>
                </li>
                <li>
                  <a href="tel:+351" className="text-dark-400 hover:text-white transition-colors text-sm">
                    +351 XXX XXX XXX
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="section-padding !py-6">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-400 text-sm">
              © 2024 Designer Studio. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-dark-400 hover:text-white transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
