import React from "react";
import CardComponent from "../components/CardComponent";

function Dashboard() {
  return (
    <div className="m-5">
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
      <div className="flex flex-wrap gap-3">
        <CardComponent />
      </div>
    </div>
  );
}

export default Dashboard;
