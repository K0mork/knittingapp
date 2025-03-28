import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            {/* TODO: Add Logo */}
            <span className="hidden font-bold sm:inline-block">
              Knitting Chart Maker
            </span>
          </a>
        </div>
        {/* TODO: Add Navigation and User Menu */}
      </div>
    </header>
  );
};

export default Header;