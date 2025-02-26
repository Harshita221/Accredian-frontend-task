import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md relative">
      <div className="flex items-center space-x-2 gap-3">
        <div className="flex flex-col items-center">
          <span className="text-blue-600 font-bold text-xl">accredian</span>
          <span className="text-gray-500 text-xs">credentials that matter</span>
        </div>
        <div className="hidden md:flex items-center text-sm">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Courses ▼
          </button>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center items-center space-x-4 font-normal text-base text-gray-800">
        <a href="#" className="hover:text-black">Refer & Earn</a>
        <a href="#" className="hover:text-black">Resources</a>
        <a href="#" className="hover:text-black">About Us</a>
        <button className="bg-gray-200 px-4 py-2 rounded-md">Login</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Try for free</button>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-gray-800 focus:outline-none text-4xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 md:hidden z-50 w-48 border-2">
          <a href="#" className="hover:text-black">Refer & Earn</a>
          <a href="#" className="hover:text-black">Resources</a>
          <a href="#" className="hover:text-black">About Us</a>
          <button className="bg-gray-200 px-4 py-2 rounded-md">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Try for free</button>
        </div>
      )}
    </header>
  );
};

export default Header;
