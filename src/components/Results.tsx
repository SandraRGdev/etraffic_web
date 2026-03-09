import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const scenarios = [
  {
    title: 'Clínica Dental',
    before: 'Gestión manual de citas por teléfono. Pérdida de pacientes fuera de horario.',
    after: 'Bot de WhatsApp 24/7 integrado con calendario. Recordatorios automáticos.',
    metric: '+35%',
    metricLabel: 'Citas agendadas'
  },
  {
    title: 'Despacho de Abogados',
    before: 'Web antigua sin captación. Formularios que llegaban al spam.',
    after: 'Web premium con embudo de captación. CRM integrado para seguimiento.',
    metric: 'x3',
    metricLabel: 'Leads cualificados'
  },
  {
    title: 'Agencia Inmobiliaria',
    before: 'Subida manual de propiedades a portales. Tareas repetitivas diarias.',
    after: 'Automatización de publicación y sincronización de leads en un solo panel.',
    metric: '-15h',
    metricLabel: 'Ahorro semanal'
  }
];

export default function Results() {
  return (
    <section id="resultados" className="py-24 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            El impacto de la digitalización
          </h2>
          <p className="text-[#898989] text-lg">
            Ejemplos de mejoras reales que este tipo de soluciones pueden conseguir en tu negocio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#131313] rounded-2xl p-8 border border-white/5 flex flex-col hover:border-[#8fff86]/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-white">{scenario.title}</h3>
              
              <div className="space-y-6 flex-1">
                <div>
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">Antes</div>
                  <p className="text-sm text-[#898989]">{scenario.before}</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#8fff86] uppercase tracking-wider mb-2">Después</div>
                  <p className="text-sm text-white">{scenario.after}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-end justify-between">
                <div>
                  <div className="text-4xl font-bold font-display text-[#8fff86] flex items-center gap-1">
                    {scenario.metric} <ArrowUpRight size={24} />
                  </div>
                  <div className="text-xs text-[#898989] uppercase tracking-wider mt-1 font-bold">
                    {scenario.metricLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
