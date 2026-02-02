"use client";

import { useState, useEffect } from "react";

export default function ModeToggle() {
  const [isStudentMode, setIsStudentMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("siteMode");
    if (saved === "student") {
      setIsStudentMode(true);
      document.body.classList.add("student-mode");
    }
  }, []);

  const toggle = () => {
    const newMode = !isStudentMode;
    setIsStudentMode(newMode);
    localStorage.setItem("siteMode", newMode ? "student" : "parent");
    document.body.classList.toggle("student-mode", newMode);
  };

  return (
    <div className="fixed top-20 right-6 z-[999] flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl">
      <span className={`text-xs font-medium transition-colors ${!isStudentMode ? "text-primary dark:text-blue-400" : "text-gray-500 dark:text-gray-400"}`}>
        For Parents
      </span>
      <label className="relative w-12 h-6 cursor-pointer">
        <input
          type="checkbox"
          checked={isStudentMode}
          onChange={toggle}
          className="sr-only peer"
        />
        <div className="w-full h-full bg-primary dark:bg-blue-600 rounded-full peer-checked:bg-student-primary dark:peer-checked:bg-purple-600 transition-colors" />
        <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] bg-white rounded-full transition-transform peer-checked:translate-x-6 shadow-sm" />
      </label>
      <span className={`text-xs font-medium transition-colors ${isStudentMode ? "text-student-primary dark:text-purple-400" : "text-gray-500 dark:text-gray-400"}`}>
        For Students
      </span>
    </div>
  );
}
