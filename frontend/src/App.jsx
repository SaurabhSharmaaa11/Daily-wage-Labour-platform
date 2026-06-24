import { Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";


import Home from "./Pages/Home";
import Worker from "./Pages/Worker";
import WorkerProfile from "./components/WorkerProfile";


function App(){


return(


<div>


<Navbar/>


<hr/>


<Routes>


<Route

path="/"

element={<Home/>}

/>



<Route

path="/register"

element={<Register/>}

/>



<Route

path="/worker"

element={<Worker/>}

/>



<Route

path="/worker/:id"

element={<WorkerProfile/>}

/>



</Routes>


</div>


)

}


export default App;