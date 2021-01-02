import React, { useState } from 'react';
import JobExperience from './JobExperience'
import plus from '../styles/plus.svg';

const  JobFields = () => {

    const [experiences, setExperiences] = useState([]);
    const [formVisible, setFormVisible] = useState(false);
    const [newExperience, setNewExperience] = useState({
                                                companyName: "",
                                                positionTitle: "",
                                                description: "",
                                                startDate: "",
                                                endDate: ""
                                            })


    const toggleForm = () => {
        setFormVisible(!formVisible);
    }

    const newForm = () => {
        return <form className = "form-view" onSubmit = {handleSubmit}>
                  <label htmlFor="companyName">Company:</label>
                  <input type="text" 
                         name = "companyName"
                         value = {newExperience.companyName}
                         onChange = {handleChange}
                         />
                  <label htmlFor="positionTitle">Position Title:</label>
                  <input type="text" 
                         name = "positionTitle"
                         value = {newExperience.positionTitle}
                         onChange = {handleChange}
                         />
                  <label htmlFor="description">Description</label>
                  <textarea
                         name = "description"
                         value = {newExperience.dateOfStudy}
                         onChange = {handleChange}
                         />

                <label htmlFor="description">Start Date:</label>
                <input type="text" 
                         name = "startDate"
                         value = {newExperience.startDate}
                         onChange = {handleChange}
                         />
                <label htmlFor="description">End Date:</label>
                <input type="text" 
                         name = "endDate"
                         value = {newExperience.endDate}
                         onChange = {handleChange}
                         placeholder = "Leave empty for ongoing jobs"
                         />
                 <input type="submit" value="Create"/>
               </form>
    }

    const handleChange = (e) => {
        setNewExperience({
            ...newExperience,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setExperiences([
            ...experiences,
            newExperience
        ]);
        toggleForm();
        setNewExperience({
            companyName: "",
            positionTitle: "",
            description: "",
            startDate: "",
            endDate: ""
        })
    }

    const handleDelete = (index) => {
        let experiencesCopy = [...experiences];
        experiencesCopy.splice(index, 1);
        setExperiences(experiencesCopy);
    }


    const handleEdit = (index, item) => {
        let experiencesCopy = [...experiences];
        experiencesCopy[index] = item;
        setExperiences(experiencesCopy);
    }

        return (
            <div className = "job-fields">
                <h2 className="section-title">Jobs</h2>
                <img 
                    onClick = {toggleForm} 
                    className = "add-button"
                    src = {plus}
                    alt = ""
                />

                {formVisible ? newForm() : ""}
                {experiences.map((item, index) => {
                    return <JobExperience 
                                data = {item} 
                                index = {index}
                                key = {index} 
                                handleEdit = {handleEdit}
                                handleDelete = {handleDelete}/>
                })}
            </div>
        );
}

export default JobFields;