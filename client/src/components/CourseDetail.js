import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function CourseDetail (props) {
    const {courseId} = useParams();
    const [courseDetails, setCourseDetails] = useState([]);
    const {context} = props;

    useEffect(() => {
        context.data.getCourseDetails(courseId)
        .then(setCourseDetails({courseDetails}));
        }, [context.data, courseId, courseDetails]);

        return(
            <div class="wrap main--grid">
            <h1>{courseDetails.title}</h1>
            </div>
        );

}