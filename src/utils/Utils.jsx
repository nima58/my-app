import React from 'react';

class Utils extends React.Component {
  constructor(props){
    super(props);
  }
   getBaseRestUrl(){
     return 'http://localhost:8080/lexicon/words/';
   }
   getEnglishAutocompUri(){
     return 'english/autocomp?word=';
   }
}
export default Utils;
