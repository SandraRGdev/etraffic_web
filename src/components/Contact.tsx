import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-[#131313] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8fff86]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
              ¿Listo para escalar tu negocio?
            </h2>
            <p className="text-[#898989] text-lg mb-8 leading-relaxed">
              Cuéntanos qué necesitas. Ya sea una web premium, automatizar procesos aburridos o un bot inteligente, estamos listos para construirlo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#8fff86]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#8fff86] font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Rellena el formulario</h4>
                  <p className="text-sm text-[#898989]">Danos algo de contexto sobre tu empresa y tus objetivos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#e0e055]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#e0e055] font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Agendamos una llamada</h4>
                  <p className="text-sm text-[#898989]">Hablamos 15 minutos para ver si somos el partner adecuado.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#8ddd8d]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#8ddd8d] font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Recibes una propuesta</h4>
                  <p className="text-sm text-[#898989]">Plan de acción claro, plazos y presupuesto sin compromiso.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 shadow-2xl relative"
          >
            {isSuccess ? (
              <div className="absolute inset-0 bg-[#0b0b0b] rounded-2xl flex flex-col items-center justify-center p-8 text-center z-20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-[#8fff86]/20 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 size={40} className="text-[#8fff86]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                <p className="text-[#898989]">
                  Hemos recibido tu solicitud. Nos pondremos en contacto contigo en menos de 24 horas.
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-[#898989]">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#8fff86] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-[#898989]">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#8fff86] transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-[#898989]">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#8fff86] transition-colors"
                    placeholder="correo@empresa.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-[#898989]">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#8fff86] transition-colors"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold text-[#898989]">¿En qué podemos ayudarte? *</label>
                <select
                  id="service"
                  required
                  className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#8fff86] transition-colors appearance-none"
                >
                  <option value="" disabled selected>Selecciona un servicio</option>
                  <option value="web">Diseño y Desarrollo Web</option>
                  <option value="automation">Automatización de Procesos</option>
                  <option value="bot">Bots con IA / WhatsApp</option>
                  <option value="app">Desarrollo de Web App / Dashboard</option>
                  <option value="other">Otro / Consultoría</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-[#898989]">Mensaje *</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#8fff86] transition-colors resize-none"
                  placeholder="Cuéntanos un poco más sobre tu proyecto o problema actual..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8fff86] text-[#0b0b0b] font-bold rounded-xl px-6 py-4 flex items-center justify-center gap-2 hover:bg-[#8ddd8d] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Enviando...</span>
                ) : (
                  <>
                    Solicitar propuesta
                    <Send size={18} />
                  </>
                )}
              </button>
              <p className="text-xs text-center text-[#898989] mt-4">
                Al enviar este formulario aceptas nuestra política de privacidad. No enviamos spam.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
