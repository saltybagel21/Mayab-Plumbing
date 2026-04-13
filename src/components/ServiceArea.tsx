import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export function ServiceArea() {
  const areas = [
    'North York', 'Toronto', 'Thornhill', 'Vaughan', 
    'Scarborough', 'Etobicoke', 'Richmond Hill', 'Markham'
  ];

  return (
    <section className="py-16 bg-[#F0F9FF] border-y border-[#1DA1F2]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <MapPin className="text-[#1DA1F2]" size={20} />
              <p className="text-[#1DA1F2] font-bold text-sm tracking-wider uppercase font-[family-name:var(--font-display)]">Service Area</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 font-[family-name:var(--font-display)]">
              Serving North York & the GTA
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Based in North York, we proudly serve homeowners and businesses across the Greater Toronto Area.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {areas.map((area, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="inline-flex items-center gap-1.5 bg-white px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 border border-slate-200 hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-colors shadow-sm"
                >
                  <MapPin size={14} className="text-[#1DA1F2]" />
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
