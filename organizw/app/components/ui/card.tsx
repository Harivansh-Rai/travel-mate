import { ReactNode } from 'react';

const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
    return (
      <div
        className={`rounded-2xl shadow-lg p-4 bg-white dark:bg-gray-800 transition-colors ${className}`}
      >
        {children}
      </div>
    );
  };
  
  export default Card;
  