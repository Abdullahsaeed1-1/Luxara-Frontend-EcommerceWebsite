import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Are these stones real?",
    answer: "Yes, 100%. We source authentic volcanic lava, agate, and moonstones directly from certified suppliers to ensure you get the healing energy you deserve."
  },
  {
    question: "How do I choose my size?",
    answer: "Our standard size is 7 inches (Medium), which fits most wrists perfectly. If you need a custom size, simply leave a note at checkout, and we'll craft it to your specific measurement."
  },
  {
    question: "Is the elastic durable?",
    answer: "Absolutely. We use industrial-grade double-strung silicon elastic. It is designed to stretch comfortably without losing shape or breaking over time."
  },
  {
    question: "Do you offer cash on delivery?",
    answer: "Yes, we offer Cash on Delivery (COD) all across Pakistan. You can pay comfortably when the package arrives at your doorstep."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 7-day exchange policy for any damaged or incorrect items. Customer satisfaction is our top priority."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 uppercase tracking-widest text-xs font-bold">Support</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-3">You Ask, We Answer</h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Everything you need to know about our craftsmanship, shipping, and sizing.
          </p>
        </div>

        {/* Questions List */}
        <div className="border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button 
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className={`text-lg font-serif transition-colors duration-300 ${openIndex === index ? 'text-gray-900' : 'text-gray-600 group-hover:text-black'}`}>
                  {faq.question}
                </span>
                
                {/* Rotating Icon */}
                <span className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-black text-white rotate-180' : 'bg-gray-100 text-black group-hover:bg-gray-200'}`}>
                   <ChevronDown size={16} />
                </span>
              </button>
              
              {/* Smooth Open Animation */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-500 leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;