import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import member_detail from './components/member_detail';
import members from './components/members';
import contact from './components/contact';
import { Switch, Route, Link } from "react-router-dom";

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
  addUser = async () => {};
  
  render() { 
  return (
    <div className="App">
      <h1>Welcome to St. Anthony's Grief Group</h1>
   

    </div>
  );
}
}

export default App;
