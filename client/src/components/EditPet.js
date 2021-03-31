import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const EditPet = (props) => {
    const [formInfo, setFormInfo]= useState({
        Name:"",
        Type:"",
        Description:"",
        Skills:""
    })

    const [errors, setErrors]= useState ({

    })
    useEffect(()=>{
        axios.get(`http://localhost:8000/pet/${props.petid}`)
        .then(response=>{
            console.log(response)
            setFormInfo(response.data.result)
        })
        .catch(err=> console.log(err))
    }, [])

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
        axios.put(`http://localhost:8000/pet/update/${props.petid}`, formInfo)
        .then(response => {
            console.log(response)
            if(response.data.Result) {
            navigate("/") }
            else {
                setErrors(response.data.err.errors)
            }
        })
        .catch(err=> console.log("errors", err))
    }
    return (
        <div>
            <Link to ="/"> Return to homepage</Link>
            <h3> Form Edit for the Product: {props.productid} </h3>
            <form onSubmit={submitHandler}>
                <p> Name: <input type= "text" name="Name" id="" onChange={changeHandler} value= {formInfo.Name}/> </p>
                <p style = {{color:"red"}}>{errors.Name? errors.Name.message : ""}</p>
                <p> Type: <input type= "text" name="Type" id="" onChange={changeHandler} value= {formInfo.Type}/> </p>
                <p style = {{color:"red"}}>{errors.Type? errors.Type.message : ""} </p>
                <p> Description: <textarea name="Description" id="" cols="30" rows="10" onChange={changeHandler} value= {formInfo.Description}> </textarea> </p>
                <p style = {{color:"red"}}>{errors.Description? errors.Description.message : ""} </p>
                <p> Skills: <input type= "text" name="Skills" id="" onChange={changeHandler} value= {formInfo.Skills}/> </p>
                <input type = "submit" value = "Edit Pet"/>
            </form>
        </div>
    );
};

EditPet.propTypes = {};

export default EditPet;