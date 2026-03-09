import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Análisis',
    desc: 'Estudiamos tu negocio, tus procesos actuales y detectamos cuellos de botella y oportunidades.'
  },
  {
    num: '02',
    title: 'Estrategia',
    desc: 'Diseñamos un plan de acción a medida: qué herramientas usar, qué automatizar y cómo estructurar la web.'
  },
  {
    num: '03',
    title: 'Desarrollo',
    desc: 'Construimos la solución. Diseño UX/UI premium, programación limpia e integraciones robustas.'
  },
  {
    num: '04',
    title: 'Lanzamiento',
    desc: 'Pruebas exhaustivas, puesta en marcha y formación para que tu equipo sepa usar las nuevas herramientas.'
  }
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-[#131313]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Cómo trabajamos
          </h2>
          <p className="text-[#898989] text-lg max-w-2xl">
            Un proceso claro y transparente. Sin sorpresas, orientado a resultados desde el primer día.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="w-16 h-16 rounded bg-[#0b0b0b] border border-white/10 flex items-center justify-center text-2xl font-bold font-display text-[#8fff86] mb-6 shadow-xl">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-[#898989] text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
