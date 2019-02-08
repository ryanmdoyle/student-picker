import React from 'react';
import Nav from './Nav'
import AddClassForm from './AddClassForm';

class AddClass extends React.Component {
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

  render() {
    return (
      <React.Fragment>
        <Nav />
        <AddClassForm addClass={this.addClass} />
      </React.Fragment>
    )
  }
}

export default AddClass;