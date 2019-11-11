import React from 'react';

function TopPanelBtn( { txt, onClick } ) {
  return (
    <button className="TopPanelBtn"  onClick={onClick}>
      {txt}
    </button>
  );
}

export default TopPanelBtn;
