import React from 'react';

const CourseForm = (props) => {
    return(
        <form onSubmit={props.handleChange}>
            <input type='text' id='name' value={props.current} onChange={props.updateCourse} />
            <button type='submit'> Add Course</button>
        </form>
    )
}

export default CourseForm;