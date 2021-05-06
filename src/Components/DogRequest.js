import React, { Component } from 'react';

class DogRequest extends Component {
  constructor() {
    super();

    this.state = {
      url: '',
      loading: true,
    }
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleFetch() {
    this.setState({ loading: true }, () => {
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => this.setState({
        url: data.message,
        loading: false,
      }))
    })
  }

  componentDidMount() {
    this.handleFetch();
  }

  render() {
    const { url, loading } = this.state;
    const loadingElement = <span>Loading...</span>
    console.log('render');

    return (
      <div>
        <div>
          { loading ? loadingElement : <img src={url} alt="dog" /> }
        </div>
        <button onClick = {this.handleFetch} >Next Dog</button>
      </div>
    )
  }
}

export default DogRequest;
