import React from 'react';
import Button from '../styles/button';

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
  }

  render() {
    return (
      <div className='inner'>
        <form onSubmit={this.createClass}>
          <label name='class'>Class Name</label>
          <input name='class' type='text' ref={this.classRef} placeholder='enter the class name'></input>
          <label name='students'>Student List</label>
          <input type='text' name='students' ref={this.studentsRef} placeholder='enter student names separated by commas'></input>
          <Button type='submit'></Button>
        </form>
      </div>
    )
  }
}

export default AddClassForm;