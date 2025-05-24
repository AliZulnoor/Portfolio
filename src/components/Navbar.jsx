import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-gray-900 gap-4 sm:gap-0">
      <h1 className="text-2xl font-bold">Silkfy</h1>
      <ul className="flex flex-col sm:flex-row gap-4 text-sm text-center">
        <li className="hover:text-purple-400 cursor-pointer">About</li>
        <li className="hover:text-purple-400 cursor-pointer">Projects</li>
        <li className="hover:text-purple-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;