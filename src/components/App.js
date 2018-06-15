import React, { Component } from 'react';
import './App.css';

function simulateTyping(el, data, i) {
  setTimeout(function () {
    if(i < data.length) {
      el.textContent += data[i];
      i++;
      simulateTyping(el, data, i);
    }
  }, 75);
};


class App extends Component {
  componentDidMount() {
    var el = document.querySelector('.sub-heading');
    simulateTyping(el, "Software Developer, Creator and Explorer.", 0);
  }

  render() {
    return (
      <div id="main-content">
        <div id="one" className="section">
          <h1 className="my-name">Hi, I'm Dave.</h1>
          <p className="sub-heading"></p>
          
        </div> 

        <div id="two" className="section">
        
        </div>
      </div>
    );
  }
}

export default App;
