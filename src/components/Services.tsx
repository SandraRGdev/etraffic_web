import { motion } from 'motion/react';
import { Layout, Settings, Bot, AppWindow, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'web',
    icon: <Layout className="text-[#8fff86]" size={32} />,
    title: 'Diseño y Desarrollo Web',
    description: 'Webs corporativas y landing pages de alto rendimiento. Rápidas, seguras y diseñadas para convertir.',
    benefits: ['SEO On-page', 'Diseño UX/UI Premium', 'Carga ultrarrápida'],
    color: 'from-[#8fff86]/20 to-transparent'
  },
  {
    id: 'automation',
    icon: <Settings className="text-[#e0e055]" size={32} />,
    title: 'Automatizaciones',
    description: 'Conectamos tus herramientas para que trabajen solas. Ahorra horas de trabajo manual cada semana.',
    benefits: ['Integración CRM', 'Flujos de email', 'Gestión de leads'],
    color: 'from-[#e0e055]/20 to-transparent'
  },
  {
    id: 'bots',
    icon: <Bot className="text-[#8ddd8d]" size={32} />,
    title: 'Bots con IA',
    description: 'Atención al cliente 24/7. Responde dudas, agenda citas y cualifica leads automáticamente.',
    benefits: ['Respuestas instantáneas', 'Integración WhatsApp', 'Entrenamiento a medida'],
    color: 'from-[#8ddd8d]/20 to-transparent'
  },
  {
    id: 'apps',
    icon: <AppWindow className="text-[#eeeeee]" size={32} />,
    title: 'Web Apps y Dashboards',
    description: 'Desarrollamos portales a medida, plataformas SaaS y sistemas de gestión (reservas, clientes) para tu negocio.',
    benefits: ['Paneles de control', 'Sistemas de reservas', 'Arquitectura escalable'],
    color: 'from-white/10 to-transparent'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#131313] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Servicios diseñados para escalar
            </h2>
            <p className="text-[#898989] text-lg">
              Desde la presencia online hasta la automatización total de tus procesos.
              Todo lo que necesitas para digitalizar tu empresa con éxito.
            </p>
          </div>
          <a href="#contacto" className="hidden md:inline-flex items-center gap-2 text-[#8fff86] font-bold hover:text-white transition-colors">
            Consultar disponibilidad <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0b0b0b] border border-white/5 rounded-2xl p-10 hover:border-[#8fff86]/30 transition-all overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${service.color} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded bg-[#2b2b2b] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-[#898989] mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#eeeeee] font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8fff86]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <a href="#contacto" className="inline-flex items-center gap-2 text-sm font-bold text-[#898989] group-hover:text-[#8fff86] transition-colors">
                  Saber más <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
