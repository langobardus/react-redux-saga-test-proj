import React from 'react';

function ScreenItem( { txt, style } ) {
  return (
    <div className="ScreenItem"  style={style}>
      {txt}
    </div>
  );
}

export default ScreenItem;
