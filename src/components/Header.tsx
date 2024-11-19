'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && isDropdownOpen) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className=" mx-auto w-[95%] sm:w-[92%]">
      {/* Mobile Header */}
      <div className="sm:hidden flex items-center justify-between p-4 px-0 sm:w-[90%] md:w-[90%] lg:w-[90%] 2xl:w-full">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Hyperhire Logo" width={30} height={30} />
          <span className="text-2xl font-bold ml-2 text-white">Hyperhire</span>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="text-white"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu">
          {isMenuOpen ? (
            <div className="text-white text-2xl">×</div>
          ) : (
            <div className="space-y-1">
              <div className="bg-white w-8 h-0.5"></div>
              <div className="bg-white w-8 h-0.5"></div>
              <div className="bg-white w-8 h-0.5"></div>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-lg absolute left-0 top-16 w-full z-10 p-4 text-black">
          <ul className="flex flex-col gap-4">
            <li className="py-2 border-b cursor-pointer hover:underline  hover:text-blue-600 hover:bg-gray-100">
              채용
            </li>
            <li className="py-2 border-b cursor-pointer hover:underline hover:text-blue-600 hover:bg-gray-100">
              해외 개발자 원격 채용
            </li>
            <li className="py-2 border-b cursor-pointer hover:underline hover:text-blue-600 hover:bg-gray-100">
              외국인 원격 채용 (비개발 직군)
            </li>
            <li className="py-2 border-b cursor-pointer hover:underline hover:text-blue-600 hover:bg-gray-100">
              한국어 가능 외국인 채용
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Header */}
      <div className="hidden sm:flex items-center w-full p-4 ">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Image src="/logo.png" alt="Hyperhire Logo" width={30} height={30} />
            <span className="text-xl font-bold text-white">Hyperhire</span>
          </div>

          {/* Middle Section */}
          <nav className="flex-1">
            <ul className="flex justify-center space-x-8 text-white text-lg">
              <li className="relative" ref={dropdownRef as React.RefObject<HTMLLIElement>}>
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="hover:underline focus:outline-none flex items-center font-black"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                  aria-controls="dropdown-menu">
                  채용
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    id="dropdown-menu"
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg p-4 text-black z-20 w-64 rounded-lg"
                    role="menu">
                    <ul>
                      <li
                        className="py-2 border-b hover:bg-gray-100 cursor-pointer hover:text-blue-600 hover:underline"
                        role="menuitem">
                        해외 개발자 원격 채용
                      </li>
                      <li
                        className="py-2 border-b hover:bg-gray-100 cursor-pointer hover:text-blue-600 hover:underline"
                        role="menuitem">
                        외국인 원격 채용 (비개발 직군)
                      </li>
                      <li
                        className="py-2 hover:bg-gray-100 cursor-pointer hover:text-blue-600 hover:underline"
                        role="menuitem">
                        한국어 가능 외국인 채용
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="hover:underline font-black">해외 개발자 활용 서비스</li>
            </ul>
          </nav>

          {/* Right Section */}
          <div className="flex-shrink-0">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow font-black">문의하기</button>
          </div>
        </div>
      </div>
    </header>
  );
}
