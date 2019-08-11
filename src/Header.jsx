import React from 'react';

class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: this.props.name,
        version : this.props.version,
        description: this.props.description
      }
  }
  render(){

    return(
        <div>
            <p>Header name: {this.state.name} version: {this.state.version}
             description: {this.state.description} </p>
        </div>
    );
}
}
export default Header;
