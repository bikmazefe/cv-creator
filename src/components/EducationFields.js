import React, { Component } from 'react';
import EducationExperience from './EducationExperience'

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
        return <form onSubmit = {this.handleSubmit}>
                  <input type="text" 
                         name = "schoolName"
                         value = {this.state.newExperience.schoolName}
                         onChange = {this.handleChange}
                         />
                  <input type="text" 
                         name = "titleOfStudy"
                         value = {this.state.newExperience.titleOfStudy}
                         onChange = {this.handleChange}
                         />
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
            <div>
                <button onClick = {this.toggleForm}>Add Education</button>
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