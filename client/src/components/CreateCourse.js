import React, {useState} from 'react';

function CreateCourse (props) {
    const [courseTitle, setCourseTitle] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');
    const [errors, setErrors] = useState([]);
    const {context} = props;
    const {authenticatedUser} = context;
    const [userId, setUserId] = useState(authenticatedUser.id)
    const [emailAddress, setEmailAddress] = useState(authenticatedUser.emailAddress);
    const [password, setPassword] = useState(authenticatedUser.password);

    function submit() {
        const {context} = props;

        const title = courseTitle;
        const description = courseDescription;
        const time = estimatedTime;
        const materials = materialsNeeded;
        const id = userId;
        const email = emailAddress;
        const pass = password;

        //New Course Payload
        const course = {
          title,
          description,
          time,
          materials,
          id
        };

        context.data.createCourse(course, email, pass)

        .then(errors => {
          if(errors.length) { // If there even are any errors,
            setErrors({errors}); // Put them in the errors state of this component.
          } else { // If there weren't any errors (the length of the array is 0)
            context.data.getCourses();
            props.history.push('/')
          }
        })
        .catch( err => {
          console.log(err);
          props.history.push('/error');
        });
    }

    function cancel() {
        props.history.push('/');
    }

    return(
    <div className="wrap">
        <h2>Create Course</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          submit()}}>
            <div className="main--flex">

                <div>
                    <label for="courseTitle">Course Title</label>
                    <input id="courseTitle" name="courseTitle" type="text" defaultValue="" onChange={(e) => {setCourseTitle(e.target.value);}}/>
                    <p>By {authenticatedUser.firstName} {authenticatedUser.lastName}</p>

                    <label for="courseDescription">Course Description</label>
                    <textarea id="courseDescription" name="courseDescription" defaultValue="" onChange={(e) => {setCourseDescription(e.target.value);}}></textarea>
                </div>

                <div>
                    <label for="estimatedTime">Estimated Time</label>
                    <input id="estimatedTime" name="estimatedTime" type="text" defaultValue="" onChange={(e) => {setEstimatedTime(e.target.value);}}/>
                    <label for="materialsNeeded">Materials Needed</label>
                    <textarea id="materialsNeeded" name="materialsNeeded" defaultValue="" onChange={(e) => {setMaterialsNeeded(e.target.value);}}></textarea>
                </div>

            </div>

            <button className="button" type="submit">Create Course</button>
            <button className="button button-secondary" onClick={cancel}>Cancel</button>
        </form>
    </div>
    )

}

export default CreateCourse;