'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ValentinesCard() {
  const searchParams = useSearchParams();
  const [name, setName] = useState('someone special');
  const [noClickCount, setNoClickCount] = useState(0);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const nameParam = searchParams.get('name');
    if (nameParam) {
      setName(decodeURIComponent(nameParam));
    }
  }, [searchParams]);

  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isNoHovering, setIsNoHovering] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleNoClick = () => {
    setNoClickCount(prev => prev + 1);
    moveNoButton(); // Also move on click
  };

  const handleYesClick = () => {
    setIsAccepted(true);
  };

  const moveNoButton = () => {
    // Get random position within viewport
    const maxX = window.innerWidth - 150; // button width t
    const maxY = window.innerHeight - 150; // button height
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setNoPosition({ x: newX, y: newY });
  };

  const handleNoMouseEnter = () => {
    setIsNoHovering(true);
    const timeout = setTimeout(() => {
      moveNoButton();
    }, 250);
    setHoverTimeout(timeout);
  };

  const handleNoMouseLeave = () => {
    setIsNoHovering(false);
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
  };

  // Calculate button sizes based on clicks - YES gets HUGE
  const yesButtonScale = 1 + (noClickCount * 2); // Much more aggressive growth
  const noButtonScale = Math.max(0.3, 1 - (noClickCount * 0.25));
if (isAccepted) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-red-400 to-pink-500 flex items-center justify-center p-4">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Yay! 🎉
        </h1>
        <p className="text-2xl text-white drop-shadow-md">
          I knew you'd say yes! ❤️
        </p>
        <p className="text-xl text-white/90 mt-4">
          See you on Valentine's Day, {name}! 💝
        </p>
        <div className="mt-8">
          <img 
            src="https://media1.tenor.com/m/VcR7PqtHqkkAAAAC/besos.gif" 
            alt="kiss kiss" 
            className="w-64 h-64 object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-red-300 flex items-center justify-center p-4 overflow-hidden relative">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center relative z-10">
        {/* Decorative hearts */}
        <div className="absolute -top-6 -left-6 text-6xl animate-float">💖</div>
        <div className="absolute -top-6 -right-6 text-6xl animate-float-delayed">💝</div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hey {name}! 💌
        </h1>
        
        {/* Dynamic GIF based on rejection count */}
        <div className="my-8 flex justify-center">
          {noClickCount === 0 && (
            <img 
              src="https://media1.tenor.com/m/bSxMql9TY7cAAAAd/cute2.gif" 
              alt="cute bears" 
              className="w-48 h-48 object-contain"
            />
          )}
          {noClickCount === 1 && (
            <img 
              src="https://media1.tenor.com/m/VyoROaPcy_QAAAAd/super-sad-nah-ah.gif" 
              alt="sad bear" 
              className="w-48 h-48 object-contain"
            />
          )}
          {noClickCount === 2 && (
            <img 
              src="https://media1.tenor.com/m/UAajlu3y2BUAAAAC/bear-love.gif" 
              alt="crying bear" 
              className="w-48 h-48 object-contain"
            />
          )}
          {noClickCount === 3 && (
            <img 
              src="https://media1.tenor.com/m/ENVMG9PU3JoAAAAd/bear-blow-hearts.gif" 
              alt="pleading bear" 
              className="w-48 h-48 object-contain"
            />
          )}
          {noClickCount === 4 && (
            <img 
              src="https://media1.tenor.com/m/QXaDFB7iFO0AAAAd/poke-milk-and-mocha.gif" 
              alt="heartbroken bear" 
              className="w-48 h-48 object-contain"
            />
          )}
          {noClickCount >= 5 && (
            <img 
              src="https://media1.tenor.com/m/dG9o8FWpeYsAAAAC/kiss-attack.gif" 
              alt="devastated bear" 
              className="w-48 h-48 object-contain"
            />
          )}
        </div>
        
        <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
          Will you be my Valentine?
        </p>

        {noClickCount > 0 && (
  <div className="bg-white rounded-2xl px-6 py-3 mb-4 shadow-md relative z-[10001] inline-block">
    <p className="text-lg text-pink-600 animate-fade-in">
      {noClickCount === 1 && "Are you sure? 🥺"}
      {noClickCount === 2 && "Please? 🥹"}
      {noClickCount === 3 && "Okay but pretty please? 💕"}
      {noClickCount === 4 && "It will just be this one time til the day we die"}
      {noClickCount === 5 && "You dont get a choice... 😊"}
      {noClickCount >= 6 && "I saidddddd, you dont get a choice 😇🔪"}
    </p>
  </div>
)}
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8 relative">
          {/* Yes Button - BREAKS OUT and gets MASSIVE */}
          <button
            onClick={handleYesClick}
            style={{
              transition: 'transform 0.3s ease-out',
              zIndex: 9999, // Always on top
              // position: yesButtonScale > 2 ? 'fixed' : 'relative', // Break free!
              left: yesButtonScale > 2 ? '50%' : 'auto',
              top: yesButtonScale > 2 ? '50%' : 'auto',
              transform: yesButtonScale > 2 
                ? `translate(-50%, -50%) scale(${yesButtonScale})` 
                : `scale(${yesButtonScale})`,
            }}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-pink-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Yes! 💖
          </button>
          
          {/* No Button - RUNS AWAY on hover */}
          {noClickCount < 6 && (
            <button
              onClick={handleNoClick}
              onMouseEnter={handleNoMouseEnter}
              onMouseLeave={handleNoMouseLeave}
              style={{
                transform: `scale(${noButtonScale})`,
                transition: 'all 0.3s ease-out',
                position: noPosition.x !== 0 || noPosition.y !== 0 ? 'fixed' : 'relative',
                left: noPosition.x !== 0 ? `${noPosition.x}px` : 'auto',
                top: noPosition.y !== 0 ? `${noPosition.y}px` : 'auto',
                zIndex: 10000,
              }}
              className="bg-gray-300 text-gray-700 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-400 transition-all shadow-md active:scale-95"
            >
              No 😔
            </button>
          )}
        </div>

        {noClickCount >= 6 && (
          <p className="text-sm text-gray-500 mt-4 italic animate-fade-in">
            You are trapped with me forever 😊
          </p>
        )}
      </div>
    </div>
  );
}