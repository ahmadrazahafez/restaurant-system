import React from 'react';

const Footer = () => {
  return (
    <div className='w-full bg-pink-100 py-10 px-4'>
      <h1 className='text-center text-3xl font-bold text-gray-800 font-serif mb-6'>
        🌸 Follow Our Page 🌸
      </h1>

      <div className='flex justify-center gap-6 flex-wrap'>
        <a
          href='https://www.tiktok.com'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-black text-white px-6 py-2 rounded-full font-medium transition-transform transform hover:scale-105 hover:bg-gray-800'
        >
          🎵 TikTok
        </a>

        <a
          href='https://www.instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gradient-to-r from-pink-500 to-purple-400 text-white px-6 py-2 rounded-full font-medium transition-transform transform hover:scale-105'
        >
          📸 Instagram
        </a>

        <a
          href='https://www.facebook.com'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-transform transform hover:scale-105'
        >
          👍 Facebook
        </a>
      </div>

      <p className='text-center text-sm text-gray-500 mt-6'>
        © 2025 Resto System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

