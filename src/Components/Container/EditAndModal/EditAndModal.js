import React, {Component} from 'react';
import {contactsDelete, editContacts, getContacts} from "../../../store/actions/contactsAction";
import {connect} from "react-redux";
import './EditAndModal.css';

class EditAndModal extends Component {

    state = {
        name: '',
        phone: '',
        email: '',
        photo: '',
    };

   async componentDidMount() {
       const id = this.props.match.params.id;
       await this.props.getContacts();
       await this.props.contacts[id] && this.setState({
           name: this.props.contacts[id].name,
           phone: this.props.contacts[id].phone,
           email: this.props.contacts[id].email,
           photo: this.props.contacts[id].photo,
       });
    }
    editContacts = async () => {
        const id = this.props.match.params.id;
        const Edit = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            photo: this.state.photo
        };
        await this.props.editContacts(id, Edit);
        this.props.history.push('/');
    };

    changeInputHandler = event => this.setState({[event.target.name]: event.target.value});

    contactsDelete = async () => {
        Object.keys(this.props.contacts).map(() => {
            const id = this.props.match.params.id;
             this.props.contactsDelete(id);
        });
      await this.props.history.push('/');
    };

    render() {
        return (
            <div className="Contacts-Edit">
                <h2>Edit your profile</h2>
                <div className="input-block">
                    <div>
                        <span>Name</span>
                        <input type="text"className="input-1" name="name" value={this.state.name} onChange={this.changeInputHandler}/>
                    </div>
                    <div>
                        <span>Phone</span>
                        <input type="text" className="input-2" name="phone" value={this.state.phone} onChange={this.changeInputHandler}/>
                    </div>
                    <div>
                        <span>Email</span>
                        <input type="text" className="input-3" name="email" value={this.state.email} onChange={this.changeInputHandler}/>
                    </div>
                    <div>
                        <span>Photo</span>
                        <input type="text" className="input-4" name="photo" value={this.state.photo} onChange={this.changeInputHandler}/>
                    </div>
                    <div>
                        <span>Photo preview</span>
                    </div>
                    <div className="footer-contact">
                        <button onClick={(id) => this.contactsDelete(id)}>Delete</button>
                        <button onClick={this.editContacts}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
});

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(getContacts()),
    editContacts: (id, contact) => dispatch(editContacts(id, contact)),
    contactsDelete: id => dispatch(contactsDelete(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAndModal);