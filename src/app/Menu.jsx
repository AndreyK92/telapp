import React from 'react';
import ReactDOM from 'react-dom';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hey you! That\'s a menu!'
    };    
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return(
      <div>{this.state.title}</div>
    );
  }
} 
