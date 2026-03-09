import { motion } from 'motion/react';

const techCategories = [
  {
    name: 'Desarrollo Web',
    items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript']
  },
  {
    name: 'Automatización & IA',
    items: ['Make', 'Zapier', 'OpenAI API', 'n8n']
  },
  {
    name: 'Integraciones',
    items: ['Stripe', 'HubSpot', 'ActiveCampaign', 'WhatsApp API']
  },
  {
    name: 'Bases de Datos & Backend',
    items: ['Supabase', 'Firebase', 'Node.js', 'PostgreSQL']
  }
];

export default function TechStack() {
  return (
    <section className="py-24 bg-[#131313] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Tecnología de primer nivel
          </h2>
          <p className="text-[#898989] text-lg">
            Usamos las herramientas más modernas y seguras del mercado para garantizar que tu proyecto sea rápido, escalable y robusto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0b0b0b] border border-white/5 rounded-2xl p-8"
            >
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="text-sm text-[#898989] flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8fff86]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
