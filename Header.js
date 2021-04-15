import React from "react";

function Header(props) {
  return (
    <div>
      <header className="navbar">react Todo App </header>
      <h2>{props.count}</h2>
      <button onClick={props.buttonClick}>click to change </button>
    </div>
  );
}

export default Header;
