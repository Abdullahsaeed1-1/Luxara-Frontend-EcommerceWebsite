import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle } from 'lucide-react';

const TrackForm = () => {
  const [orderId, setOrderId] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleTrack = () => {
    if (orderId && phone) {
      // TODO: Connect to TCS / Leopard API
      // Abhi sirf UI demo
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">

        {!submitted ? (
          <div>
            <div className="mb-12 text-center">
              <p className="text-yellow-600 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
                Track Order
              </p>
              <h2 className="font-serif text-4xl text-gray-900 font-light mb-4">
                Where's your <span className="italic text-yellow-600">package?</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Enter your Order ID and phone number to see your delivery status.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">
                  Order ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. LUX-00124"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full border border-gray-200 px-5 py-4 text-sm focus:outline-none
                             focus:border-yellow-500 transition-colors bg-[#fafaf8]"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="03XX-XXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-200 px-5 py-4 text-sm focus:outline-none
                             focus:border-yellow-500 transition-colors bg-[#fafaf8]"
                />
              </div>
              <button
                onClick={handleTrack}
                className="w-full bg-[#0f0d0b] text-white py-4 text-[11px] uppercase
                           tracking-widest hover:bg-yellow-600 transition-colors flex
                           items-center justify-center gap-2"
              >
                <Search size={14} /> Track My Order
              </button>
            </div>

            {/* Note */}
            <p className="text-center text-xs text-gray-300 mt-6">
              Order ID is included in your WhatsApp confirmation message.
            </p>
          </div>
        ) : (
          /* Demo Tracking Result */
          <div>
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl text-gray-900 font-light mb-2">
                Order <span className="text-yellow-600">#{orderId}</span>
              </h2>
              <p className="text-sm text-gray-400">Estimated delivery: 2–3 business days</p>
            </div>

            {/* Progress Steps */}
            <div className="space-y-1">
              {[
                { icon: <CheckCircle size={18} />, label: "Order Confirmed", status: "done", time: "Today, 10:30 AM" },
                { icon: <Package size={18} />, label: "Packed & Dispatched", status: "done", time: "Today, 2:00 PM" },
                { icon: <Truck size={18} />, label: "Out for Delivery", status: "active", time: "In progress" },
                { icon: <CheckCircle size={18} />, label: "Delivered", status: "pending", time: "Expected tomorrow" },
              ].map((step, i) => (
                <div key={i} className={`flex items-center gap-4 p-5 border-l-2 ${
                  step.status === 'done' ? 'border-yellow-500 bg-yellow-50' :
                  step.status === 'active' ? 'border-yellow-600 bg-yellow-50' :
                  'border-gray-200 bg-[#fafaf8]'
                }`}>
                  <span className={`${
                    step.status === 'done' ? 'text-yellow-600' :
                    step.status === 'active' ? 'text-yellow-600' : 'text-gray-300'
                  }`}>
                    {step.icon}
                  </span>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${
                      step.status === 'pending' ? 'text-gray-300' : 'text-gray-800'
                    }`}>{step.label}</p>
                    <p className="text-xs text-gray-400">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => { setSubmitted(false); setOrderId(''); setPhone(''); }}
              className="w-full mt-6 border border-gray-200 py-3.5 text-[11px] uppercase
                         tracking-widest hover:bg-gray-50 transition-colors"
            >
              Track Another Order
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default TrackForm;