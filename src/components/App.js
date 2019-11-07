import React from 'react';
import './App.css';
import BtnContainer from '../containers/BtnContainer';
import TextContainer from '../containers/TextContainers';

import ScreenItem from './ScreenItem';

function App() {
  let headerStyle={
    flex: "1 1 100px",
    margin: "20px 20px 0 0",
    backgroundColor: "#000",
  };
  return (
    <div className="App">
      <BtnContainer />
      <div className="screen" >
        <div className="ScreenRow">
            <TextContainer txt="text 1" style={headerStyle}/>
            <ScreenItem txt="text 2" style={headerStyle}/>
            <ScreenItem txt="text 3" style={headerStyle}/>
            <ScreenItem txt="text 4" style={headerStyle}/>
        </div>
        <div className="ScreenRow">
            <ScreenItem txt="text 5" style={headerStyle}/>
            <ScreenItem txt="text 6" style={headerStyle}/>
            <ScreenItem txt="text 7" style={headerStyle}/>
            <ScreenItem txt="text 8" style={headerStyle}/>
        </div>
      </div>
    </div>
  );
}

export default App;
