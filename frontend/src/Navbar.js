const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>SNEAKLIST</h1>
        <div className="sneaklistlogo"></div>
        <div className="links">
          <a href="/">Home </a>
          <a href="/create">New Shoe</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;