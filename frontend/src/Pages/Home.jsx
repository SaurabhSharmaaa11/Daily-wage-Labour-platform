import { Link } from "react-router-dom";
import "./Home.css";


function Home(){

return(

<div className="Home">


<h1>
👷 Daily Wage Labour Platform
</h1>


<p>
Find skilled workers near you quickly and easily
</p>



<div className="categories">


<div>
🔨
<h3>
Construction
</h3>
</div>


<div>
⚡
<h3>
Electrician
</h3>
</div>



<div>
🔧
<h3>
Plumber
</h3>
</div>



<div>
🪚
<h3>
Carpenter
</h3>
</div>


</div>



<Link to="/Worker">

<button className="find-btn">

Find Worker

</button>

</Link>



</div>

)

}


export default Home;