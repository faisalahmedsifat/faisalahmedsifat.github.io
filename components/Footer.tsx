import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 text-center">
      <p>&copy; {new Date().getFullYear()} Faisal Ahmed Sifat. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="#" className="hover:underline">GitHub</a>
        <a href="#" className="hover:underline">LinkedIn</a>
        <a href="#" className="hover:underline">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
