import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const RSVP: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  return (
    <section id="rsvp" className="py-24 bg-stone-900">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-royal text-3xl md:text-4xl text-amber-500 mb-4">RSVP</h2>
          <p className="text-stone-400">Please confirm your presence</p>
        </div>

        {isSubmitted ? (
          <div className="text-center p-8 bg-stone-950 border border-amber-700 rounded-lg">
            <h3 className="font-royal text-2xl text-amber-500 mb-2">Dhanyavad!</h3>
            <p className="text-stone-300">We eagerly await your presence.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-stone-950 p-8 rounded-lg border border-stone-800 shadow-xl">
            <div>
              <label className="block font-heading text-stone-400 text-xs uppercase tracking-widest mb-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-stone-900 border border-stone-700 rounded px-4 py-3 text-amber-50 focus:outline-none focus:border-amber-600 transition-colors font-body"
                placeholder="Shri. Firstname Lastname"
              />
            </div>

            <div>
              <label className="block font-heading text-stone-400 text-xs uppercase tracking-widest mb-2">Number of Guests</label>
              <select className="w-full bg-stone-900 border border-stone-700 rounded px-4 py-3 text-amber-50 focus:outline-none focus:border-amber-600 transition-colors font-body">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>

            <div>
              <label className="block font-heading text-stone-400 text-xs uppercase tracking-widest mb-2">Attending?</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="attending" className="accent-amber-600" defaultChecked />
                  <span className="text-stone-300">Ho (Yes)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="attending" className="accent-amber-600" />
                  <span className="text-stone-300">Nahi (No)</span>
                </label>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-600 text-white font-heading tracking-widest py-3 px-6 rounded transition-all flex items-center justify-center gap-2 mt-4"
            >
              <span>Confirm</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};