import { motion, useInView } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const allReviews = [
  {
    name: "Moshe Zionce",
    text: "I had a very good experience with Mayan Plumbing! It was an emergency call. They came immediately. They were professional, courteous, did great work and cleaned up after. I highly recommend them.",
    tag: "Emergency Response",
  },
  {
    name: "Lee S.",
    text: "Yanky Gass is an extremely courteous and professional plumber who also scores points for his punctuality — arriving when he said he would. He was very easy to deal with and provided clear answers to all my questions along the way.",
    tag: "Professional & Punctual",
  },
  {
    name: "Y A",
    text: "Yanky was quick and professional. He is a pleasure to deal with. I'm glad I used him and you will be glad too! Oh, and his price was very reasonable. A breath of fresh air in today's overpriced environment.",
    tag: "Fair Pricing",
  },
  {
    name: "Rachel Wardinger",
    text: "Very responsive! Mayan Plumbing helped me when my basement was flooding. They showed up quickly and got the job done well. I would recommend!",
    tag: "Fast Response",
  },
  {
    name: "M Leser",
    text: "It was truly a pleasure dealing with Mayan, a professional reputable company who looked out for my good vs. trying to make another few dollars. They solved my issue efficiently and in a swift turnaround. Highly recommended.",
    tag: "Honest & Efficient",
  },
  {
    name: "Solomon Poliakov",
    text: "What an experience. First time I have had a plumber at my home and felt like I have not been scammed into replacing certain pipes. Great pricing also — thanks Mayan.",
    tag: "Trustworthy",
  },
  {
    name: "Andrew Alexopoulos",
    text: "Yanky was super professional, explained things clearly, super friendly. Would 100% recommend Mayan Plumbing for any issues. Amazing services!",
    tag: "Clear Communication",
  },
  {
    name: "Jessica Berman",
    text: "Look no further for a plumber who gets the job done with efficiency, super communication, reliable service, and great results!",
    tag: "Reliable Service",
  },
  {
    name: "Misaskim Toronto",
    text: "Our kitchen faucet wouldn't stop leaking even after I repaired it multiple times. I reached out to Yanky at Mayan Plumbing and just a few hours later he arrived and assessed what needed to be done. Within no time the faucet was repaired.",
    tag: "Quick Fix",
  },
];

const quickReviews = [
  { name: "Yakov Zombek", text: "Fast! Efficient! Professional!" },
  { name: "Nisan Lemel", text: "Great service, clean work, priced well and treats customer with respect." },
  { name: "M Orr", text: "Excellent work at a fair and transparent price. I appreciate that he listened and gave options." },
  { name: "Paige Vanderplaat", text: "Yanky was very knowledgeable and friendly! Answered questions with genuine interest & offered help beyond our initial service call!" },
];

// Auto-scrolling ticker component
function ReviewTicker({ reviews, speed = 30, direction = 'left' }: { reviews: typeof quickReviews, speed?: number, direction?: 'left' | 'right' }) {
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {[...reviews, ...reviews].map((review, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-slate-900 rounded-xl px-6 py-4 w-[340px] group hover:bg-[#1DA1F2] transition-colors duration-500"
          >
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="fill-amber-400 text-amber-400" size={12} />
              ))}
            </div>
            <p className="text-sm text-slate-300 group-hover:text-white/90 leading-snug mb-2 transition-colors">"{review.text}"</p>
            <p className="text-xs text-slate-500 group-hover:text-white/60 font-medium transition-colors">— {review.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Animated review card
function ReviewCard({ review, index }: { review: typeof allReviews[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group"
    >
      {/* Tag */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E8F5FE] text-[#1DA1F2] text-xs font-bold mb-4">
        {review.tag}
      </div>

      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="fill-amber-400 text-amber-400" size={15} />
        ))}
      </div>
      
      <p className="text-slate-700 leading-relaxed mb-5 text-[15px]">
        "{review.text}"
      </p>
      
      <div className="flex items-center gap-3">
        <motion.div 
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1DA1F2] to-[#0A6FB0] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#1DA1F2]/20"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {review.name.charAt(0)}
        </motion.div>
        <div>
          <p className="font-bold text-slate-900 text-sm">{review.name}</p>
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Google Review
          </p>
        </div>
      </div>
      
      <Quote className="absolute top-5 right-5 text-slate-100 group-hover:text-[#E8F5FE] transition-colors" size={28} />
    </motion.div>
  );
}

// Animated counter
function AnimatedCount({ target, label }: { target: string, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: 'spring' }}
      className="text-center"
    >
      <motion.div
        className="text-4xl md:text-5xl font-extrabold text-[#1DA1F2] font-[family-name:var(--font-display)]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        {target}
      </motion.div>
      <p className="text-slate-500 text-sm font-medium mt-1">{label}</p>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white overflow-hidden water-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-[#1DA1F2] font-bold text-sm tracking-wider uppercase mb-3 font-[family-name:var(--font-display)]"
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              whileInView={{ opacity: 1, letterSpacing: '0.1em' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Reviews
            </motion.p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 font-[family-name:var(--font-display)]">
              What Our Customers Say
            </h2>
            <p className="text-slate-600 text-lg">
              Real reviews from real homeowners. See why North York trusts Mayan Plumbing.
            </p>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-14">
          <AnimatedCount target="5.0" label="Google Rating" />
          <AnimatedCount target="13+" label="5-Star Reviews" />
          <AnimatedCount target="100%" label="Would Recommend" />
        </div>

        {/* Main testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {allReviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>

        {/* Quick reviews ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ReviewTicker reviews={quickReviews} speed={35} />
        </motion.div>

      </div>
    </section>
  );
}
