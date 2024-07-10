import React from "react";
import { useState } from "react";
import { NotebookPen, NotebookIcon } from "lucide-react";

function AppBar() {
  const menu = {
    events: [
      {
        name: "Create Events",
        stateName: "create-event",
        icon: <NotebookPen />,
      },
    ],
  };
  const [active, setActive] = useState("create-event");
  return (
    <div className="h-screen w-1/4 bg-zinc-800 py-10 flex flex-col">
      <div className="brand flex items-center ml-10">
        <h3 className="text-3xl font-black text-zinc-400">ticket</h3>
        <h3 className="text-3xl font-black text-teal-500">u</h3>
      </div>
      <div className="menu flex flex-col mt-10">
        <h3 className="text-zinc-500 uppercase font-black text-md ml-10">
          Events
        </h3>
        <ul className="flex flex-col mt-3">
          <li
            onClick={() => setActive("create-event")}
            className={
              active == "create-event"
                ? "cursor-pointer bg-teal-800 cursor-pointer px-10 text-teal-400 py-4 font-black flex flex-row gap-3 items-center"
                : "cursor-pointer py-4 font-bold px-10 flex flex-row gap-3 items-center"
            }
          >
            <NotebookPen />
            Create Event
          </li>
          <li
            onClick={() => setActive("view-event")}
            className={
              active == "view-event"
                ? "cursor-pointer bg-teal-800 cursor-pointer px-10 text-teal-400 py-4 font-black flex flex-row gap-3 items-center"
                : "cursor-pointer bg-zinc-800 py-4 font-bold px-10 flex flex-row gap-3 items-center"
            }
          >
            <NotebookIcon />
            View Existing Events
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppBar;
