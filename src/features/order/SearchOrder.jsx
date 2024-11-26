import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [quarey, setQuarey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${quarey}`);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search order #"
        value={quarey}
        onChange={(e) => setQuarey(e.target.value)}
        className=" 
        rounded-full placeholder:text-stone-400 font-semibold outline-none px-4 py-2 
       bg-yellow-100  focus:ring-4 ring-yellow-300  w-56  focus:w-64 transition-all duration-300
      "
      />
    </form>
  );
}

export default SearchOrder;
