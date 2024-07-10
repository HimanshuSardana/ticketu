import React from "react";
import { Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Navbar() {
  return (
    <div className="w-screen h-[100px] ">
      <div className="flex justify-between items-center mx-10 px-20 py-10">
        <div className="brand flex items-center">
          <h3 className="text-3xl font-black text-zinc-400">ticket</h3>
          <h3 className="text-3xl font-black text-teal-500">u</h3>
        </div>

        <div className="login">
          <a
            href="/login"
            className="hover:text-teal-500 bg-zinc-900 flex flex-row gap-3 items-center text-lg font-bold text-teal-500 hover:border-0 hover:outline-none"
          >
            Sign In
            <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
