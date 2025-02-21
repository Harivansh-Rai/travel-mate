import { ReactNode } from "react";

export default function TrainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors">
      <h2 className="text-3xl font-bold mb-6">Train Information</h2>
      {children}
    </div>
  );
}
