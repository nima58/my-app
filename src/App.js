import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TableRow from './TableRow';
import AutoCompService from './AutoCompService';
import SearchEngToBal from './service/SearchEngToBal';
import Example from './utils/Example';
import TableComp from './comps/TableComp';
import BaseService from './service/BaseService';

class App extends React.Component {
  constructor() {
     super();
     this.state = {
        data:
        [
           {
              "id":1,
              "name":"Foo",
              "age":"20"
           },
           {
              "id":2,
              "name":"Bar",
              "age":"30"
           },
           {
              "id":3,
              "name":"Baz",
              "age":"40"
           }
        ]
     }
  }
   render() {
  return (
    <div className="App">
    <Header name='myLexicon' version='2.0' description='no description'/>
      <AutoCompService word="nam" lang="eng"/>
      <AutoCompService word="زُبا" lang="bcc"/>
      <SearchEngToBal param={'green'} />
      <Example />
      <BaseService isReturningLex = {true} uri = {'http://localhost:8080/lexicon/words/english?word=nam'} />
      <BaseService isReturningLex = {true} uri = {'http://localhost:8080/lexicon/words/baluchi?word=بلۆچ'} />
      <Footer />
    </div>
  );
}
}

export default App;
