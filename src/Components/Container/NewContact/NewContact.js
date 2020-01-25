import React, {Component} from 'react';
import './NewContact.css';
import {NavLink} from "react-router-dom";
import axiosAPI from "../../../axiosApi";

class NewContact extends Component {

    state = {
        name: '',
        phone: '',
        email: '',
        photo: '',
    };

    changeInputHandler = event => this.setState({[event.target.name]: event.target.value});

    newContact = async () => {
        const Contact = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            photo: this.state.photo
        };
        await axiosAPI.post('.json', Contact);
        this.props.history.push('/')
    };

    render() {
        return (
            <div className="new-contact-block">
                <h2>Add new contact</h2>
                <div className="input-block">
                    <div>
                        <span>Name</span>
                        <input type="text"className="input-1" name="name" onChange={this.changeInputHandler}/>
                    </div>
                    <div>
                        <span>Phone</span>
                        <input type="text" className="input-2" name="phone" onChange={this.changeInputHandler}/>
                    </div>
                    <div>
                        <span>Email</span>
                        <input type="text" className="input-3" name="email" onChange={this.changeInputHandler}/>
                    </div>
                    <div>
                        <span>Photo</span>
                        <input type="text" className="input-4" name="photo" onChange={this.changeInputHandler}/>
                    </div>
                    <div>
                        <span>Photo preview</span>
                        <img src={this.state.photo} className="preview-img"/>
                    </div>
                    <div className="footer-contact">
                        <button onClick={this.newContact}>Save</button>
                        <NavLink to="/">Back to contacts</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewContact;