import React from 'react';

class LexContainer extends React.Component {

constructor(props){
  super(props);
//  echo("props ...");
  this.state = {words: []}
}

/*  constructor(props) {
    super(props);
    this.state={
      id:0, bcc:'', eng: '', pos: '', bccLatinCom: '', bccLatinSci: '', fa: '', ur: ''
    }
  }*/
  render(){
    return(
      <ul>
        {this.props.words.map(e => (
         <li>ID: {e.id} BCC: {e.bcc},  COM: {e.bccLatinCom},  POS: {e.pos}, English: {e.eng}, Farsi: {e.fa}, Urdu: {e.ur}</li>
        ))}
        </ul>
    );
  }
}
export default LexContainer;
