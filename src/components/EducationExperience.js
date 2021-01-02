import React, { useState } from 'react';
import edit from '../styles/edit.svg'
import trash from '../styles/trash-2.svg'
import cancel from '../styles/x-circle.svg'

const EducationExperience = (props) => {

        const [editable, setEditable] = useState(false);
        const [experience, setExperience] = useState({
                                                schoolName: props.data.schoolName,
                                                titleOfStudy: props.data.titleOfStudy,
                                                dateOfStudy: props.data.dateOfStudy
                                            });

    const toggleForm = () => {
        setEditable(!editable);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let item = {...experience};
        props.handleEdit(props.index, item);
        toggleForm();
    }

    const handleChange = (e) => {
        setExperience({
            ...experience,
            [e.target.name]: e.target.value
        })
    }

    const handleCancel = () => {
        toggleForm();
        setExperience({
            schoolName: props.data.schoolName,
            titleOfStudy: props.data.titleOfStudy,
            dateOfStudy: props.data.dateOfStudy
        })
    }

   const formView = () => {
        return <form className = "form-view"onSubmit = {handleSubmit}>
                <label htmlFor="schoolName">School Name:</label>
                <input type="text" 
                         name = "schoolName"
                         value = {experience.schoolName}
                         onChange = {handleChange}
                         />
                  <label htmlFor="titleOfStudy">Title of Study:</label>
                  <input type="text" 
                         name = "titleOfStudy"
                         value = {experience.titleOfStudy}
                         onChange = {handleChange}
                         />
                <label htmlFor="dateOfStudy">Date of Study:</label>
                  <input type="text" 
                         name = "dateOfStudy"
                         value = {experience.dateOfStudy}
                         onChange = {handleChange}
                         />
                 <input type="submit" value="Save"/>
                 <button className = "cancel" onClick = {handleCancel}>
                     <img src={cancel} alt=""/>
                     Cancel
                </button>
               </form>
    }

    const textView = () => {

        return <div className = "education-experience" >
                    <h2>{experience.schoolName}</h2>
                    <p>{experience.titleOfStudy} - {experience.dateOfStudy}</p>
                    <img 
                        onClick = {toggleForm}
                        src = {edit}
                        className = "edit-experience"
                        alt = ""
                    />

                    <img 
                        onClick = {() => 
                            props.handleDelete(props.index)}
                        src = {trash}
                        className = "delete-experience"
                        alt = ""
                    />
                </div>
    }


    return (
        <div className="">
            {editable ? formView() : textView()}
        </div> 
    );
}

export default EducationExperience;