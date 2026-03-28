import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const announcements = [
  { icon: "🚚", text: "Free Shipping above Rs. 2,000" },
  { icon: "✨", text: "New Anti-Tarnish Collection is live" },
  { icon: "💛", text: "Cash on Delivery — All over Pakistan" },
  { icon: "🔄", text: "7-Day Exchange Policy" },
];

const AnnouncementBar = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [show, setShow] = useState(true);

  // 2 second baad slide in
  useEffect(() => {
    const delay = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(delay);
  }, []);

  // Har 4 second pe next announcement
  useEffect(() => {
    if (dismissed) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % announcements.length);
        setVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(timer);
  }, [dismissed]);

  if (dismissed) return null;

  const item = announcements[current];

  return (
    // Bottom left corner — WhatsApp button bottom right pe hai
    <div className="fixed bottom-6 left-6 z-40">
      <div
        className="transition-all duration-500 ease-out"
        style={{
          transform: visible ? 'translateX(0) scale(1)' : 'translateX(-120%) scale(0.95)',
          opacity: visible ? 1 : 0,
        }}
      >
        <div className="bg-[#0f0d0b] text-white rounded-none shadow-2xl flex items-center gap-3 pr-3 pl-4 py-3 max-w-[240px]"
          style={{ borderLeft: '3px solid #b8952a' }}
        >
          <span className="text-lg shrink-0">{item.icon}</span>
          <p className="text-[11px] leading-snug font-light tracking-wide flex-1">
            {item.text}
          </p>
          <button
            onClick={() => setDismissed(true)}
            className="text-white/30 hover:text-white transition-colors ml-1 shrink-0"
          >
            <X size={12} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex gap-1 mt-2 pl-1">
          {announcements.map((_, i) => (
            <div
              key={i}
              className="h-0.5 rounded-full transition-all duration-300"
              style={{
                width: i === current ? '16px' : '4px',
                backgroundColor: i === current ? '#b8952a' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;