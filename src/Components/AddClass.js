import React from 'react';
import Nav from './Nav'
import AddClassForm from './AddClassForm';

class AddClass extends React.Component {

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