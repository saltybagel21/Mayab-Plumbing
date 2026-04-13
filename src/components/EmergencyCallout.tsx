import { motion } from 'motion/react';
import { PhoneCall, AlertTriangle, Clock, Droplets } from 'lucide-react';

export function EmergencyCallout() {
  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 25% 50%, #1DA1F2 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="text-red-400" size={24} />
                </div>
                <div className="absolute inset-0 rounded-full bg-red-400/20 animate-pulse-ring"></div>
              </div>
              <span className="text-red-400 font-bold text-sm tracking-wider uppercase font-[family-name:var(--font-display)]">
                Plumbing Emergency?
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-[family-name:var(--font-display)] leading-tight">
              Don't Wait — Mayan Plumbing Responds Fast.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Burst pipe? Flooded basement? Leak that won't stop? Call us now. Our customers consistently praise our fast emergency response — we'll be there when it matters most.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="text-[#4FC3F7]" size={18} />
                <span>Rapid Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="text-[#4FC3F7]" size={18} />
                <span>Leak & Flood Help</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-gradient-to-br from-[#1DA1F2] to-[#0A6FB0] rounded-2xl p-8 text-center max-w-sm w-full shadow-2xl shadow-[#1DA1F2]/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <PhoneCall className="text-white" size={28} />
              </div>
              <p className="text-white/80 text-sm font-medium mb-2">Call Mayan Plumbing Now</p>
              <a 
                href="tel:+16478038974" 
                className="block text-3xl font-extrabold text-white mb-6 hover:underline font-[family-name:var(--font-display)]"
              >
                647-803-8974
              </a>
              <a 
                href="tel:+16478038974"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1DA1F2] px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors w-full"
              >
                <PhoneCall size={20} />
                Call Now
              </a>
              <p className="text-white/50 text-xs mt-4">North York & Greater Toronto Area</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
