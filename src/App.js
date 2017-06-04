import React, { Component } from 'react';
import axios from 'axios'

var App = React.createClass({

  getInitialState: function() {
    return {
      repos: [],
      bio: []
    }
  },

  componentDidMount: function() {
    var _this = this;
    var Hello="Hello";
    var Hi= "Hi"
    var username="prince-chauhan"
    this.serverRequest = axios.get("https://api.github.com/users/"+username).then(function(arr) {    
          _this.setState({
            name : arr.data.name,
            public_repos: arr.data.public_repos,
          });
          console.log(arr.data)
        })

  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render(){
    return (
      <div>
        <h1>repos!</h1>
        Name = {this.state.name}
        Public repos = {this.state.public_repos}
        
      </div>
    );
  }
});
export default App;