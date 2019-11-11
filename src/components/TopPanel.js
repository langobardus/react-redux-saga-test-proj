import React from 'react';
import TopPanelBtn from './TopPanelBtn';

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
        <TopPanelBtn txt="btn 1" onClick={() => onBtnClick("btn 1")} />
        <TopPanelBtn txt="btn 2" onClick={() => onBtnClick("btn 2")} />
        <TopPanelBtn txt="btn 3" onClick={() => onBtnClick("btn 3")} />
        <TopPanelBtn txt="btn 4" onClick={() => onBtnClick("btn 4")} />
        <TopPanelBtn txt="btn Dog" onClick={() => onBtnClick("btn Dog")} />

    </div>
  );
}

export default TopPanel;
