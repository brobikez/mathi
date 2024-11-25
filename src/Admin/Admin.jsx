import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Admin() {
  const [adminData, setAdminData] = useState({});
  const [delBike,setDelBike] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    url:"",
    description:"",
    price:""
  });
 
  const [Add, setAdd] = useState(false);
  const userEmail = sessionStorage.getItem("userEmail") || document.cookie.replace(/(?:(?:^|.*;\s*)userEmail\s*=\s*([^;]*).*$)|^.*$/, "$1");

  const auth = sessionStorage.getItem('userEmail');
  
  if(auth) {
    console.log("User Logged in...")
  }else{
    console.log("user not Found")
  }

  const [bikeData,setBikeData] = useState(null);

  const navigate = useNavigate(); 

  useEffect( () => {
    auth ? null : navigate('/')
    setAdminData({ email : sessionStorage.getItem('userEmail')});
    
    async function fetchData(){
      
      const response =await fetch("http://localhost:3001/fetch-rental-data",{
        method : "GET",
        headers : { "content-type" : "application/json"},
      })
      if (response.ok) {
        // console.log(await response.json());
        const data =await response.json();
        setBikeData(data);
      }
    }
    fetchData();

  }, [delBike]);

  const handleLogout = () => {
    sessionStorage.removeItem("userEmail");
    document.cookie = "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log("button Clicked")
    const postData = async () => {
      try {
        const response = await fetch("http://localhost:3001/data-rental",{
        method : "POST",
        headers : { "content-type" : "application/json" },
        body : JSON.stringify(formData)
      })

      if (response.ok) {
        console.log("saved succesfully");
      }
      } 
      catch (err) {
        console.log("error in connection :",err);
      }
    }

    postData();
  };

  // Delete Bike
  const handleDeleteBike = async(bike) => {
    
    const del  =await fetch('http://localhost:3001/remove-bike',{
      method : "POST",
      headers : { "content-type" : "application/json" },
      body : JSON.stringify({ 'name' : bike})
    })

    if (del.ok) {
      console.log("bike removed succesfully..!")
      setDelBike(!delBike);
    }
    else {
      console.log("error in removing Bike");
    }
  }

  

  return (
    <div>
      {auth && (
        <div className="min-h-screen p-3">
        <h2 className="text-2xl font-bold">Hello {adminData.username}</h2>
        <p className="font-bold">Email: {adminData.email}</p>
  
        <div className="container mx-auto grid grid-cols-4 p-3">
        {bikeData ?
          (
            bikeData.map((bike,index) => (
              <div className="p-2" key={index}>
                <img src={bike.url} alt="" />
                <h2 className="text-2xl font-bold my-2">{bike.name}</h2>
                <p className="py-2">{bike.description}</p>
                <p className="text-indigo-700 font-bold">Price : {bike.price}</p>
                <button onClick={()=>handleDeleteBike(bike.name)}>Remove Bike</button>
              </div>
            ))
          ) :
           (<p>no Data</p>)}
        </div>
        
        <button onClick={() => setAdd(true)} className="btn bg-blue-400 rounded font-bold mr-3 px-5 py-2 ">Add</button>
        <button onClick={handleLogout} className="btn bg-gray-600 rounded px-3 py-2 text-white my-4">Logout</button>
        {Add && (
          <form>
            <input type="text" placeholder="Bike name" className="rounded p-3 border bg-gray-200 text-black" name="name" value={formData.name} onChange={handleInputChange}/>
            <input type="text" placeholder="image url" className="rounded p-3 border bg-gray-200 text-black" name="url" value={formData.url} onChange={handleInputChange}/>
            <input type="text" placeholder="Description" className="rounded p-3 border bg-gray-200 text-black" name="description" value={formData.description} onChange={handleInputChange}/>
            <input type="text" placeholder="Price" className="rounded p-3 border bg-gray-200 text-black" name="price" value={formData.price} onChange={handleInputChange}/>
            <button onClick={()=>handleSubmit()} className="px-2 mx-2 rounded py-2 bg-gray-800 font-bold text-white">Submit Form </button>
          </form>
          
        )}
        
        
      </div>
      )}
    </div>
  );
}
