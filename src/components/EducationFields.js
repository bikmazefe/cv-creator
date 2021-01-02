import React, { useState } from 'react';
import EducationExperience from './EducationExperience'
import plus from '../styles/plus.svg';

const Education = () => {


    const [experiences, setExperiences] = useState([]);
    const [formVisible, setFormVisible] = useState(false);
    const [newExperience, setNewExperience] =  useState({
                                                            schoolName: "",
                                                            titleOfStudy: "",
                                                            dateOfStudy: ""
                                                        });
                                                            
    const toggleForm = () => {
        setFormVisible(!formVisible);
    }

    const newForm = () => {
        return <form className = "form-view" onSubmit = {handleSubmit}>
                  <label htmlFor="schoolName">School Name:</label>
                  <input type="text" 
                         name = "schoolName"
                         value = {newExperience.schoolName}
                         onChange = {handleChange}
                         required
                         />
                  <label htmlFor="titleOfStudy">Title of Study:</label>
                  <input type="text" 
                         name = "titleOfStudy"
                         value = {newExperience.titleOfStudy}
                         onChange = {handleChange}
                         required
                         />
                  <label htmlFor="schoolName">Class:</label>
                  <input type="text" 
                         name = "dateOfStudy"
                         value = {newExperience.dateOfStudy}
                         onChange = {handleChange}
                         required
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
        let newExperienceCopy = {...newExperience}
        setExperiences([...experiences, newExperienceCopy])
        toggleForm();
        setNewExperience({
            schoolName: "",
            titleOfStudy: "",
            dateOfStudy: ""
        })
    }

    const handleDelete = (index) => {
        let experiencesCopy = [experiences];
        experiencesCopy.splice(index, 1);
        setExperiences(experiencesCopy);
    }


    const handleEdit = (index, item) => {
        let experiencesCopy = [...experiences];
        experiencesCopy[index] = item;
        setExperiences(experiencesCopy);
    }

    return (
        <div className = "education-fields">
            <h2 className="section-title">Education</h2>
            <img 
                onClick = {toggleForm} 
                className = "add-button"
                src = {plus}
                alt = ""
            />
            {formVisible ? newForm() : ""}
            {experiences.map((item, index) => {
                return <EducationExperience 
                            data = {item} 
                            index = {index}
                            key = {index}  
                            handleEdit = {handleEdit}
                            handleDelete = {handleDelete}/>
            })}
        </div>
    );
}

export default Education;