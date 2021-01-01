import React, { Component } from 'react';
import editImage from '../styles/edit.svg'


class GeneralInfo extends Component {
    constructor(){
        super()

        this.state = {
            info: {
                name: "",
                email: "",
                phone: ""
            },
            editable: false
        }
        this.formView = this.formView.bind(this);
        this.textView = this.textView.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({
            info: {
                ...this.state.info,
                [e.target.name]: e.target.value
            }
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({editable: false})
    }

    formView(info) {
        return <form className = "form-view">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                           value = {info.name} 
                           name = "name"
                           onChange = {this.handleChange}
                           />
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                           value = {info.email} 
                           name = "email"
                           onChange = {this.handleChange}
                           />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" 
                           value = {info.phone} 
                           name = "phone"
                           onChange = {this.handleChange}
                           />
                    <input type="submit" 
                           value="Save"
                           onClick= {this.handleSubmit}
                           />
               </form>
    }

    textView(info) {
        return <div className = "text-view">
                    <p>Name: <span>{info.name}</span></p>
                    <p>Email: <span>{info.email}</span></p>
                    <p>Phone: <span>{info.phone}</span></p>
                    <img 
                        onClick = { () => this.setState({editable: true})}
                        className = "edit-button"
                        src = {editImage}/>

               </div>
    }





    render() {
        const { info } = this.state;
        return (
            <div className = "general-info">
                <h2 className="section-title">General Info</h2>
                {this.state.editable ? this.formView(info) : this.textView(info)}
            </div>
        );
    }
}

export default GeneralInfo;