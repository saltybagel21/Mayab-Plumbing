import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2, Phone, Star } from 'lucide-react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const strengths = [
    "Fast, responsive service",
    "Transparent, fair pricing",
    "Professional & courteous crew",
    "Clean, tidy workmanship",
    "Clear communication throughout",
    "Honest recommendations",
  ];

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* Image side */}
          <motion.div 
            initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[#1DA1F2]/20 rounded-3xl mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
              
              <motion.div style={{ y: imgY }} className="h-full">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&fit=crop" 
                  alt="Professional plumber at work" 
                  className="rounded-3xl w-full h-[500px] lg:h-[600px] object-cover shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>
              
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMxREExRjIiIGZpbGwtb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] z-20"></div>
              
              {/* Floating review card */}
              <motion.div 
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-5 sm:p-6 border border-slate-100 max-w-[240px] sm:max-w-[280px] z-30 card-lift animate-float-slow"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-amber-400 text-amber-400" size={16} />
                    ))}
                  </div>
                </div>
                <p className="text-sm sm:text-[15px] text-slate-700 font-medium leading-relaxed mb-3">
                  "Professional, courteous, did great work and cleaned up after."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1DA1F2] to-[#0C87D4] text-white flex items-center justify-center text-[10px] font-bold">M</div>
                  <p className="text-xs text-slate-500 font-semibold">— Moshe Z., Google Review</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:pl-6"
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#1DA1F2] font-bold tracking-wider uppercase text-sm mb-4 font-[family-name:var(--font-display)] flex items-center gap-2"
            >
              <span className="w-8 h-0.5 bg-[#1DA1F2] rounded-full"></span>
              Why Mayan Plumbing
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight font-[family-name:var(--font-display)]"
            >
              Plumbing Done Right,<br className="hidden sm:block"/> With Respect for Your Home.
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-slate-600 mb-10 text-lg leading-relaxed"
            >
              <p>
                Mayan Plumbing serves homeowners and businesses across North York and the greater Toronto area with the kind of service that earns trust — fast response times, honest assessments, fair pricing, and work we stand behind.
              </p>
              <p>
                Our customers consistently tell us the same thing: we show up when we say we will, we explain the problem clearly, we fix it right, and we clean up after ourselves. That's not a tagline — it's how we operate on every single call.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="revealed"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                revealed: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
              }}
              className="grid sm:grid-cols-2 gap-y-4 gap-x-2 mb-12"
            >
              {strengths.map((strength, index) => (
                <motion.div 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    revealed: { opacity: 1, x: 0 }
                  }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#E8F5FE] flex items-center justify-center shrink-0 group-hover:bg-[#1DA1F2] transition-colors">
                    <CheckCircle2 className="text-[#1DA1F2] group-hover:text-white transition-colors" size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-semibold text-[15px]">{strength}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                href="tel:+16478038974" 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="magnetic-hover inline-flex items-center gap-2.5 bg-[#1DA1F2] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0C87D4] transition-colors shadow-lg shadow-[#1DA1F2]/25 text-lg"
              >
                <Phone size={20} />
                Call Us Today
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
