import React, {useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';
const NewPet = () => {
    const [formInfo, setFormInfo]= useState({
        Name:"",
        Type:"",
        Description:"",
        Skills:""
    })
    const [errors, setErrors] = useState({

    })
    const changeHandler = (e)=> {
        console.log("changing the input")
        console.log(e.target.name)
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e)=> {
        e.preventDefault()
        console.log ("I am submitting something", formInfo)
        axios.post("http://localhost:8000/pet/create", formInfo)
        .then(response => {
            console.log(response)
            if(response.data.Result){
            navigate("/")
        }
            else{
                setErrors(response.data.err.errors)
            }
        })
        .catch(err=> console.log("errors", err))
    }
    return (
        <div>
            <Link to ="/"> Return to homepage</Link>
            <h3> Pet Registration Form </h3>
            <form onSubmit={submitHandler}>
                <p> Name: <input type= "text" name="Name" id="" onChange={changeHandler}/> </p>
                <p style = {{color:"red"}}>{errors.Name? errors.Name.message : ""}</p>
                <p> Type: <input type= "text" name="Type" id="" onChange={changeHandler}/> </p>
                <p style = {{color:"red"}}>{errors.Type? errors.Type.message : ""} </p>
                <p> Description: <textarea name="Description" id="" cols="30" rows="10" onChange={changeHandler}> </textarea> </p>
                <p style = {{color:"red"}}>{errors.Description? errors.Description.message : ""} </p>
                <p> Skills: <input type= "text" name="Skills" id="" onChange={changeHandler}/> </p>
                <input type = "submit" value = "Add Pet"/>
            </form>
        </div>
    );
};

NewPet.propTypes = {};

export default NewPet;