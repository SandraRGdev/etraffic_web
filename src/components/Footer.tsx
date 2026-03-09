export default function Footer() {
  return (
    <footer className="bg-[#0B1020] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#inicio" className="text-2xl font-bold font-display tracking-tight text-white flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F8CFF] to-[#6D5CFF] flex items-center justify-center text-sm">
                eT
              </span>
              eTraffic Manager
            </a>
            <p className="text-[#B8C2E0] text-sm leading-relaxed max-w-sm">
              Estudio digital premium especializado en diseño web, automatizaciones, bots con IA y desarrollo de plataformas web a medida para empresas que quieren crecer de verdad.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-[#B8C2E0]">
              <li><a href="#servicios" className="hover:text-white transition-colors">Diseño Web</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Automatizaciones</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Bots con IA</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Web Apps & SaaS</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-[#B8C2E0]">
              <li><a href="#proceso" className="hover:text-white transition-colors">Proceso</a></li>
              <li><a href="#resultados" className="hover:text-white transition-colors">Resultados</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#B8C2E0]">
          <p>© {new Date().getFullYear()} eTraffic Manager. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
