import React, { useState } from 'react';

const Grid = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '←') {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === '=') {
      try {
        setInput(eval(input).toString()); // ⚠️ eval for demo only
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+',
    'C','←'
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 p-4">
      <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-sm border border-white/40">
        <input
          type="text"
          className="w-full mb-6 text-3xl font-semibold p-4 rounded-xl bg-white/60 text-right shadow-inner outline-none"
          value={input}
          readOnly
        />

        <div className="grid grid-cols-4 gap-4">
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => handleClick(btn)}
              className={`p-4 rounded-xl text-4xl font-bold transition transform active:scale-95 ${
                btn === '='
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : btn === 'C'
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : btn === '←'
                  ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                  : 'bg-white/80 text-gray-900 hover:bg-white'
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
