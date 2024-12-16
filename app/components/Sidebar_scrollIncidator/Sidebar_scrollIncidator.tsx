"use client";
import { useEffect, useState } from "react";
import style from "../Sidebar_scrollIncidator/Sidebar_scrollIndicator.module.css"; // Your CSS file

const sections = ["Home", "Projects", "About"];

export default function Sidebar_scrollIndicator() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 97;

      setScrollPosition(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="border border-black py-5 px-3 bg-foreground sticky top-0">
      <div className="scrollIndicator-track h-full w-5 relative flex justify-center after:content-[''] after:h-full after:w-[1px] after:bg-black">
        <div
          className="scrollIndicator-icon absolute inset-x-0 w-fit h-fit mx-auto rounded-full p-2 bg-red-500"
          style={{ top:`calc(${scrollPosition}%)`}} // Adjust the position based on scroll
        ></div>
      </div>
    </div>
  );
}
