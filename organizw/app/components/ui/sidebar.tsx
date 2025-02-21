"use client";

import React from "react";
import { Plane, MapPin, Calendar, Bell, LogOut, Sun, Moon, Briefcase, Train } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const items = [
  { title: "Destinations", url: "#", icon: MapPin },
  { title: "My Trips", url: "#", icon: Briefcase },
  { title: "My Bookings", url: "#", icon: Train },
  { title: "Travel Calendar", url: "#", icon: Calendar },
  { title: "Notifications", url: "#", icon: Bell },
  { title: "Logout", url: "#", icon: LogOut },
];

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <aside
      className={`bg-background text-foreground h-screen flex flex-col transition-all duration-500 ease-in-out ${
        isCollapsed ? "w-16" : "w-64"
      } fixed left-0 top-0 z-20`}
    >
      <div className="flex flex-col flex-grow">
        {/* Dynamic Logo */}
        <div className="p-6 flex items-center">
          <Image
            src={isDarkMode ? "/travel-dark.png" : "/travel-light.png"}
            alt="Travel Logo"
            width={100}
            height={100}
            className="mr-4"
          />
          <h1
            className={`text-2xl font-bold transition-all duration-500 ease-in-out ${
              isCollapsed ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            TravelMate
          </h1>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col flex-grow">
          {items.map((item) => (
            <a
              href={item.url}
              key={item.title}
              className="flex items-center p-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out"
            >
              {React.createElement(item.icon, { className: "mr-4" })}
              <span className={`${isCollapsed ? "hidden" : "block"}`}>{item.title}</span>
            </a>
          ))}
        </nav>

        {/* Theme Toggle Button */}
        <div className="p-4 mb-20">
          <button
            onClick={toggleTheme}
            className="text-foreground bg-muted p-2 rounded-md focus:outline-none transition-all duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {isDarkMode ? <Sun className="text-xl" /> : <Moon className="text-xl" />}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
