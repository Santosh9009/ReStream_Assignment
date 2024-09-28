import { X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const RestreamButtonWithPopover = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Handles click outside to close the popover
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCrossClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsPopoverOpen(true);
  };

  return (
    <div className="relative inline-block">
      <button className="relative inline-flex items-center px-4 py-2 text-base font-bold rounded-md transition-all duration-300 ease-in-out group hover:border-[3px] hover:border-dotted focus:outline-none">
      {/* Cross mark */}
      <span
        className="absolute -top-2 -right-2 text-black cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full p-[0.01rem] bg-white hover:bg-blue-500 hover:text-white"
        onClick={handleCrossClick}
      >
        <X height={15} width={15} />
      </span>
      {/* Button text with brighter gradient */}
      <span className="transition-all duration-300 group-hover:text-sm bg-gradient-to-t to-yellow-400 from-blue-400 text-transparent bg-clip-text text-lg">
        Restream
      </span>
    </button>

      {/* Popover Content */}
      {isPopoverOpen && (
        <div
          ref={popoverRef}
          className="absolute top-10 right-0 z-10 bg-white shadow-md rounded-md p-4 w-64"
        >
          <h1 className="text-lg font-bold mb-2">Remove Branding</h1>
          <p className="text-sm mb-4">Upgrade your plan to remove branding.</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            onClick={() => setIsPopoverOpen(false)}
          >
            Upgrade
          </button>
        </div>
      )}
    </div>
  );
};

export default RestreamButtonWithPopover;
