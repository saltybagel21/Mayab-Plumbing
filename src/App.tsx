/**
 * Mayan Plumbing Inc. — Main Application
 * Premium plumbing website for North York & GTA
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { EmergencyCallout } from './components/EmergencyCallout';
import { ServiceArea } from './components/ServiceArea';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <EmergencyCallout />
        <Testimonials />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
      {/* Bottom padding for mobile sticky bar */}
      <div className="h-20 lg:hidden"></div>
    </div>
  );
}
