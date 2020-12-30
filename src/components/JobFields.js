import React, { Component } from 'react';
import JobExperience from './JobExperience'

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
        return <form onSubmit = {this.handleSubmit}>
                  <input type="text" 
                         name = "companyName"
                         value = {this.state.newExperience.companyName}
                         onChange = {this.handleChange}
                         />
                  <input type="text" 
                         name = "positionTitle"
                         value = {this.state.newExperience.positionTitle}
                         onChange = {this.handleChange}
                         />
                  <textarea
                         name = "description"
                         value = {this.state.newExperience.dateOfStudy}
                         onChange = {this.handleChange}
                         />
                 <input type="text" 
                         name = "startDate"
                         value = {this.state.newExperience.startDate}
                         onChange = {this.handleChange}
                         />
                <input type="text" 
                         name = "endDate"
                         value = {this.state.newExperience.endDate}
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
            <div>
                <button onClick = {this.toggleForm}>Add Job</button>
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