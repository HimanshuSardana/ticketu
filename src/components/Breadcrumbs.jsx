import React from "react";
import { ChevronRight } from "lucide-react";

function Breadcrumbs() {
  return (
    <div className="w-full">
      <div className="w-full flex-2 flex-grow px-10 py-5 h-auto flex flex-row gap-3 items-center bg-zinc-800">
        <span className="text-zinc-500 text-lg font-bold">Dashboard</span>
        <ChevronRight className="text-zinc-500" />
        <span className="text-zinc-300 font-bold text-lg">Create Event</span>
      </div>
    </div>
  );
}

export default Breadcrumbs;
