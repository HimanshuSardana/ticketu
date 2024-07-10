import React from "react";
function Hero() {
  return (
    <div className="hero h-2/3 w-screen flex items-center justify-center px-20 mx-10">
      <div className="flex-1 flex flex-col gap-10 ">
        <h3 className="text-7xl font-black">
          Never miss another{" "}
          <span className="text-teal-500 underline decoration-wavy decoration-teal-800">
            college event
          </span>
        </h3>
        <p className="text-zinc-600 font-bold text-lg w-2/3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
          voluptatibus quo distinctio iste eligendi officiis facilis? Tenetur
          possimus autem nesciunt.
        </p>
        <button className="w-1/5 text-zinc-900 text-md font-bold bg-teal-500 py-2 px-4 rounded-md">
          Get Started
        </button>
      </div>
      <div className="right flex-1 flex items-center justify-center">
        <h3>lmao</h3>
      </div>
    </div>
  );
}

export default Hero;
