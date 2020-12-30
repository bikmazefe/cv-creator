import React, { Component } from 'react';


class JobExperience extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            editable: false,
            experience: {
                companyName: this.props.data.companyName,
                positionTitle: this.props.data.positionTitle,
                description: this.props.data.description,
                startDate: this.props.data.startDate,
                endDate: this.props.data.endDate
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
                <input type="submit" value="Edit"/>
                 <button onClick = {this.toggleForm}>Cancel</button>
               </form>
    }

    textView(){

        return <div className = "education-experience" >
                    <h2>{this.state.experience.companyName}</h2>
                    <p>{this.state.experience.positionTitle}</p>
                    <p>{this.state.experience.description}</p>
                    <p>{this.state.experience.startDate}</p>
                    <p>{this.state.experience.endDate}</p>
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

export default JobExperience;