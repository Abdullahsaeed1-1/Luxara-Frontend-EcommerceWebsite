import React from 'react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "The quality of the beads is amazing. You can feel the weight of the real stones. Absolutely love my set!",
    author: "Sarah Khan",
    location: "Lahore"
  },
  {
    id: 2,
    text: "Ordered a couple set for my anniversary. The packaging was so premium and the bracelets fit perfectly.",
    author: "Ahmed Ali",
    location: "Karachi"
  },
  {
    id: 3,
    text: "Was skeptical about buying jewelry online, but Luxara exceeded my expectations. Will order again.",
    author: "Fatima Z.",
    location: "Islamabad"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white"> {/* <-- Background White Fixed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <Quote size={48} className="text-yellow-600 mx-auto mb-8 opacity-50" />
        
        {/* Heading Black */}
        <h2 className="text-3xl md:text-4xl font-serif mb-16 text-gray-900">What Our Collectors Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="space-y-6">
              
              {/* Review Text Dark Gray for readability */}
              <p className="text-gray-600 text-lg italic leading-relaxed">"{review.text}"</p>
              
              <div>
                {/* Author Name Black */}
                <h4 className="font-bold text-gray-900 font-serif tracking-wide">{review.author}</h4>
                
                {/* Location Yellow/Gold */}
                <span className="text-xs text-yellow-600 uppercase tracking-widest">{review.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;