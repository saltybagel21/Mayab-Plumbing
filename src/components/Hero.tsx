import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, PhoneCall, Shield, Clock, Star } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1600&q=80&fit=crop"
          alt="Professional plumbing work"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E]/95 via-[#0F1C2E]/85 to-[#0F1C2E]/50"></div>
      </motion.div>

      {/* Animated water drop decorations */}
      <div className="absolute top-20 right-20 opacity-10 z-0">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="120" height="160" viewBox="0 0 100 130">
            <path d="M50 5 C50 5, 10 55, 10 75 C10 95, 28 115, 50 115 C72 115, 90 95, 90 75 C90 55, 50 5, 50 5Z" fill="#4FC3F7" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute bottom-32 right-[30%] opacity-5 z-0">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <svg width="80" height="100" viewBox="0 0 100 130">
            <path d="M50 5 C50 5, 10 55, 10 75 C10 95, 28 115, 50 115 C72 115, 90 95, 90 75 C90 55, 50 5, 50 5Z" fill="#4FC3F7" />
          </svg>
        </motion.div>
      </div>

      {/* Animated ripple circles */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.04] z-0">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-[#4FC3F7]"
            animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: 'easeOut' }}
          />
        ))}
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-2xl">
          
          {/* Trust badge with entrance animation */}
          <motion.div 
            initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium mb-8"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, type: 'spring', stiffness: 500 }}
                >
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                </motion.span>
              ))}
            </div>
            <span className="text-white/60 mx-1">|</span>
            Trusted by North York Homeowners
          </motion.div>
          
          {/* Headline with word-by-word reveal */}
          <div className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6 font-[family-name:var(--font-display)] tracking-tight">
            {['Fast,', 'Professional'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[#4FC3F7] inline-block mr-[0.3em]"
            >
              Plumbing
            </motion.span>
            {['You', 'Can', 'Count', 'On.'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.56 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl"
          >
            From urgent leaks to everyday plumbing problems, Mayan Plumbing delivers honest, responsive service with fair pricing — right here in North York and the GTA.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.a 
              href="tel:+16478038974" 
              className="magnetic-hover inline-flex justify-center items-center gap-2.5 bg-[#1DA1F2] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#1DA1F2]/25"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <PhoneCall size={20} />
              Call 647-803-8974
            </motion.a>
            <motion.a 
              href="#contact" 
              className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Quote
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
          
          {/* Trust Indicators with stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-300"
          >
            {[
              { icon: <Clock className="text-[#4FC3F7]" size={18} />, text: 'Fast Response' },
              { icon: <Shield className="text-[#4FC3F7]" size={18} />, text: 'Licensed & Insured' },
              { icon: <span className="text-[#4FC3F7] font-bold text-base">$</span>, text: 'Fair, Transparent Pricing' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + i * 0.15 }}
                className="flex items-center gap-2"
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
