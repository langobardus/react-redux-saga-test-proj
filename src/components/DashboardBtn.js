import React from 'react';

function DashboardBtn( { txt, onClick } ) {
  return (
    <div className="DashboardBtn"  onClick={onClick}>
      {txt}
    </div>
  );
}

export default DashboardBtn;
