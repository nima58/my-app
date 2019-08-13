import React from 'react';
import Utils from '../utils/Utils';
import TableComp from '../comps/TableComp';
//import BaseRestUrl from '../utils/Utils';
//import EnglishAutocompUri from '../utils/Utils';

class BaseService extends React.Component{

  constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    uri : props.uri,
    isReturningLex : props.isReturningLex,
    items: []
  };
}
  componentDidMount() {
  //  let url = Utils.BaseRestUrl + Utils.EnglishAutocompUri +  this.props.word;
//  let url = 'http://localhost:8080/lexicon/words/' + 'english/autocomp?word=' + this.props.word;
//    alert(this.state.uri);
  fetch(this.state.uri)
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
  console.log( this.state.items);
  let myItems = this.state.items;
  if(this.props.isReturningLex){
    return (
      <div>
      <p>Results from BaseService rest api</p>
        <TableComp items = {myItems} />
      </div>
    );
  } else{
    return(
      <div>Empty</div>
    );
  }
  }
}
export default BaseService;
