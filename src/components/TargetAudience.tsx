import { motion } from 'motion/react';
import { Building2, Stethoscope, Briefcase, ShoppingCart, GraduationCap, UserCircle } from 'lucide-react';

const audiences = [
  { icon: <Building2 size={24} />, name: 'Negocios Locales', desc: 'Más reservas y clientes recurrentes.' },
  { icon: <Stethoscope size={24} />, name: 'Clínicas y Centros', desc: 'Agendas llenas y recordatorios automáticos.' },
  { icon: <Briefcase size={24} />, name: 'Despachos', desc: 'Captación de leads cualificados B2B.' },
  { icon: <ShoppingCart size={24} />, name: 'Ecommerce', desc: 'Recuperación de carritos y ventas cruzadas.' },
  { icon: <GraduationCap size={24} />, name: 'Academias', desc: 'Embudos de venta para cursos online.' },
  { icon: <UserCircle size={24} />, name: 'Marcas Personales', desc: 'Posicionamiento premium y autoridad.' },
];

export default function TargetAudience() {
  return (
    <section className="py-24 bg-[#0b0b0b] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Soluciones para tu sector
          </h2>
          <p className="text-[#898989] text-lg">
            Entendemos que cada negocio es diferente. Adaptamos la tecnología a tus necesidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#131313] border border-white/5 rounded-2xl p-8 text-center hover:border-[#8fff86]/30 transition-colors cursor-default"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-[#2b2b2b] text-[#8fff86] mb-4">
                {audience.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{audience.name}</h3>
              <p className="text-sm text-[#898989] leading-relaxed">{audience.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
