import React from "react";

function Navbar() {
  return (
    <div className="w-screen h-[100px] ">
      <div className="flex justify-between items-center mx-10 px-20 py-10">
        <div className="brand flex items-center">
          <h3 className="text-3xl font-black text-zinc-400">ticket</h3>
          <h3 className="text-3xl font-black text-teal-500">u</h3>
        </div>

        <div className="login">
          <button className="text-lg font-bold text-teal-500 hover:border-0 hover:outline-none">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
