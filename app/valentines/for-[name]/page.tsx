'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function ValentinesCard() {
  const params = useParams();
  const rawName = params?.name as string | undefined;
  const name = rawName 
    ? decodeURIComponent(rawName).replace(/-/g, ' ')
    : 'you';
  
  const [noClickCount, setNoClickCount] = useState(0);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleNoClick = () => {
    setNoClickCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    setIsAccepted(true);
  };

  // Calculate button sizes based on clicks
  const yesButtonScale = 1 + (noClickCount * 0.3);
  const noButtonScale = Math.max(0.3, 1 - (noClickCount * 0.15));

  if (isAccepted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-red-400 to-pink-500 flex items-center justify-center p-4">
        <div className="text-center animate-fade-in">
          <div className="text-8xl mb-6 animate-bounce">💕</div>
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Yay! 🎉
          </h1>
          <p className="text-2xl text-white drop-shadow-md">
            I knew you'd say yes! ❤️
          </p>
          <p className="text-xl text-white/90 mt-4">
            See you on Valentine's Day, {name}! 💝
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-red-300 flex items-center justify-center p-4 overflow-hidden">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center relative">
        {/* Decorative hearts */}
        <div className="absolute -top-6 -left-6 text-6xl animate-float">💖</div>
        <div className="absolute -top-6 -right-6 text-6xl animate-float-delayed">💝</div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hey {name}! 💌
        </h1>
        
        <div className="text-7xl my-8 animate-pulse">
          🌹
        </div>
        
        <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
          Will you be my Valentine?
        </p>

        {noClickCount > 0 && (
          <p className="text-lg text-pink-600 mb-4 animate-fade-in">
            {noClickCount === 1 && "Are you sure? 🥺"}
            {noClickCount === 2 && "Please? 🥹"}
            {noClickCount === 3 && "Okay but pretty please? 💕"}
            {noClickCount === 4 && "I thought you loved me 😢"}
            {noClickCount >= 5 && "You dont have a choice 😊"}
          </p>
        )}
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8">
          {/* Yes Button - grows with each "No" click */}
          <button
            onClick={handleYesClick}
            style={{
              transform: `scale(${yesButtonScale})`,
              transition: 'transform 0.3s ease-out'
            }}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-pink-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Yes! 💖
          </button>
          
          {/* No Button - shrinks with each click */}
          {noClickCount < 6 && (
            <button
              onClick={handleNoClick}
              style={{
                transform: `scale(${noButtonScale})`,
                transition: 'transform 0.3s ease-out'
              }}
              className="bg-gray-300 text-gray-700 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-400 transition-all shadow-md active:scale-95"
            >
              No 😔
            </button>
          )}
        </div>

        {noClickCount >= 6 && (
          <p className="text-sm text-gray-500 mt-4 italic animate-fade-in">
            The "No" button has retired. There's only one choice now! 😉
          </p>
        )}
      </div>
    </div>
  );
}
