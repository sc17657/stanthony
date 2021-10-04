import { Route, Link } from "react-router-dom";
import React from "react";
import './member_detail.css';

export default function Member_detail(props) {
        const member = props.details.find((user)=> {
            return user.id == props.match.params.id
        })
        
    console.log(member)
   
  return (
    <div className="member_detail">
      <h2>{member.name} Details</h2>

      <form onSubmit={props.updateMember} >
          <input type='text' name="name" value={member.name} />
          <input type='text' name="loss" value={member.loss} />
          <input type='hidden' name="id" value={member.id} />
          <input type="submit" value="Update Profile"></input>
      </form>

      

  </div>

  );
}