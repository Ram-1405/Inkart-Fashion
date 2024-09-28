import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8 text-center md:text-left">
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-2xl hover:text-gray-400" />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        © 2024 Inkart Fashion. All Rights Reserved.
      </div>
    </footer>
  );
}
