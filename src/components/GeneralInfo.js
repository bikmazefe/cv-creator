import React, { Component } from 'react';


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
        return <form>
                    <input type="text" 
                           value = {info.name} 
                           name = "name"
                           onChange = {this.handleChange}
                           />
                    <input type="email" 
                           value = {info.email} 
                           name = "email"
                           onChange = {this.handleChange}
                           />
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
        return <div className = "general-info">
                    <p>Name: <span>{info.name}</span></p>
                    <p>Email: <span>{info.email}</span></p>
                    <p>Phone: <span>{info.phone}</span></p>
                    <button onClick = { () => this.setState({editable: true})}>Edit</button>
               </div>
    }





    render() {
        const { info } = this.state;
        return (
            <div>
                {this.state.editable ? this.formView(info) : this.textView(info)}
            </div>
        );
    }
}

export default GeneralInfo;