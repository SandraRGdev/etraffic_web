import { motion } from 'motion/react';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0b0b0b]">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#8fff86]/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131313] border border-white/10 text-sm font-medium text-[#898989] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#8fff86] animate-pulse" />
            Estudio Digital Premium
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-display leading-[0.95] tracking-tighter mb-8">
            Activez <br />
            votre <br />
            <span className="text-[#8fff86]">
              croissance
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#898989] mb-10 leading-relaxed max-w-xl">
            Ayudamos a empresas a crecer con soluciones digitales que ahorran tiempo, mejoran procesos y venden mejor: webs, automatizaciones, bots y plataformas web hechas con enfoque estratégico.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#8fff86] text-[#0b0b0b] font-bold hover:bg-[#8ddd8d] transition-colors"
            >
              Solicitar propuesta
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#131313] border border-white/10 text-white font-medium hover:bg-[#2b2b2b] transition-colors"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-[#898989]">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-[#8fff86]" />
              <span>Resultados medibles</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#8fff86]" />
              <span>Soluciones a medida</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Abstract Tech Visual */}
          <div className="relative w-full aspect-square rounded-3xl border border-white/10 bg-[#131313] overflow-hidden p-8 shadow-2xl">
            
            {/* Mockup Elements */}
            <div className="h-full flex flex-col gap-4 relative z-10">
              {/* Header Mockup */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <div className="h-4 w-24 bg-white/5 rounded-full" />
              </div>
              
              {/* Dashboard Mockup */}
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-[#2b2b2b] rounded-xl border border-white/5 flex items-end p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8fff86]/20 to-transparent opacity-50" />
                  <div className="w-full h-1/2 border-b border-dashed border-[#8fff86]/30 relative z-10">
                    <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0,100 Q25,50 50,80 T100,20 L100,100 Z" fill="rgba(143, 255, 134, 0.1)" />
                      <path d="M0,100 Q25,50 50,80 T100,20" fill="none" stroke="#8fff86" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#2b2b2b] rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                  <div className="w-8 h-8 rounded bg-[#8fff86]/10 flex items-center justify-center mb-4">
                    <Zap size={16} className="text-[#8fff86]" />
                  </div>
                  <div>
                    <div className="h-2 w-12 bg-white/20 rounded-full mb-2" />
                    <div className="h-4 w-20 bg-white/40 rounded-full" />
                  </div>
                </div>
                <div className="bg-[#2b2b2b] rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                  <div className="w-8 h-8 rounded bg-[#e0e055]/10 flex items-center justify-center mb-4">
                    <ShieldCheck size={16} className="text-[#e0e055]" />
                  </div>
                  <div>
                    <div className="h-2 w-12 bg-white/20 rounded-full mb-2" />
                    <div className="h-4 w-20 bg-white/40 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-6 top-1/4 bg-[#0b0b0b] border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#8fff86]/20 flex items-center justify-center">
                <span className="text-[#8fff86] font-bold">+24%</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white">Conversión</div>
                <div className="text-xs text-[#898989]">Últimos 30 días</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
