import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ArtArtist() {
    const [inputData, setInputData] = useState({
        artistName: "",
        city: "",
        artType: "",
      });
     
      const naviget = useNavigate();
     
      let handleSubmit = (e) => {
        e.preventDefault();
        let result = validateValues(inputData);
        // setSubmitting(true);
     
        if (result === true) {
          axios
            .post("http://localhost:4802/art", inputData)
            .then((res) => {
              alert("Data added Successfully");
              naviget("/");
              console.log(res.data);
            })
            .catch((err) => console.log(err));
        } else {
          alert("Please Enter the Valid Inputs!!!");
        }
      };
     
      // validation Part for add user for student management system
      // const [errors, setErrors] = useState({});
      // const [submitting, setSubmitting] = useState(false);
     
      const validateValues = (inputData) => {
        if (inputData.artistName.length === 0) {
          alert("Please enter Artist Name !!! ");
          return false;
        } else if (inputData.city.length === 0) {
          alert("Please enter City Name");
          return false;
        } else if (inputData.artType.length === 0) {
          alert("Please enter ArtType Name !!!");
          return false;
        } else {
          return true;
        }
      };
  return (
<div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h1>ADD ARTIST DETAILS</h1>
          <div>
            <lable htmlFor="name">Artist Name</lable>
            <input
              type="text"
              name="artistName"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, artistName: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="Mobile">City :</lable>
            <input
              type="text"
              name="city"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, city: e.target.value })
              }
            />
          </div>
 
          <div>
            <lable htmlFor="city">Art Type:</lable>
            <input
              type="text"
              name="artType"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, artType: e.target.value })
              }
            />
          </div>
          <br />
 
          <button className="btn btn-info">Submit</button>
        </form>
 
       
      </div>
    </div>
  )
}

export default ArtArtist
