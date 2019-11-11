import React from 'react';

function DogItem( { txt, dogs, style } ) {
  return (
    <div className="ScreenItem"  style={style}>
    {dogs.loading
       ? <p>Loading...</p>
       : dogs.error
           ? <p>Error, try again</p>
           : dogs.url==""
            ? <p>Press btn Dog</p>
            : <p><img style={{width: "100%" }} src={dogs.url}/></p>}
    </div>
  );
}

export default DogItem;
