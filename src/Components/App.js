import React, { Component } from 'react';

import Nav from './Nav';
import AddClass from './AddClass';

class App extends Component {
  state = {
    classes: []
  }

  addClass = (newClassObj) => {
    const currentClasses = [...this.state.classes];
    currentClasses.push(newClassObj)
    this.setState({
      classes: currentClasses
    })
  }

  checkLocation = (e) => {
    console.log(this.props.history.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {(this.props.history.location.pathname === '/') ? "the home" : <AddClass addClass={this.addClass}/> }
      </div>
    );
  }
}

export default App;
