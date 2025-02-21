'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '@app/components/ui/sidebar';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex bg-gray-900 text-white min-h-screen overflow-hidden">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`flex flex-col flex-grow transition-all duration-500 ${isCollapsed ? 'ml-16' : 'ml-64'}`}>
        <div className="flex flex-col flex-grow p-6 bg-gray-900 mt-10 overflow-hidden">
          <div className="bg-[#1b2132] rounded-xl p-6 flex-grow overflow-auto no-scrollbar">
            <div className="bg-[#1b2132] rounded-lg p-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;