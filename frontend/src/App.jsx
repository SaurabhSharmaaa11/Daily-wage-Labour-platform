import { Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Register from "./pages/Register";
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

path="/workers"

element={<Workers/>}

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