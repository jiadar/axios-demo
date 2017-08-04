import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {

  performGetRequest1() {

    var resultElement = document.getElementById('getResult1');

    resultElement.innerHTML = '';
    
    axios("http://jsonstub.com/users", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "JsonStub-User-Key": "605f7a33-036b-4d09-af63-91e5f103ebaf", 
        "JsonStub-Project-Key": "6b96b772-8e99-402a-9108-7964013effab"},
      timeout: 20000,
      method: 'post',
      responseType: 'json',
      data: []
    })
    .then(function (response) {
      console.log('promise returned');
      resultElement.innerHTML = JSON.stringify(response, null, '\t');
    })
    .catch(function (error) {
             console.log('promise error');
             resultElement.innerHTML = JSON.stringify(error, null, '\t');
           });   

  }

  render() {
    return (
    <div className="panel-body" id="container1">
      <h1>Data Received: </h1>
      {this.performGetRequest1()}
    </div>
    );
  }
}

export default App;
