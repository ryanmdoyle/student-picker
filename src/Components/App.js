import React, { Component } from 'react';

import Nav from './Nav';
import AddClass from './AddClass';
import AddClassForm from './AddClassForm';

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
        <div className='inner'>
          <AddClassForm addClass={this.addClass} />
        </div>
      </div>
    );
  }
}

export default App;
