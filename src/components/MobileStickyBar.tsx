import { Phone } from 'lucide-react';

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 safe-area-bottom">
      <a
        href="tel:+16478038974"
        className="flex items-center justify-center gap-2 bg-[#1DA1F2] text-white py-3.5 rounded-xl font-bold text-base hover:bg-[#0C87D4] transition-colors shadow-lg shadow-[#1DA1F2]/20 w-full"
      >
        <Phone size={18} />
        Call Mayan Plumbing — 647-803-8974
      </a>
    </div>
  );
}
