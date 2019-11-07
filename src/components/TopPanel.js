import React from 'react';
import DashboardBtn from './DashboardBtn';

function TopPanel({onBtnClick, txt}) {
  let headerStyle={
    backgroundColor: "#000",
    alignSelf: "stretch",
    textAlign: "left",
    display: "flex",
    flexDirection: "row"
  };
  return (
    <div className="TopPanel" style={headerStyle}>
        <DashboardBtn txt="btn 1" onClick={() => onBtnClick()} />
        <DashboardBtn txt="btn 2" />
        <DashboardBtn txt="btn 3" />
        <DashboardBtn txt="btn 4" />
    </div>
  );
}

export default TopPanel;
