'use client';

import { SetStateAction, useState } from 'react';

// The 'Link' and 'Image' components from Next.js have been replaced
// with standard HTML tags to ensure the code can run in this environment.

export default function TopBar() {
  // Use state to manage the value of the search input field.
  const [searchTerm, setSearchTerm] = useState('');

  // Handle changes to the search input and update the state.
  const handleSearchChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle the search submission (e.g., when the user presses Enter).
  // For now, it just logs the search term to the console.
  const handleSearchSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Prevents the form from reloading the page
    console.log('Searching for:', searchTerm);
    // You would add your actual search logic here,
    // like filtering an array or making an API call.
  };

  return (
    <aside className="w-fill h-18 bg-[#a1bfa0] text-slate-900 border-r border-grey-900 flex items-center justify-between px-6 border-b">
      <div className="flex-shrink-0 border-b border-grey-900 py-2">
        {/* 'Link' was replaced with a standard 'a' tag for compatibility */}
        <a href="/" className="group inline-flex items-center gap-2">
          {/*
            <span className="inline-block h-3 w-3 rounded-full bg-[#f0b953]" />
            <span className="inline-block h-3 w-3 rounded-full bg-[#86c1f0]" />
            <span className="inline-block h-3 w-3 rounded-full bg-[#7580ae]" />
          */}
          <span className="ml-1 text-xl font-semibold group-hover:text-[#454545] transition">
            {/* The space for your logo or title */}
          </span>
        </a>
      </div>

      {/* Search bar container */}
      <div className="flex-1 max-w-lg mx-6">
        <form onSubmit={handleSearchSubmit} className="relative">
          {/* Search icon (SVG) */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          {/* Search input field */}
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#86c1f0] focus:ring-opacity-50 transition-all duration-200"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>
      </div>
    </aside>
  );
}
