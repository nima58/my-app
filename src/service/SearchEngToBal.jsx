import React from 'react';
import LexContainer from '../utils/LexContainer';
import Utils from '../utils/Utils';
class SearchEngToBal extends React.Component{

  constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    items: []
/*    items: [{
      id:0, bcc:'', eng: '', pos: '', bccLatinCom: '', bccLatinSci: '', fa: '', ur: ''
    }]*/
  };
}
  componentDidMount() {
  /*  const param = 'country';
    const url1 = 'http://localhost:8080/lexicon/words/english?word=' + this.props.param;
    let baseUrl = Utils.getBaseRestUrl;
    let engAurocomp =  Utils.getEnglishAutocompUri;
    let url = baseUrl + engAurocomp +  this.props.param;*/
  const url = 'http://localhost:8080/lexicon/words/english?word=' + this.props.param;
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
      <p>Here are the Results from rest api ...</p>
      echo({this.state.items.length});
      <LexContainer words = {this.state.items} />
      </div>
    );
  }
}
export default SearchEngToBal;
