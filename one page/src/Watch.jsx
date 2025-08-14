import React, { useEffect, useState } from 'react';

const Watch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative w-72 h-72 border-4 border-yellow-400 rounded-full bg-white shadow-lg">
        
        {/* Numbers on Clock */}
        {[...Array(12)].map((_, i) => {
          const angle = ((i + 1) * 30) * (Math.PI / 180); // Convert degrees to radians
          const radius = 120; // Distance from center
          const x = radius * Math.sin(angle);
          const y = -radius * Math.cos(angle);
          return (
            <div
              key={i}
              className="absolute text-black font-bold"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {i + 1}
            </div>
          );
        })}

        {/* Center Point */}
        <div className="absolute w-4 h-4 bg-black rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50" />

        {/* Hour Hand */}
        <div
          className="absolute w-2 h-20 bg-black origin-bottom top-[28px] left-1/2 transform -translate-x-1/2"
          style={{
            transform: `rotate(${hourDeg}deg) translateX(-50%)`,
            transformOrigin: 'bottom',
          }}
        />

        {/* Minute Hand */}
        <div
          className="absolute w-1.5 h-28 bg-blue-700 origin-bottom top-[16px] left-1/2 transform -translate-x-1/2"
          style={{
            transform: `rotate(${minuteDeg}deg) translateX(-50%)`,
            transformOrigin: 'bottom',
          }}
        />

        {/* Second Hand */}
        <div
          className="absolute w-1 h-32 bg-red-600 origin-bottom top-[4px] left-1/2 transform -translate-x-1/2"
          style={{
            transform: `rotate(${secondDeg}deg) translateX(-50%)`,
            transformOrigin: 'bottom',
          }}
        />
      </div>
    </div>
  );
};

export default Watch;
