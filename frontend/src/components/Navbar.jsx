import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar(){

return(

<nav className="navbar">


<h2>
👷 Daily Wage Labour Platform
</h2>


<div className="nav-links">


<Link to="/">
Home
</Link>


<Link to="/register">
Register Worker
</Link>


<Link to="/worker">
Find Worker
</Link>


</div>


</nav>

)

}


export default Navbar;