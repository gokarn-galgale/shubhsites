import React from 'react';
import { Gift } from 'lucide-react';

export const DigitalAher: React.FC = () => {
  return (
    <section className="py-24 bg-stone-950 relative border-y border-stone-800">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="w-16 h-16 mx-auto bg-amber-900/20 rounded-full flex items-center justify-center mb-6 border border-amber-700/50">
          <Gift className="w-8 h-8 text-amber-500" />
        </div>
        
        <h2 className="font-royal text-3xl md:text-4xl text-amber-500 mb-6">Digital Aher</h2>
        <p className="font-body text-lg text-stone-300 mb-12 max-w-xl mx-auto">
          Your blessings are the greatest gift. However, if you wish to honor us with a token of love, you may use the digital medium below.
        </p>

        <div className="bg-stone-900 p-8 rounded-lg inline-block border-4 border-amber-700/30 shadow-2xl relative">
            {/* Corner ornaments */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-amber-600"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-amber-600"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-amber-600"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-amber-600"></div>

            {/* QR Code Placeholder */}
            <div className="w-48 h-48 bg-white p-2 mx-auto mb-4">
               <img 
                 src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ExampleUPIAddress@okhdfcbank" 
                 alt="Payment QR"
                 className="w-full h-full object-contain"
               />
            </div>
            
            <p className="font-heading text-amber-500 text-sm tracking-widest">Scan to Pay via UPI</p>
            <p className="text-stone-500 text-xs mt-2">GPay / PhonePe / Paytm</p>
        </div>
      </div>
    </section>
  );
};