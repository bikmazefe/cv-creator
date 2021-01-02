import React, { useState } from 'react';
import edit from '../styles/edit.svg'
import trash from '../styles/trash-2.svg'
import cancel from '../styles/x-circle.svg'


const JobExperience = (props) =>  {

        const [editable, setEditable] = useState(false);
        const [experience, setExperience] = useState({
                                                companyName: props.data.companyName,
                                                positionTitle: props.data.positionTitle,
                                                description: props.data.description,
                                                startDate: props.data.startDate,
                                                endDate: props.data.endDate
                                            })


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
            companyName: props.data.companyName,
            positionTitle: props.data.positionTitle,
            description: props.data.description,
            startDate: props.data.startDate,
            endDate: props.data.endDate
        })
    }

    const formView = () => {
        return <form onSubmit = {handleSubmit}>
                  <input type="text" 
                         name = "companyName"
                         value = {experience.companyName}
                         onChange = {handleChange}
                         required
                         />
                  <input type="text" 
                         name = "positionTitle"
                         value = {experience.positionTitle}
                         onChange = {handleChange}
                         required
                         />
                  <textarea
                         name = "description"
                         value = {experience.dateOfStudy}
                         onChange = {handleChange}
                         />
                 <input type="text" 
                         name = "startDate"
                         value = {experience.startDate}
                         onChange = {handleChange}
                         required
                         
                         />
                <input type="text" 
                         name = "endDate"
                         value = {experience.endDate}
                         onChange = {handleChange}
                         />
                <input type="submit" value="Edit"/>
                <img 
                    onClick = {handleCancel}
                    src = {cancel}
                    alt = ""/>    
               </form>
    }

    const textView = () => {

        return <div className = "education-experience" >
                    <h2>{experience.companyName}</h2>
                    <p>{experience.positionTitle} | {experience.startDate} - {experience.endDate || "..."}</p>
                    <p className = "description">{experience.description}</p>
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

export default JobExperience;