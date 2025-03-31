import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileSymbolPalette from '@/components/chart/MobileSymbolPalette';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <Sidebar />
          <main className="relative py-6 lg:py-8">
            {children}
          </main>
        </div>
      </div>
      {/* TODO: Add Footer */}
      <MobileSymbolPalette />
    </div>
  );
};

export default MainLayout;