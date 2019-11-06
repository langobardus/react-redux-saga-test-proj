import React from 'react';
import DashboardBtn from './DashboardBtn';

function Dashboard() {
  let headerStyle={
    backgroundColor: "#000",
    alignSelf: "stretch",
    textAlign: "left",
    display: "flex",
    flexDirection: "row"
  };
  return (
    <div className="Dashboard"  style={headerStyle}>
        <DashboardBtn text="btn 1" />
        <DashboardBtn text="btn 2" />
        <DashboardBtn text="btn 3" />

    </div>
  );
}

export default Dashboard;
