import React from 'react';

export default function Card() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
        alt="product"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Apple Watch Series 7 GPS, Aluminium Case
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Sleek and modern smartwatch with premium build quality and advanced features.
        </p>

        <div className="flex items-center mb-4">
          {Array(4).fill().map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 22 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.924 7.625a1.523...Z" />
            </svg>
          ))}
          <svg
            className="w-5 h-5 text-gray-300 dark:text-gray-600"
            fill="currentColor"
            viewBox="0 0 22 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.924 7.625a1.523...Z" />
          </svg>
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">4.0</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">$599</span>
          <a
            href="/"
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
