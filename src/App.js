import { React, Component } from 'react';
import CourseForm from './components/courseForm/courseForm';
import CourseList from './components/courseList/courseList';

class App extends Component {
  state = {
    courses:[
      {name:'HTML'},
      {name:'CSS'},
      {name:'JQuery'},
    ],
    current:''
  }

  updateCourse = (e) =>{
    this.setState({
      current: e.target.value
    })
  }

  handleChange = (e) =>{
    e.preventDefault();
    if (e.target.name.value === ''){
      return false;
    }else{
      this.addCourse(this.state)
      this.setState({
        current: ''
      })
    }
  }
  addCourse = (e) =>{
      let current = this.state.current;
      let courses = this.state.courses;
      courses.push({name:current});

      this.setState({
        courses,
        current:''
      });

  }
    deleteCourse = (index) =>{
      let courses = this.state.courses;
      courses.splice(index, 1);
      this.setState({
        courses
      })
    }

    editCourse = (index, value) =>{
      let courses = this.state.courses;
      let course = courses[index];
      course['name'] = value;
      this.setState({
        courses
      })
    }

  render() {
      const  {courses} = this.state;
      let length =courses.length;
      const courseList = length ? (courses.map((course,index)=>{
        return <CourseList details={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
      })
      ): <p> No Courses to show</p>
    return (
      <section className="App">
      <h2>Add Courses</h2>
      <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} handleChange={this.handleChange} />
      <ul>
        {courseList}
      </ul>
    </section>
  );
}

}
export default App;
