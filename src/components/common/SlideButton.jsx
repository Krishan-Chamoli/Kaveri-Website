import React, { useRef, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const SlideButton = ({ 
  children, 
  onClick, 
  className = "", 
  showArrow = true,
  hoverColor = "#BB2929" 
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.setProperty('--hover-bg-color', hoverColor);
    }
  }, [hoverColor]);

  return (
    <>
      <style>{`
        [data-slide-button]::before {
          background-color: var(--hover-bg-color, ${hoverColor});
        }
      `}</style>
      <button
        ref={buttonRef}
        data-slide-button
        onClick={onClick}
        className={`group relative flex gap-2 justify-center items-center w-fit bg-white text-black border border-black px-10 py-3 text-sm tracking-wider uppercase font-KuraleRegular overflow-hidden cursor-pointer transition-colors duration-300 before:absolute before:inset-0 before:translate-x-[-100%] before:transition-transform before:duration-300 before:ease-in-out hover:before:translate-x-0 ${className}`}
      >
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
          {children}
        </span>
        {showArrow && (
          <FaArrowUpLong className="relative z-10 rotate-45 origin-center translate-y-[2px] group-hover:text-white transition-colors duration-300" />
        )}
      </button>
    </>
  );
};

export default SlideButton;

