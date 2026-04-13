import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFB] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1DA1F2]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#1DA1F2] font-bold text-sm tracking-wider uppercase mb-3 font-[family-name:var(--font-display)]">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 font-[family-name:var(--font-display)]">
              Get in Touch with Mayan Plumbing
            </h2>
            <p className="text-slate-600 text-lg">
              Ready to solve your plumbing issue? Call us directly or send a message — we'll get back to you promptly.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Contact Info & Map */}
          <motion.div 
            initial="hidden"
            whileInView="revealed"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              revealed: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Phone Card - Most important */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -30 },
                revealed: { opacity: 1, x: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } }
              }}
              className="bg-[#1DA1F2] rounded-2xl p-6 text-white magnetic-hover relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-bold text-lg">Call Us</p>
                </div>
              </div>
              <a href="tel:+16478038974" className="text-2xl font-extrabold hover:text-white/90 transition-colors block mb-1 font-[family-name:var(--font-display)] relative z-10">
                647-803-8974
              </a>
              <p className="text-white/80 text-sm relative z-10 font-medium">Fastest way to reach us</p>
            </motion.div>

            {/* Address Card & Map */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -30 },
                revealed: { opacity: 1, x: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } }
              }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-lift"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 bg-[#E8F5FE] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="text-[#1DA1F2]" size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1 font-[family-name:var(--font-display)]">Our Location</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    150 Neptune Dr<br />
                    North York, ON M6A 1X4<br />
                    Canada
                  </p>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="w-full h-[200px] rounded-xl overflow-hidden border border-slate-100 relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.847525381831!2d-79.4449836!\3d43.724128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b322a3fc5b525%3A0xea03baeeeb58bb15!2s150%20Neptune%20Dr%2C%20North%20York%2C%20ON%20M6A%201X4%2C%20Canada!5e0!3m2!1sen!2sus!4v1713028302194!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mayan Plumbing Location"
                  className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -30 },
                revealed: { opacity: 1, x: 0, transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 } }
              }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-lift"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-[#E8F5FE] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="text-[#1DA1F2]" size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1 font-[family-name:var(--font-display)]">Business Hours</p>
                </div>
              </div>
              <div className="space-y-3 text-sm ml-[52px]">
                {[
                  { day: 'Monday – Thursday', hours: '8:00 AM – 6:00 PM' },
                  { day: 'Friday', hours: '8:00 AM – 2:00 PM' },
                  { day: 'Saturday – Sunday', hours: 'Closed' },
                ].map((schedule, i) => (
                  <div key={i} className="flex justify-between items-center pb-2 border-b border-slate-50 last:border-0 last:pb-0">
                    <span className="text-slate-600">{schedule.day}</span>
                    <span className={`font-semibold bg-slate-50 px-2 py-1 rounded-md ${schedule.hours === 'Closed' ? 'text-slate-400' : 'text-[#1DA1F2]'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3"
          >
            <form className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-100 relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              {/* Form decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E8F5FE] to-transparent rounded-bl-full opacity-50" />
              
              <h3 className="text-2xl font-bold text-slate-900 mb-8 font-[family-name:var(--font-display)] relative z-10">Request a Quote or Service</h3>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-6 relative z-10">
                <div className="relative group/input">
                  <label htmlFor="contact-name" className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:ring-4 focus:ring-[#1DA1F2]/10 focus:border-[#1DA1F2] outline-none transition-all text-sm bg-slate-50 hover:bg-white"
                    placeholder="Full name"
                  />
                </div>
                <div className="relative group/input">
                  <label htmlFor="contact-phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="contact-phone" 
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:ring-4 focus:ring-[#1DA1F2]/10 focus:border-[#1DA1F2] outline-none transition-all text-sm bg-slate-50 hover:bg-white"
                    placeholder="(416) 555-1234"
                  />
                </div>
              </div>
              
              <div className="mb-6 relative z-10">
                <label htmlFor="contact-service" className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                <div className="relative">
                  <select 
                    id="contact-service" 
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:ring-4 focus:ring-[#1DA1F2]/10 focus:border-[#1DA1F2] outline-none transition-all text-sm bg-slate-50 hover:bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option value="emergency">Emergency Plumbing</option>
                    <option value="drain">Drain Services</option>
                    <option value="leak">Leak Detection & Repair</option>
                    <option value="faucet">Faucet & Fixture Repair</option>
                    <option value="toilet">Toilet Repairs / Installation</option>
                    <option value="basement">Basement & Flood Plumbing</option>
                    <option value="kitchen-bath">Kitchen & Bathroom Plumbing</option>
                    <option value="maintenance">General Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
              
              <div className="mb-8 relative z-10">
                <label htmlFor="contact-message" className="block text-sm font-bold text-slate-700 mb-2">Tell Us About the Issue <span className="text-slate-400 font-normal">(Optional)</span></label>
                <textarea 
                  id="contact-message" 
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:ring-4 focus:ring-[#1DA1F2]/10 focus:border-[#1DA1F2] outline-none transition-all resize-none text-sm bg-slate-50 hover:bg-white"
                  placeholder="Briefly describe your plumbing issue or what you need help with..."
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#1DA1F2] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#1DA1F2]/25 flex items-center justify-center gap-2 text-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <Send size={18} className="relative z-10" />
                <span className="relative z-10">Send Request</span>
              </motion.button>
              
              <p className="text-center text-sm font-medium text-slate-500 mt-5">
                We typically respond within <span className="text-[#1DA1F2] font-bold">15 minutes</span> during business hours.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
