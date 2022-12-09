import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>SNEAKLIST</h1>
        <div className="sneaklistlogo"></div>
        <div className="links">
          <Link to="/">Home </Link>
          <Link to="sneakers">Sneakers</Link>
          <Link to="sneakers/create">New Shoe</Link>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
