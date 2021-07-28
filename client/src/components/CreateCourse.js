import React, {useState} from 'react';
// import Form from './Form';

function CreateCourse (props) {
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

    async function submit() {
        const {context} = props;

        //New Course Payload
        const course = {
          title,
          description,
          estimatedTime,
          materialsNeeded,
          userId
        };

        await context.data.createCourse(course, emailAddress, password)

        .then(errors => {
          if(errors.length) {
            return setErrors(errors); // DON'T make errors an object {errors}, this will break validation
          } else {
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

    function ErrorsDisplay() {
      let errorsDisplay = null;

      if (errors.length) {
        errorsDisplay = (
          <div className="validation--errors">
            <h2>Validation error(s)</h2>
            <div>
              <ul>
                {errors.map((error, i) => <li key={i}>{error}</li>)}
              </ul>
            </div>
          </div>
        );
      }

      return errorsDisplay;
    }

    return(
    <div className="wrap">
        <h2>Create Course</h2>
        <ErrorsDisplay />
        <form onSubmit={(e) => {
          e.preventDefault();
          submit()}}>
            <div className="main--flex">

                <div>
                    <label for="courseTitle">Course Title</label>
                    <input id="courseTitle" name="courseTitle" type="text" defaultValue="" onChange={(e) => {setTitle(e.target.value);}}/>
                    <p>By {authenticatedUser.firstName} {authenticatedUser.lastName}</p>

                    <label for="courseDescription">Course Description</label>
                    <textarea id="courseDescription" name="courseDescription" defaultValue="" onChange={(e) => {setDescription(e.target.value);}}></textarea>
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

    //  Uses Form child component - causes Delete handler to fail in Course Details for unknown reasons.
    //<div className="wrap">
    //     <h2>Create Course</h2>
    //     <Form
    //       cancel={cancel}
    //       errors={errors}
    //       submit={submit}
    //       submitButtonText="Create Course"
    //       elements={() => ( //Elements is a "render prop"
    //         <React.Fragment>
    //           <div className="main--flex">

    //             <div>
    //                 <label for="courseTitle">Course Title</label>
    //                 <input id="courseTitle" name="courseTitle" type="text" defaultValue="" onChange={(e) => {setTitle(e.target.value);}}/>
    //                 <p>By {authenticatedUser.firstName} {authenticatedUser.lastName}</p>

    //                 <label for="courseDescription">Course Description</label>
    //                 <textarea id="courseDescription" name="courseDescription" defaultValue="" onChange={(e) => {setDescription(e.target.value);}}></textarea>
    //             </div>

    //             <div>
    //                 <label for="estimatedTime">Estimated Time</label>
    //                 <input id="estimatedTime" name="estimatedTime" type="text" defaultValue="" onChange={(e) => {setEstimatedTime(e.target.value);}}/>
    //                 <label for="materialsNeeded">Materials Needed</label>
    //                 <textarea id="materialsNeeded" name="materialsNeeded" defaultValue="" onChange={(e) => {setMaterialsNeeded(e.target.value);}}></textarea>
    //             </div>

    //           </div>
    //         </React.Fragment>
    //       )} />
    //   </div>