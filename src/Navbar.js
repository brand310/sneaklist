const Navbar = () => {
  return (
    <nav className="navbar" style={{backgroundColor: '#EFD6AC'}}>
      <h1>▪SNEAKLIST▪</h1>
      <div className="links">
        <a href="/">Home </a>
        <a href="/create">New Shoe</a>
      </div>
    </nav>
  );
};

export default Navbar;
