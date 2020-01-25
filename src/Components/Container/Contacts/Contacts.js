import React, {Component, Fragment} from 'react';
import './Contacts.css';
import {getContacts} from "../../../store/actions/contactsAction";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

class Contacts extends Component {

    state = {
        modalShow: false,
    };

    async componentDidMount() {
        const id = this.props.match.params;
        await this.props.getContacts();
    }

    render() {
        return (
            <Fragment>
            <div className="Contacts">
                {this.props.contacts &&
                    Object.keys(this.props.contacts).map(contact => (
                    <div className="contacts-block" key={contact}>
                        <img src={this.props.contacts[contact].photo} alt="images"/>
                        <NavLink to={`/contacts/modal${contact}`}>
                        <span>{this.props.contacts[contact].name}</span>
                        </NavLink>
                    </div>
                ))}
            </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
  contacts: state.contacts.contacts,
});

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);