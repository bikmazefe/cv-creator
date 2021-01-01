import React, { Component } from 'react';
import EducationExperience from './EducationExperience'
import plus from '../styles/plus.svg';

class Education extends Component {
    constructor(){
        super()

        this.state = {
            experiences: [],
            formVisible: false,
            newExperience: {
                schoolName: "",
                titleOfStudy: "",
                dateOfStudy: ""
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.newForm = this.newForm.bind(this);
    }

    toggleForm() {
        this.setState({formVisible: !this.state.formVisible})
    }

    newForm(){
        return <form className = "form-view" onSubmit = {this.handleSubmit}>
                  <label htmlFor="schoolName">School Name:</label>
                  <input type="text" 
                         name = "schoolName"
                         value = {this.state.newExperience.schoolName}
                         onChange = {this.handleChange}
                         />
                  <label htmlFor="titleOfStudy">Title of Study:</label>
                  <input type="text" 
                         name = "titleOfStudy"
                         value = {this.state.newExperience.titleOfStudy}
                         onChange = {this.handleChange}
                         />
                  <label htmlFor="schoolName">Class:</label>
                  <input type="text" 
                         name = "dateOfStudy"
                         value = {this.state.newExperience.dateOfStudy}
                         onChange = {this.handleChange}
                         />
                 <input type="submit" value="Create"/>
               </form>
    }

    handleChange(e) {
        this.setState({
            newExperience: {
                ...this.state.newExperience,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const newExperience = {...this.state.newExperience}
        this.setState({
           experiences: [...this.state.experiences, newExperience]
        })
        this.toggleForm();
        this.setState({
            newExperience: {
                    schoolName: "",
                    titleOfStudy: "",
                    dateOfStudy: ""
            }
        })
    }

    handleDelete(index) {
        let experiencesCopy = [...this.state.experiences];
        experiencesCopy.splice(index, 1);
        this.setState({experiences: experiencesCopy})
    }


    handleEdit(index, item) {
        let experiencesCopy = [...this.state.experiences];
        experiencesCopy[index] = item;
        this.setState({experiences: experiencesCopy});
    }

    render() {
        return (
            <div className = "education-fields">
                <h2 className="section-title">Education</h2>
                <img 
                    onClick = {this.toggleForm} 
                    className = "add-button"
                    src = {plus}
                />
                {this.state.formVisible ? this.newForm() : ""}
                {this.state.experiences.map((item, index) => {
                    return <EducationExperience 
                                data = {item} 
                                index = {index}
                                key = {index}  
                                handleEdit = {this.handleEdit}
                                handleDelete = {this.handleDelete}/>
                })}
            </div>
        );
    }
}

export default Education;