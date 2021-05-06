import React, { Component } from 'react'

class DogRequest extends Component {
  constructor() {
    super();

    this.state = {
      message: '',
      status: '',
    }

    this.handleFetch = this.handleFetch.bind(this);
    this.imageGenerator = this.imageGenerator.bind(this)

  }

  handleFetch() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => this.setState({
        message: data.message,
        status: data.status,
      }))
  }

  imageGenerator() {

  }

  componentDidMount() {
    this.handleFetch();
  }

  render() {
    const loadingElement = <span>Loading...</span>
    const { message } = this.state;

    return (
      <div>
        <div>
          { message ? <img src={ message } alt="dog"/> : loadingElement }
        </div>
        <button onClick = {this.handleFetch} >New Dog</button>
      
        
      </div>
    )
  }
}

export default DogRequest;





/* const fetch = require("node-fetch");

const fetchPromise = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data));
};

fetchPromise(); */