import React from 'react';
import './App.css';
import BtnContainer from '../containers/BtnContainer';
import {TextContainer1, TextContainer2, TextContainer5, TextContainer6, TextContainer7, TextContainer8} from '../containers/TextContainers';
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
            <TextContainer1 name="btn pressed: " txt="text X" style={headerStyle}/>
            <TextContainer2 name="total counter: " txt="text 2" style={headerStyle}/>
            <ScreenItem txt="text 3" style={headerStyle}/>
            <ScreenItem txt="text 4" style={headerStyle}/>
        </div>
        <div className="ScreenRow">
            <TextContainer5 name="btn1 counter: " txt="text 5" style={headerStyle}/>
            <TextContainer6 name="btn2 counter: " txt="text 6" style={headerStyle}/>
            <TextContainer7 name="btn3 counter: " txt="text 7" style={headerStyle}/>
            <TextContainer8 name="btn4 counter: " txt="text 8" style={headerStyle}/>
        </div>
      </div>
    </div>
  );
}

export default App;
