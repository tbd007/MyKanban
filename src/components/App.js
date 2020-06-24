import React from 'react';
import './App.css';
import MyInfo from './MyInfo';
import Today from './Today';
import ToNote from './ToNote';
import Water from './Water';
import LogIn from './LogIn';
import Todos from './Todos';
import Board from './Board';



function MyApp() {
  
  return (
    <div className="App">
      <div className="head">
      <LogIn />  
      <MyInfo />
      <Water />
      
      </div>
      <div id="board-wrapper">
        <Board />
      </div>
      <div className="layers">
        
      <Today />
      <Todos />
      <ToNote />
      </div>
      <div className="footer">
        <div id="footer">Powered by <img src="logo192.png" alt="react" style={{width:30, height:30}}/> <p>© TBD 2020</p></div>
      </div>
    </div>
    
  );
}

export default MyApp;
