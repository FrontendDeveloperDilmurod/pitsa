import React from "react";
import { Link } from "react-router-dom";

function Button({ children, to, disabled, type, onClick }) {
  const base = "  space-x-4 p-4 uppercase font-semibold rounded-full   focus:ring-2 ring-offset-2   focus:outline-none  transition-colors transition-text  duration-300 disabled:bg-stone-400 disabled:cursor-not-allowed  text-sm box-border";

  const types = {
    primary: `${base} bg-yellow-400 hover:bg-yellow-300 ring-yellow-400`,
    secondary: `${base} bg-stone-50 border-2 border-stone-300 hover:bg-stone-300  ring-stone-300 text-stone-400 hover:text-stone-800`,
    small: `${base} py-2 px-4 text-xs bg-yellow-400 hover:bg-yellow-300 ring-yellow-400 text-stone-800`,
    rounded: `${base} rounded-full w-8 h-8 flex items-center justify-center p-3 text-lg font-semibold bg-yellow-400 hover:bg-yellow-300 ring-yellow-400`,
  };

  if (to) {
    return (
      <Link to={to} className={types[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button disabled={disabled} onClick={onClick} className={types[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={types[type]}>
      {children}
    </button>
  );
}

export default Button;
