import React, { Component } from 'react';
import './NavComponent.css';

window.addEventListener("scroll", activateNavbar, false);

var checkPosition = function() {
  const el = document.querySelector("#one");
  var bounds = el.getBoundingClientRect();
  return bounds.top < -100;
}

function activateNavbar() {
  var nav = document.querySelector(".topnav");
  if(checkPosition()) {
    nav.classList.add("modify");
  } else {
    nav.classList.remove("modify");
  }
}

class NavComponent extends Component {
  render() {
    return (
      <div className="topnav">
        <ul id="navigation-list">
          <a href="">Home</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
          <a href="">About</a>
        </ul>
      </div>
    );
  }
}

export default NavComponent;
