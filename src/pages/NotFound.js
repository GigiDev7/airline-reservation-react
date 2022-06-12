import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-2xl">404! Oops page not found.</p>
      <Link className="mt-6 cursor-pointer border-[1px] px-3 py-2" to="/">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
