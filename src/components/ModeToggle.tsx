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
    <div className="fixed top-4 right-6 z-[1001] flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
      <span className={`text-xs font-medium ${!isStudentMode ? "text-primary" : "text-gray-500"}`}>
        For Parents
      </span>
      <label className="relative w-12 h-6 cursor-pointer">
        <input
          type="checkbox"
          checked={isStudentMode}
          onChange={toggle}
          className="sr-only peer"
        />
        <div className="w-full h-full bg-primary rounded-full peer-checked:bg-student-primary transition-colors" />
        <div className="absolute top-[3px] left-[3px] w-[18px] h-[18px] bg-white rounded-full transition-transform peer-checked:translate-x-6" />
      </label>
      <span className={`text-xs font-medium ${isStudentMode ? "text-student-primary" : "text-gray-500"}`}>
        For Students
      </span>
    </div>
  );
}
