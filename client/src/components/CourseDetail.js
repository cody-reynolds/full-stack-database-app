import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function CourseDetail (props) {
    const courseId = useParams();
    const [courseDetails, setCourseDetails] = useState([]);
    const {context} = props;

    useEffect(() => {
      context.data.getCourseDetails(courseId.id)
      .then(courseData => setCourseDetails(courseData))
      .then(console.log(courseDetails));
    }, []);

        return(
            <main>
                <div class="actions--bar">
                    <div class="wrap">
                        <a class="button" href="update-course.html">Update Course</a>
                        <a class="button" href="delete-course.html">Delete Course</a>
                        <a class="button button-secondary" href="index.html">Return to List</a>
                    </div>
                </div>
                <div class="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div class="main--flex">
                        <div>
                            <h3 class="course--detail--title">Course</h3>
                            <h4 class="course--name">{courseDetails.title}</h4>
                            {/* <p>By {courseDetails.user.firstName} {courseDetails.user.lastName}</p> */}
                            <p>{courseDetails.description}</p>
                        </div>
                        <div>
                            <h3 class="course--detail--title">Estimated Time</h3>
                            <p>{courseDetails.estimatedTime}</p>

                            <h3 class="course--detail--title">Materials Needed</h3>
                            <ul class="course--detail--list">
                                {/* {courseDetails.materialsNeeded.map(material => (<li>{material}</li>))} */}
                            </ul>
                        </div>
                    </div>
                </form>
                </div>
            </main>
        );

}

//title
//description
//estimatedTime
//materialsNeeded