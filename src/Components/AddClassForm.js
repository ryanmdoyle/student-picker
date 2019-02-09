import React from 'react';
import styled from 'styled-components';

import Button from '../styles/button';

const Form = styled.form`
  label {                                                                       
    font-weight: bold;
    display: block;
    width: 100%;
    margin-top: 1rem;
  }
  input {
    min-width: 50%;
    max-width: 70%;
    margin-top: 0.25rem;
    margin-right: auto;
    padding-left: 10px;
    border: 2px solid black;
    border-radius: 3px;
    height: 1.5rem;
  }
  button {
    display: block;
    margin: 1.5rem 0 0 0;
  }
`
class AddClassForm extends React.Component {
  classRef = React.createRef();
  studentsRef = React.createRef();

  createClass = (e) => {
    e.preventDefault();
    const studentList = this.studentsRef.current.value;
    const studentsNoSpaces = studentList.split(', '); // removes spaces between student names
    const studentsSplit = studentsNoSpaces.toString().split(','); //return array of students

    studentsSplit.map(student => {
      return (
        {
          student: student,
          count: 0
        }
      )
    })

    const newClass = {
      name: this.classRef.current.value,
      students: studentsSplit
    }
    // call the method in App to update the state
    this.props.addClass(newClass);
    e.currentTarget.reset()
  }

  render() {
    return (
      <div className='addClassForm'>
        <Form onSubmit={this.createClass}>
          <label name='class'>Class Name</label>
          <input name='class' type='text' ref={this.classRef} placeholder='enter the class name'></input>
          <label name='students'>Student List</label>
          <input type='text' name='students' ref={this.studentsRef} placeholder='enter student names separated by commas'></input>
          <Button type='submit'>Add Class!</Button>
        </Form>
      </div>
    )
  }
}

export default AddClassForm;