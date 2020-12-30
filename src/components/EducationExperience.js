import React, { Component } from 'react';


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
        return <form onSubmit = {this.handleSubmit}>
                <input type="text" 
                         name = "schoolName"
                         value = {this.state.experience.schoolName}
                         onChange = {this.handleChange}
                         />
                  <input type="text" 
                         name = "titleOfStudy"
                         value = {this.state.experience.titleOfStudy}
                         onChange = {this.handleChange}
                         />
                  <input type="text" 
                         name = "dateOfStudy"
                         value = {this.state.experience.dateOfStudy}
                         onChange = {this.handleChange}
                         />
                 <input type="submit" value="Save"/>
                 <button onClick = {this.toggleForm}>Cancel</button>
               </form>
    }

    textView(){

        return <div className = "education-experience" >
                    <h2>{this.state.experience.schoolName}</h2>
                    <p>{this.state.experience.titleOfStudy}</p>
                    <p>{this.state.experience.dateOfStudy}</p>
                    <button onClick = {this.toggleForm}>
                    Edit
                    </button>
                    <button 
                        onClick = {() => 
                            this.props.handleDelete(this.props.index)}
                    >
                    Delete
                    </button>
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