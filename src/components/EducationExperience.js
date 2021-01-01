import React, { Component } from 'react';
import edit from '../styles/edit.svg'
import trash from '../styles/trash-2.svg'
import cancel from '../styles/x-circle.svg'

class EducationExperience extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            editable: false,
            experience: {
                schoolName: this.props.data.schoolName,
                titleOfStudy: this.props.data.titleOfStudy,
                dateOfStudy: this.props.data.dateOfStudy
            }
        }

        this.toggleForm = this.toggleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.formView = this.formView.bind(this);
        this.textView = this.textView.bind(this);
    }

    toggleForm() {
        this.setState({editable: !this.state.editable})
    }

    handleSubmit(e) {
        e.preventDefault();
        let item = {...this.state.experience};
        this.props.handleEdit(this.props.index, item);
        this.toggleForm();
    }

    handleChange(e) {
        this.setState({
            experience: {
                ...this.state.experience,
                [e.target.name]: e.target.value
            }
        })
    }

    formView(){
        return <form className = "form-view"onSubmit = {this.handleSubmit}>
                <label htmlFor="schoolName">School Name:</label>
                <input type="text" 
                         name = "schoolName"
                         value = {this.state.experience.schoolName}
                         onChange = {this.handleChange}
                         />
                  <label htmlFor="titleOfStudy">Title of Study:</label>
                  <input type="text" 
                         name = "titleOfStudy"
                         value = {this.state.experience.titleOfStudy}
                         onChange = {this.handleChange}
                         />
                <label htmlFor="dateOfStudy">Date of Study:</label>
                  <input type="text" 
                         name = "dateOfStudy"
                         value = {this.state.experience.dateOfStudy}
                         onChange = {this.handleChange}
                         />
                 <input type="submit" value="Save"/>
                 <button className = "cancel" onClick = {this.toggleForm}>
                     <img src={cancel} alt=""/>
                     Cancel
                </button>
               </form>
    }

    textView(){

        return <div className = "education-experience" >
                    <h2>{this.state.experience.schoolName}</h2>
                    <p>{this.state.experience.titleOfStudy} - {this.state.experience.dateOfStudy}</p>
                    <img 
                        onClick = {this.toggleForm}
                        src = {edit}
                        className = "edit-experience"
                    />

                    <img 
                        onClick = {() => 
                            this.props.handleDelete(this.props.index)}
                        src = {trash}
                        className = "delete-experience"
                    />
                </div>
    }


    render() {
        return (
           <div className="">
               {this.state.editable ? this.formView() : this.textView()}
           </div> 
        );
    }
}

export default EducationExperience;