import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import member_detail from './components/AllMembers/MemberDetail/member_detail';
import members from './components/AllMembers/members';
import contact from './components/contact';
import { Switch, Route, Link } from "react-router-dom";
import Members from './components/AllMembers/members';
import Member_detail from './components/AllMembers/MemberDetail/member_detail';

class App extends Component {
  constructor() {
    super();
    this.apiUrl = 'http://localhost:3000/api/users/';
    this.state = {
      users: []

   }
  }

  async componentDidMount() {
    const response = await axios.get(this.apiUrl);
    this.setState({users: response.data.users})
 
  }
  addUser = async (event) => {
    event.preventDefault();
    const response = await axios.post(this.apiUrl, {
      name: event.target.name.value
    });
    const tempMembers = this.state.users;
    tempMembers.push(response.data.users);

    this.setState({users: tempMembers})

    event.target.name.value = "";
  };

  update = async (event) => {
    event.preventDefault();
    const response = await axios.put(this.apiUrl, {
      name: event.target.name.value
    });
    
    
  };

  render() { 
  return (
    <div className="App">
      <h1>St. Anthony's Grief Group</h1>
      <nav> 

        <Link to='/'>Home</Link> | 
        <Link to='/Member'>Members List</Link> |
        <Link to ='/Member/:id'>Member Details</Link> | 
        <Link to ='/Member/:id/Contact'>Member Contact Info</Link>
        
      </nav>

      <Switch>
        <Route path="/Member" 
          exact component={() => <Members
          member={this.state.users} 
          addUser={this.addUser}
          /> }
      />

        <Route path="/Member/:id" 
        component={() => <Member_detail
        details={this.state.users}
        updateMember={this.update}
          /> }
      />


        <Route path="/Member/:id/Contact" 
        component={contact} />

        
      </Switch>

    </div>
  );
}
}

export default App;
