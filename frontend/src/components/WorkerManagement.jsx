import toast from "react-hot-toast";
import { useState } from "react";
import API from "../api/api";
import "./WorkerManagement.css";

function WorkerManagement() {

     const [worker,setWorker] = useState({

name:"",

phone:"",

workType:"",

experience:"",

availability:"Available",

wage:"",

address:""

});


    const handleChange = (e) => {

        setWorker({
            ...worker,
            [e.target.name]: e.target.value
        });

    };


   const addWorker = async (e)=>{

e.preventDefault();


if(
!worker.name ||
!worker.phone ||
!worker.workType ||
!worker.experience ||
!worker.wage ||
!worker.address
){

alert("Please fill all fields");

return;

}



if(worker.phone.length !== 10){

alert("Enter valid 10 digit phone number");

return;

}



try{


await API.post("/workers",worker);

toast.success("Worker Registered Successfully");

setWorker({

name:"",
phone:"",
workType:"",
experience:"",
availability:"Available",
wage:"",
address:""

});



}


catch(error){


console.log(error);


toast.error("Something went wrong");


}


};  


    return (

         <div
          
          className="worker-form">
            
            <h2>
                Worker Registration
            </h2>


            <form onSubmit={addWorker}>


                 <input
            type="text"
            name="name"
            placeholder="Worker Name"
            value={worker.name}
            onChange={handleChange}
            required
            />


                <br/><br/>

                <input
type="text"
name="experience"
placeholder="Experience"
value={worker.experience}
onChange={handleChange}
/>

<br/><br/>


<input
type="text"
name="availability"
placeholder="Availability"
value={worker.availability}
onChange={handleChange}
/>

<br/><br/>


                <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={worker.phone}
                onChange={handleChange}
                />


                <br/><br/>


                <input
                type="text"
                name="workType"
                placeholder="Work Type"
                value={worker.workType}
                onChange={handleChange}
                />


                <br/><br/>


                <input
                type="number"
                name="wage"
                placeholder="Daily Wage"
                value={worker.wage}
                onChange={handleChange}
                />


                <br/><br/>


                <input
                type="text"
                name="address"
                placeholder="Address"
                value={worker.address}
                onChange={handleChange}
                />


                <br/><br/>


                <button type="submit">
                    Add Worker
                </button>


            </form>


        </div>

    );

}


export default WorkerManagement;

 
 