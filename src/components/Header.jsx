import React from "react";
import { Link } from "react-router-dom";
import UserName from "../features/user/UserName";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className=" flex justify-between items-center py-4 bg-yellow-400  uppercase  px-6">
      <Link to={"/"} className=" text-lg  tracking-[3px] font-medium">
        Fast Pizz Co.
      </Link>
      <SearchOrder />
      <UserName />
      {/*       <Link to={"/menu"}>Go to menu</Link>
       */}
    </header>
  );
}

export default Header;
