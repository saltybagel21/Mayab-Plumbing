import { motion } from 'motion/react';
import { Clock, ShieldCheck, ThumbsUp, Sparkles } from 'lucide-react';

export function TrustBar() {
  const pillars = [
    { icon: Clock, label: 'Fast Emergency Response', sublabel: 'When you need us most' },
    { icon: ShieldCheck, label: 'Honest & Transparent', sublabel: 'No surprises, fair pricing' },
    { icon: ThumbsUp, label: 'Professional Service', sublabel: 'Courteous & respectful' },
    { icon: Sparkles, label: 'Clean Workmanship', sublabel: 'We leave it spotless' },
  ];

  return (
    <section className="relative z-20 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/8 border border-slate-100 p-2">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`flex items-center gap-3 px-5 py-5 rounded-xl hover:bg-[#F0F9FF] transition-colors ${
                    index < pillars.length - 1 ? 'lg:border-r border-slate-100' : ''
                  }`}
                >
                  <div className="w-11 h-11 rounded-lg bg-[#E8F5FE] flex items-center justify-center shrink-0">
                    <Icon className="text-[#1DA1F2]" size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm leading-tight">{pillar.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{pillar.sublabel}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
