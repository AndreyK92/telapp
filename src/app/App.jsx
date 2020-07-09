import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Guthemberg',
      timer: null
    };    
  }

  componentDidMount() {
    const intervalId = setInterval(this.toggleName.bind(this), 1000);
    this.setState({
      timer: intervalId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  toggleName() {
    const name = this.state.name === 'Guthemberg' ? 'Andrey' : 'Guthemberg';
    this.setState({
      name: name
    });
  }

  render() {
    return(
      <div>
        <Menu />
        {this.state.name}
      </div>
    );
  }
} 
