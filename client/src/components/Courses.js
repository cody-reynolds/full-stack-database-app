import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Courses extends Component {

    state = {
        courseData: []
      };

    componentDidMount() {
        this.props.context.data.getCourses()
        .then(courseData => this.setState({courseData}));
        }

    render() {
        const {courseData} = this.state;

    return(
        <main>
                <div class="wrap main--grid">
                {courseData.map(course => (
                <Link class="course--module course--link" to={`/courses/${course.id}`}>
                    <h2 class="course--label">Course</h2>
                    <h3 class="course--title">{course.title}</h3>
                </Link>
                ))}
                <Link class="course--module course--add--module" to="/courses/create">
                    <span class="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 13 13" class="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                        New Course
                    </span>
                </Link>
            </div>
        </main>
    );
    }
}