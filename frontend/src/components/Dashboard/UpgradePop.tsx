import React, { useEffect, useRef } from "react";

interface CustomPopoverProps {
  children: React.ReactNode;
  onClose: () => void;
}

const CustomPopover: React.FC<CustomPopoverProps> = ({ onClose }) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={popoverRef}
      className="absolute top-10 right-0 z-10 bg-white shadow-md rounded-md p-4 w-64"
    >
      <CustomPopover onClose={onClose}>
        <h1 className="text-lg font-bold mb-2">Remove Branding</h1>
        <p className="text-sm mb-4">Upgrade your plan to remove branding.</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          onClick={onClose}
        >
          Upgrade
        </button>
      </CustomPopover>
    </div>
  );
};

export default CustomPopover;
