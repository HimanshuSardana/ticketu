import React from "react";
import AppBar from "../components/AppBar";
import Breadcrumbs from "../components/Breadcrumbs";
import CreateEvent from "../components/CreateEvent";

function Dashboard() {
  return (
    <div className="flex flex-row h-screen w-screen bg-zinc-900">
      <AppBar />
      <div className="flex flex-col w-full">
        <Breadcrumbs />
        <CreateEvent />
      </div>
    </div>
  );
}

export default Dashboard;
