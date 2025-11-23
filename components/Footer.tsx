import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-royal text-2xl text-stone-600 mb-4">|| Ram Krishna Hari ||</h2>
        <p className="font-heading text-stone-500 text-sm uppercase tracking-widest mb-8">
            Designed with Pride • Shivkalin Theme
        </p>
        <div className="text-stone-700 text-xs">
          &copy; 2024 Rajveer & Priyanka. All rights reserved.
        </div>
      </div>
    </footer>
  );
};