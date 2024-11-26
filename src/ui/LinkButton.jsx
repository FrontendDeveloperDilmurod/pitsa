import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ children, to }) {
  return (
    <Link to={to} className=" focus:outline-none text-sky-600 hover:text-sky-500 hover:underline underline-offset-1  font-semibold tracking-wide space-x-4 ">
      {children}
    </Link>
  );
}

export default LinkButton;
