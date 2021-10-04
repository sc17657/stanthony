import { Route, Link } from "react-router-dom";
import React from "react";
import './members.css';

export default function Members(props) {
        const members = props.member.map((users) => {
              return (

              <li key={users.name}>
                <Link to={`/Member/${users.id}`}>{users.name}</Link>
              </li>

              )
        })

  return (
    <div className="members">
      <h2>All Members</h2>

      <form onSubmit={props.addUser}>
            <input type='text' name="name" />
            <input type="submit" value='Add Member' />

      </form>
      <ul>
          {members}

      </ul>
  </div>

  );
}