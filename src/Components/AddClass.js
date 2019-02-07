import React from 'react';


import Nav from './Nav'

const AddClass = () => (
  <React.Fragment>
    <Nav />
    <div>
      <label name='students' for='students'>Student List</label>
      <input type='text' placeholder='enter student names separated by commas'></input>
      <button type='submit'></button>
    </div>
  </React.Fragment>
)

export default AddClass;