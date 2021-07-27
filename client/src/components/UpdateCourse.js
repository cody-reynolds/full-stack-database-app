import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

function UpdateCourse (props) {
    const {id} = useParams();
    const [courseDetails, setCourseDetails] = useState([]);
    const [user, setUser] = useState([])
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');
    const [errors, setErrors] = useState([]);
    const {context} = props;
    const {authenticatedUser, authenticatedPassword} = context;
    const [userId] = useState(authenticatedUser.id)
    const [emailAddress] = useState(authenticatedUser.emailAddress);
    const [password] = useState(authenticatedPassword);


    useEffect(() => {
      context.data.getCourseDetails(id)
      .then(courseData => {
          setCourseDetails(courseData);
          setUser(courseData.user);
          setTitle(courseData.title);
          setDescription(courseData.description);
          setEstimatedTime(courseData.estimatedTime);
          setMaterialsNeeded(courseData.materialsNeeded);
        })
    }, []);


    function submit() {
        const {context} = props;

        const course = {
          title,
          description,
          estimatedTime,
          materialsNeeded,
          userId
        };

        context.data.updateCourse(courseDetails.id, course, emailAddress, password)

        .then(errors => {
          if(errors.length) { // If there even are any errors,
            setErrors({errors}); // Put them in the errors state of this component.
          } else { // If there weren't any errors (the length of the array is 0)
            props.history.push(`/courses/${courseDetails.id}`)
          }
        })
        .catch( err => {
          console.log(err);
          props.history.push('/error');
        });
    }

    function cancel() {
        props.history.push(`/courses/${courseDetails.id}`);
    }

    return(
    <div className="wrap">
        <h2>Update Course</h2>
        <form onSubmit={(e) => {e.preventDefault(); submit()}}>
            <div className="main--flex">

                <div>
                    <label for="courseTitle">Course Title</label>
                    <input id="courseTitle" name="courseTitle" type="text" value={title} onChange={(e) => {setTitle(e.target.value);}}/>
                    <p>By {user.firstName} {user.lastName}</p>

                    <label for="courseDescription">Course Description</label>
                    <textarea id="courseDescription" name="courseDescription" defaultValue={description} onChange={(e) => {setDescription(e.target.value);}}></textarea>
                </div>

                <div>
                    <label for="estimatedTime">Estimated Time</label>
                    <input id="estimatedTime" name="estimatedTime" type="text" value={estimatedTime} onChange={(e) => {setEstimatedTime(e.target.value);}}/>
                    <label for="materialsNeeded">Materials Needed</label>
                    <textarea id="materialsNeeded" name="materialsNeeded" defaultValue={materialsNeeded} onChange={(e) => {setMaterialsNeeded(e.target.value);}}></textarea>
                </div>

            </div>

            <button class="button" type="submit">Update Course</button>
            <button class="button button-secondary" onClick={cancel}>Cancel</button>
        </form>
    </div>
    )

}

export default UpdateCourse;