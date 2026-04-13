import { motion } from 'motion/react';
import { Droplets, Wrench, AlertTriangle, Bath, Home, ShowerHead, Pipette, Settings } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Emergency Plumbing',
      description: 'Burst pipes, major leaks, flooding — we respond fast when every minute counts.',
      icon: AlertTriangle,
      highlight: true,
    },
    {
      title: 'Drain Services',
      description: 'Clogged or slow drains cleared quickly with professional tools and lasting results.',
      icon: Droplets,
    },
    {
      title: 'Leak Detection & Repair',
      description: 'We find and fix leaks accurately — from hidden pipe leaks to dripping fixtures.',
      icon: Pipette,
    },
    {
      title: 'Faucet & Fixture Repair',
      description: 'Repair or replacement of faucets, valves, and fixtures done right the first time.',
      icon: ShowerHead,
    },
    {
      title: 'Toilet Repairs & Installation',
      description: 'Running toilets, clogs, or full replacements — handled cleanly and efficiently.',
      icon: Bath,
    },
    {
      title: 'Basement & Flood Plumbing',
      description: 'Sump pump service, backflow prevention, and flood damage plumbing solutions.',
      icon: Home,
    },
    {
      title: 'Kitchen & Bathroom Plumbing',
      description: 'Full-service plumbing for kitchen and bathroom renovations and upgrades.',
      icon: Settings,
    },
    {
      title: 'General Maintenance',
      description: 'Routine plumbing inspections, maintenance, and small repairs to prevent big problems.',
      icon: Wrench,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FAFB] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-[#1DA1F2]/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#1DA1F2] font-bold text-sm tracking-wider uppercase mb-3 font-[family-name:var(--font-display)]">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 font-[family-name:var(--font-display)] leading-tight">
              Reliable Plumbing & <br className="hidden md:block"/> Drain Solutions
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              From everyday repairs to urgent emergencies, we handle it professionally and get it done right.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="revealed"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            revealed: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  revealed: { opacity: 1, y: 0 }
                }}
                className={`card-lift relative overflow-hidden group rounded-2xl p-7 flex flex-col h-full ${
                  service.highlight
                    ? 'bg-[#1DA1F2] text-white shadow-xl shadow-[#1DA1F2]/20'
                    : 'bg-white border border-slate-100/50 shadow-sm hover:shadow-xl hover:border-[#1DA1F2]/10'
                }`}
              >
                {/* Highlight card shine effect */}
                {service.highlight && (
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                )}

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  service.highlight
                    ? 'bg-white/20 shadow-inner backdrop-blur-sm'
                    : 'bg-[#E8F5FE] shadow-sm group-hover:bg-[#1DA1F2] group-hover:scale-110 group-hover:rotate-3'
                }`}>
                  <Icon className={`transition-colors duration-300 ${
                    service.highlight
                      ? 'text-white'
                      : 'text-[#1DA1F2] group-hover:text-white'
                  }`} size={26} />
                </div>
                
                <h3 className={`text-xl font-bold mb-3 font-[family-name:var(--font-display)] tracking-tight ${
                  service.highlight ? 'text-white' : 'text-slate-900'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-[15px] leading-relaxed mt-auto ${
                  service.highlight ? 'text-white/90' : 'text-slate-500 group-hover:text-slate-600'
                }`}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="magnetic-hover inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1DA1F2] transition-colors shadow-lg"
          >
            Get a Free Quote
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
