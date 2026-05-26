import { useEffect, useState } from "react";
import Button from "./Button";

const THEME_KEY = "tvk-theme";
const sizeVariants = {
  sm: {
    wrapper: "w-14 h-7",
    thumb: "w-4 h-4",
    on: "left-[34px]",
    off: "left-[4px]",
  },

  md: {
    wrapper: "w-20 h-10",
    thumb: "w-6 h-6",
    on: "left-[50px]",
    off: "left-[6px]",
  },

  lg: {
    wrapper: "w-24 h-12",
    thumb: "w-7 h-7",
    on: "left-[62px]",
    off: "left-[8px]",
  },
};

export default function ThemeToggle({ size = "md" }) {
  const [theme, setTheme] = useState("govt");

  const currentSize = sizeVariants[size];

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) || "govt";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "tvk" ? "govt" : "tvk";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Theme Toggle"
      className={`
    relative rounded-full
    border border-border bg-surface
    transition-all duration-300 ease-in-out
    cursor-pointer overflow-hidden
    ${currentSize.wrapper}
  `}
    >
      {/* Thumb */}
      <div
        className={`
      absolute top-1/2 -translate-y-1/2
      rounded-full bg-primary shadow-md
      transition-all duration-300 ease-in-out
      ${currentSize.thumb}
      ${theme === "govt" ? currentSize.on : currentSize.off}
    `}
      />
    </button>
  );
}
