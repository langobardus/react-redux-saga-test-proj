import React from 'react';

function ScreenItem( {name, txt, style, counterBtn} ) {
  return (
    <div className="ScreenItem"  style={style}>
      <small><i>{name}</i></small><b>{txt}</b>
    </div>
  );
}

export default ScreenItem;
