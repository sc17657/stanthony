import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import member_detail from './components/member_detail';
import members from './components/members';
import contact from './components/contact';
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.apiUrl = 'http://localhost:3000/api/users'
    this.state = {
      members: []

    }
  }

  async componentDidMount() {
    const response = await axios.get(this.apiUrl)
    this.setState({members: response.data.users})
  }
  addMember = async () => {};

  render() { 
  return (
    <div className="App">
      <h1>Welcom to St. Anthony's Grief Group</h1>
      <switch>
        <Route path="/members" component={members} />
        <Route path="/details" component={member_detail} />
        <Route path="/contact" component={contact} />
      </switch>

     
    </div>
  );
}
}

export default App;
