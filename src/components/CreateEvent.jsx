import React from "react";
import Input from "./Input";

function CreateEvent() {
  return (
    <div className="px-10 py-10 border border-3 rounded-md border-zinc-700 w-1/2 mx-20 my-20">
      <div className="flex flex-col gap-5 flex-grow">
        <h3 className="font-bold text-zinc-300 text-3xl">Create Event</h3>
        <div className="form flex flex-col gap-3 flex-grow w-full">
          <div className="row flex flex-row gap-3">
            <div className="field flex-1">
              <Input type={"text"} label="Event Name" />
            </div>
            <div className="field flex-2">
              <Input type={"number"} label="Number of Tickets" />
            </div>
          </div>
          <div className="row flex gap-3">
            <Input type={"date"} label="Date" />
            <Input type={"Time"} label="Time" />
          </div>
          <div className="row mt-3">
            <button className="px-5 py-3 font-bold text-md bg-teal-500 text-zinc-700">
              Create Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
