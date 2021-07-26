import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function CourseDetail (props) {
    const {id} = useParams();
    const [courseDetails, setCourseDetails] = useState([]);
    const [user, setUser] = useState([])
    const {context} = props;

    useEffect(() => {
      context.data.getCourseDetails(id)
      .then(courseData => {
          setCourseDetails(courseData);
          setUser(courseDetails.user);
        })
      .then(console.log(courseDetails))
      .then(console.log(user));
    }, []);

        return(
            <main>
                <div className="actions--bar">
                    <div className="wrap">
                        <a className="button" href="update-course.html">Update Course</a>
                        <a className="button" href="delete-course.html">Delete Course</a>
                        <Link className="button button-secondary" to="/">Return to List</Link>
                    </div>
                </div>
                <div class="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div class="main--flex">
                        <div>
                            <h3 class="course--detail--title">Course</h3>
                            <h4 class="course--name">{courseDetails.title}</h4>
                            <p>By {user.firstName} {user.lastName}</p>
                            <p>{courseDetails.description}</p>
                        </div>
                        <div>
                            <h3 class="course--detail--title">Estimated Time</h3>
                            <p>{courseDetails.estimatedTime}</p>

                            <h3 class="course--detail--title">Materials Needed</h3>
                            <ul class="course--detail--list">
                                <li>{courseDetails.materialsNeeded}</li>
                            </ul>
                        </div>
                    </div>
                </form>
                </div>
            </main>
        );
}