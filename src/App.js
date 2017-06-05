import React, { Component } from 'react';
import axios from 'axios'

export default class App extends React.Component{

  constructor(){
      super();
      this.state = {name: [], public_repos: []};
  }

  componentWillMount() {
    var _this = this;
    var username="sandys"
    this.serverRequest = axios.get("https://api.github.com/users/"+username).then(function(arr) {    
          _this.setState({
            name : arr.data.name,
            public_repos: arr.data.public_repos,
          });
          console.log(arr.data)
        })

  }

  render(){
    return (

      <div>
        <h1>repos!</h1>
        Name = {this.state.name}
        Public repos = {this.state.public_repos}
        
      </div>
    );
  }
}
