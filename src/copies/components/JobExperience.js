import React, { Component } from 'react';
import edit from '../styles/edit.svg'
import trash from '../styles/trash-2.svg'
import cancel from '../styles/x-circle.svg'


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
        this.handleCancel = this.handleCancel.bind(this);
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

    handleCancel() {
        this.toggleForm();
        this.setState({
            experience:  {
                companyName: this.props.data.companyName,
                positionTitle: this.props.data.positionTitle,
                description: this.props.data.description,
                startDate: this.props.data.startDate,
                endDate: this.props.data.endDate
            }
        })
    }

    formView(){
        return <form onSubmit = {this.handleSubmit}>
                  <input type="text" 
                         name = "companyName"
                         value = {this.state.experience.companyName}
                         onChange = {this.handleChange}
                         required
                         />
                  <input type="text" 
                         name = "positionTitle"
                         value = {this.state.experience.positionTitle}
                         onChange = {this.handleChange}
                         required
                         />
                  <textarea
                         name = "description"
                         value = {this.state.experience.dateOfStudy}
                         onChange = {this.handleChange}
                         />
                 <input type="text" 
                         name = "startDate"
                         value = {this.state.experience.startDate}
                         onChange = {this.handleChange}
                         required
                         
                         />
                <input type="text" 
                         name = "endDate"
                         value = {this.state.experience.endDate}
                         onChange = {this.handleChange}
                         />
                <input type="submit" value="Edit"/>
                 <button onClick = {this.handleCancel}>Cancel</button>
               </form>
    }

    textView(){

        return <div className = "education-experience" >
                    <h2>{this.state.experience.companyName}</h2>
                    <p>{this.state.experience.positionTitle} | {this.state.experience.startDate} - {this.state.experience.endDate || "..."}</p>
                    <p className = "description">{this.state.experience.description}</p>
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

export default JobExperience;