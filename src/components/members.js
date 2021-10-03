import { Route, Link } from "react-router-dom";
import React from "react";
import './members.css';

export default function members(props) {
    const members = props.api.users.map((members) => {
      return (
        <li key={members.name}>
          <Link to={'/members/${members.name}'}></Link>
        </li>
      );
    });
  
        
        
    
    return (
    <div className="members">
        <h2>Grief Group list</h2>
        <ul>{members}</ul>
    </div>
    );
}