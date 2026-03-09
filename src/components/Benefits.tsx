import { motion } from 'motion/react';
import { Clock, TrendingUp, Cpu, Target } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="text-[#8fff86]" size={24} />,
    title: 'Más tiempo para ti',
    description: 'Automatizamos tareas repetitivas para que tu equipo se enfoque en lo que realmente importa: hacer crecer el negocio.'
  },
  {
    icon: <TrendingUp className="text-[#e0e055]" size={24} />,
    title: 'Mayor captación',
    description: 'Webs optimizadas para convertir visitas en clientes, con embudos claros y diseño persuasivo.'
  },
  {
    icon: <Cpu className="text-[#8ddd8d]" size={24} />,
    title: 'Eficiencia operativa',
    description: 'Conectamos tus herramientas (CRM, email, facturación) para que trabajen solas y sin errores humanos.'
  },
  {
    icon: <Target className="text-[#eeeeee]" size={24} />,
    title: 'Soluciones a medida',
    description: 'No usamos plantillas genéricas. Construimos exactamente lo que tu empresa necesita para escalar.'
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-[#0b0b0b] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Por qué elegir eTraffic Manager
          </h2>
          <p className="text-[#898989] text-lg">
            No solo hacemos webs bonitas. Construimos activos digitales diseñados para generar retorno de inversión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#131313] border border-white/5 rounded-2xl p-8 hover:border-[#8fff86]/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded bg-[#2b2b2b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-[#898989] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
