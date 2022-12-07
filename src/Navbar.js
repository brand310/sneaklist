import React from "react";

const Navbar = () => {

  return (
    <nav className="navbar">
      <h1>SNEAKLIST</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/sneakers/create">New Shoe</a>
      </div>
    </nav>
  );
};

export default Navbar;
