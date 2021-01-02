import React, { useState } from 'react';
import editImage from '../styles/edit.svg'


const GeneralInfo =  () => {


    const [info, setInfo] = useState({ name: "", email: "", phone: "" });
    const [editable, setEditable] = useState(false);


    const handleChange = (e) =>  {
        setInfo({ 
            ...info, [e.target.name]: e.target.value
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setEditable(false);
    }

    const formView = () => {
        return <form className = "form-view">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                           value = {info.name} 
                           name = "name"
                           onChange = {handleChange}
                           />
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                           value = {info.email} 
                           name = "email"
                           onChange = {handleChange}
                           />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" 
                           value = {info.phone} 
                           name = "phone"
                           onChange = {handleChange}
                           />
                    <input type="submit" 
                           value="Save"
                           onClick= {handleSubmit}
                           />
               </form>
    }

    const textView = () => {
        return <div className = "text-view">
                    <p>Name: <span>{info.name}</span></p>
                    <p>Email: <span>{info.email}</span></p>
                    <p>Phone: <span>{info.phone}</span></p>
                    <img 
                        onClick = { () => setEditable(true)}
                        className = "edit-button"
                        src = {editImage}/>

               </div>
    }

    return (
        <div className = "general-info">
            <h2 className="section-title">General Info</h2>
            {editable ? formView() : textView()}
        </div>
    );

}

export default GeneralInfo;