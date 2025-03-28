import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block md:w-64 border-r">
      <div className="relative overflow-hidden h-full py-6 pr-6 lg:py-8">
        {/* TODO: Implement Symbol Palette */}
        <p className="p-4 text-center text-muted-foreground">記号パレット</p>
      </div>
    </aside>
  );
};

export default Sidebar;