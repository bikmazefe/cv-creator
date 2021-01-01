import React, { Component } from 'react';
import JobExperience from './JobExperience'
import plus from '../styles/plus.svg';

class JobFields extends Component {
    constructor(){
        super()

        this.state = {
            experiences: [],
            formVisible: false,
            newExperience: {
                companyName: "",
                positionTitle: "",
                description: "",
                startDate: "",
                endDate: ""
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
                  <label htmlFor="companyName">Company:</label>
                  <input type="text" 
                         name = "companyName"
                         value = {this.state.newExperience.companyName}
                         onChange = {this.handleChange}
                         />
                  <label htmlFor="positionTitle">Position Title:</label>
                  <input type="text" 
                         name = "positionTitle"
                         value = {this.state.newExperience.positionTitle}
                         onChange = {this.handleChange}
                         />
                  <label htmlFor="description">Description</label>
                  <textarea
                         name = "description"
                         value = {this.state.newExperience.dateOfStudy}
                         onChange = {this.handleChange}
                         />

                <label htmlFor="description">Start Date:</label>
                <input type="text" 
                         name = "startDate"
                         value = {this.state.newExperience.startDate}
                         onChange = {this.handleChange}
                         />
                <label htmlFor="description">End Date:</label>
                <input type="text" 
                         name = "endDate"
                         value = {this.state.newExperience.endDate}
                         onChange = {this.handleChange}
                         placeholder = "Leave empty for ongoing jobs"
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
                companyName: "",
                positionTitle: "",
                description: "",
                startDate: "",
                endDate: ""
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
            <div className = "job-fields">
                <h2 className="section-title">Jobs</h2>
                <img 
                    onClick = {this.toggleForm} 
                    className = "add-button"
                    src = {plus}
                />

                {this.state.formVisible ? this.newForm() : ""}
                {this.state.experiences.map((item, index) => {
                    return <JobExperience 
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

export default JobFields;