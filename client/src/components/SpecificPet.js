import React, {useEffect, useState}from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const SpecificPet = (props) => {
    console.log("Logging the id of the quote", props.petid)
    
    const[petInfo, setPetInfo] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/pet/${props.petid}`)
        .then(response => {
            console.log("****")
            console.log(response)
            console.log("*****")
            setPetInfo(response.data.result)
        })
        .catch(err => console.log(err))
    }, [])

    const deletePet = (e, petID)=> {
        console.log("Delete the pet", petID)
        axios.delete(`http://localhost:8000/pet/delete/${petID}`)
            .then(response=> {
                console.log("***")
                console.log(response)
                console.log("*****")
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to ="/"> Return to homepage</Link>
            <h1> Details about Pet: {petInfo.Name} </h1>
            <p> {petInfo.type}</p>
            <p> {petInfo.Description}</p>   
            <p> {petInfo.Skills}</p>
            <button onClick={(e)=> deletePet(e, petInfo._id)}>Adopt {petInfo.Name} </button>
        </div>
    );
};

SpecificPet.propTypes = {};

export default SpecificPet;