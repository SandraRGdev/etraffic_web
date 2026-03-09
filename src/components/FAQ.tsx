import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '¿Cuánto tiempo tardáis en crear una web?',
    a: 'Depende de la complejidad, pero una web corporativa premium suele estar lista entre 3 y 6 semanas. Nos enfocamos en la calidad y en que el resultado final cumpla tus objetivos de negocio.'
  },
  {
    q: '¿Hacéis automatizaciones a medida?',
    a: 'Sí. Analizamos tus procesos manuales (facturación, seguimiento de leads, emails) y creamos flujos automatizados para que tu equipo ahorre horas cada semana.'
  },
  {
    q: '¿Podéis integrar WhatsApp o bots en mi negocio?',
    a: 'Por supuesto. Configuramos bots inteligentes que responden preguntas frecuentes, agendan citas o cualifican clientes directamente desde WhatsApp o tu web, 24/7.'
  },
  {
    q: '¿Podéis mejorar una web que ya existe?',
    a: 'Sí, realizamos auditorías de rendimiento y UX/UI. Si la base es buena, la optimizamos. Si está muy obsoleta, te propondremos una reconstrucción para asegurar resultados.'
  },
  {
    q: '¿Ofrecéis mantenimiento después del lanzamiento?',
    a: 'Sí, ofrecemos planes de mantenimiento técnico, actualizaciones de seguridad y soporte continuo para que tu web o automatizaciones nunca dejen de funcionar.'
  },
  {
    q: '¿Cómo solicito un presupuesto?',
    a: 'Rellena el formulario de contacto al final de esta página. Agendaremos una breve llamada para entender tus necesidades y te enviaremos una propuesta detallada sin compromiso.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#0b0b0b]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-[#898989] text-lg">
            Resolvemos tus dudas antes de empezar a trabajar juntos.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#131313] border border-white/5 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-white pr-8">{faq.q}</span>
                <ChevronDown
                  className={`text-[#8fff86] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[#898989] text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
