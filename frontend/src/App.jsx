import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Worker from "./Pages/Worker";
import WorkerProfile from "./components/WorkerProfile"; 
import AddWorker from "./pages/AddWorker";

 

function App(){


return(


<div>


<Navbar/>


<hr/>


<Routes>

<Route

path="/add-worker"

element={<AddWorker/>}

/>



<Route

path="/"

element={<Home/>}

/>



<Route

path="/Register"

element={<Register/>}

/>



<Route

path="/Worker"

element={<Worker/>}

/>



<Route

path="/Worker/:id"

element={<WorkerProfile/>}

/>



</Routes>


</div>


)

}


export default App;