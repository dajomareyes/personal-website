import React, { Component } from 'react';
import './App.css';

function typingEffect() {
  var el = document.getElementById('sub-heading');
  const txt = "Software Developer, Creator and Explorer.";
  console.log(el);
  for(var i=0; i<txt.length; i++) { 
    
  }
}

class App extends Component {
  render() {
    return (
      <div id="main-content">
        <div id="one" className="section">
          <h1 className="my-name">Hi, I'm Dave.</h1>
          <h2 id="sub-heading"> </h2>
        </div> 

        <div id="two" className="section">
        
        </div>
      </div>
    );
  }
}


document.addEventListener("DOMContentLoaded", typingEffect(), false);
window.addEventListener("load", typingEffect(), false);


export default App;
