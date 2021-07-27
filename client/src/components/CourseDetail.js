import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';


export default function CourseDetail (props) {
    const {id} = useParams();
    const [courseDetails, setCourseDetails] = useState([]);
    const [user, setUser] = useState([])
    const {context} = props;

    useEffect(() => {
      context.data.getCourseDetails(id)
      .then(courseData => {
          setCourseDetails(courseData);
          setUser(courseData.user);
        })
    }, []);

        return(
            <main>
                <div className="actions--bar">
                    <div className="wrap">
                        <Link className="button" to={`/courses/${id}/update/`}>Update Course</Link>
                        <Link className="button" to={`/courses/${id}/delete`}>Delete Course</Link>
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
                            <p><ReactMarkdown>{courseDetails.description}</ReactMarkdown></p>
                        </div>
                        <div>
                            <h3 class="course--detail--title">Estimated Time</h3>
                            <p>{courseDetails.estimatedTime}</p>

                            <h3 class="course--detail--title">Materials Needed</h3>
                            <ul class="course--detail--list">
                            <ReactMarkdown>{courseDetails.materialsNeeded}</ReactMarkdown>
                            </ul>
                        </div>
                    </div>
                </form>
                </div>
            </main>
        );
}