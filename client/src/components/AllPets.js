import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import {Link} from '@reach/router'
const AllPets = () => {
    const[AllPets, setAllPets] = useState([])
    
    useEffect(()=> {
        axios.get("http://localhost:8000/pet/all")
        .then(allData => {
            console.log("******")
            console.log (allData)
            console.log("*******")
            let results = allData.data.Result
            results.sort(function(a, b) {
                var nameA = a.Type.toUpperCase(); // ignore upper and lowercase
                var nameB = b.Type.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
                // names must be equal
                return 0;
              });
            setAllPets(results)
        }) 
        .catch("We not good!")
    }, [] )
    
    return (
        <div>
            <h4> HERE ARE ALL THE Pets Available for adoption</h4>
            
            {AllPets.sort(petObj=>petObj.Type).map ((petObj, idx)=>{
                return <div> 
                    <h1> Pet: {petObj.Name} </h1>
                    <p> Type: {petObj.Type}</p>
                    <p> Description: {petObj.Description} </p>
                    <p> ID: {petObj._id}</p>
                    <button> <Link to ={`/pets/info/${petObj._id}`}> Details</Link> </button>
                    <button> <Link to ={`/pets/edit/${petObj._id}`}> Edit</Link> </button> 
                    </div>
            })}
        </div>
    );
};

AllPets.propTypes = {};

export default AllPets;