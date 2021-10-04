import { Route, Link } from "react-router-dom";
import React from "react";
import './member_detail.css';

export default function Member_detail(props) {
        const details = props.details.map((users)=> {
            return users.name;
        })
        
    
   
  return (
    <div className="member_detail">
      <h2>{details} Details</h2>

      <form onSubmit={props.updateMember} >
          <input type='text' name="name" placeholder={details.name} />
          <input type='text' name="loss" placeholder={details.loss} />
          <input type='number' name="year" placeholder={details.year_of_loss} />
          <input type="submit" value="Update Profile"></input>
      </form>

      

  </div>

  );
}