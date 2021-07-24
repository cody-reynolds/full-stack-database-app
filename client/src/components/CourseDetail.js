import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function CourseDetail (props) {
    const {courseId} = useParams();
    const [courseDetails, setCourseDetails] = useState([]);

    useEffect(() => {
        this.props.context.data.getCourseDetails(courseId)
        .then(courseDetails => setCourseDetails({courseDetails}));
        console.log(courseDetails);
        });

        return(
            <div class="wrap main--grid">
            <h1>{courseDetails.title}</h1>
            </div>
        );

}