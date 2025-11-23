import React from 'react';
import { Heart, Gem, Sparkles } from 'lucide-react';
import { TimelineEvent } from '../types';

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "प्रथम भेट",
    date: "१५ जून २०२३",
    description: "विठ्ठल चरणी, एका शुभ क्षणी आमची पहिली भेट झाली. चहाच्या घोटासोबत सुरू झालेला हा संवाद, आता आयुष्यभराच्या सोबतीत बदलला आहे.",
    icon: 'meet'
  },
  {
    id: 2,
    title: "साखरपुडा",
    date: "१० सप्टेंबर २०२३",
    description: "सह्याद्रीच्या साक्षीनं आणि थोरा-मोठ्यांच्या आशीर्वादाने, आम्ही एकमेकांना आयुष्यभर साथ देण्याचे वचन दिले.",
    icon: 'ring'
  },
  {
    id: 3,
    title: "शुभ विवाह",
    date: "२४ डिसेंबर २०२४",
    description: "मंगल सनई-चौघड्यांच्या सुरात, अग्निसाक्षीने आम्ही सात जन्मांच्या गाठी बांधणार आहोत.",
    icon: 'wedding'
  }
];

export const PremKahani: React.FC = () => {
  return (
    <section className="py-24 bg-stone-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-amber-500 mb-4">प्रेम कहाणी</h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-stone-800"></div>

          <div className="space-y-12 md:space-y-24">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="flex-1 w-full md:w-1/2 p-6 text-center md:text-left z-10">
                  <div className={`bg-stone-900 p-6 border border-stone-700 rounded-lg shadow-xl hover:border-amber-700 transition-colors duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="font-royal text-2xl md:text-3xl text-amber-500 mb-2">{event.title}</h3>
                    <span className="inline-block px-3 py-1 bg-stone-800 text-stone-400 text-base font-heading rounded border border-stone-700 mb-4 tracking-wider">
                      {event.date}
                    </span>
                    <p className="font-body text-lg text-stone-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Icon Center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-stone-950 border-4 border-amber-600 rounded-full flex items-center justify-center z-20 shadow-[0_0_20px_rgba(217,119,6,0.4)]">
                   {event.icon === 'meet' && <Heart className="w-5 h-5 md:w-8 md:h-8 text-amber-500 fill-current" />}
                   {event.icon === 'ring' && <Gem className="w-5 h-5 md:w-8 md:h-8 text-amber-500" />}
                   {event.icon === 'wedding' && <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-amber-500" />}
                </div>

                {/* Empty Side for spacing */}
                <div className="hidden md:block flex-1 w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};