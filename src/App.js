import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TableRow from './TableRow';
import RestService from './RestService';
import SearchEngToBal from './service/SearchEngToBal';
import Example from './utils/Example';

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
    <table>
         <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i}
                   data = {person} />)}
          </tbody>
      </table>
      <RestService word="bas"/>
      <SearchEngToBal param={'red'} />
      <Example />
      <Footer />
    </div>
  );
}
}

export default App;
