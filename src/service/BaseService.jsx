import React from 'react';
import Utils from './utils/Utils';
class BaseService extends React.Component{

  constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    word: props.word,
    items: []
  };
}
  componentDidMount() {
    let url = Utils.getBaseRestUrl + Utils.getEnglishAutocompUri +  this.props.word;

  fetch(url)
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        items: result
      });
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  )
}
render() {
    return (
      <div>
      <p>Results from rest api</p>
        {this.state.items}
      </div>
    );
  }
}
export default BaseService;
