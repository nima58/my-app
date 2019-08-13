import React from 'react';

class AutoCompService extends React.Component{

  constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    word: props.word,
    lang: props.lang,
    items: []
  };
}
  componentDidMount() {
    let url = 'http://localhost:8080/lexicon/words/english/autocomp?word=' + this.props.word;
    if(this.props.lang === "bcc"){
      url = 'http://localhost:8080/lexicon/words/baluchi/autocomp?word=' + this.props.word;
    }
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
      {this.state.items.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
  }
}
export default AutoCompService;
