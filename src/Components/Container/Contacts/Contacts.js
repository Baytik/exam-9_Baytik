import React, {Component} from 'react';
import './Contacts.css';
import {getContacts} from "../../../store/actions/contactsAction";
import {connect} from "react-redux";

class Contacts extends Component {

    async componentDidMount() {
        await this.props.getContacts();
    }

    modalClick = () => {
      return (
          <div>
              Hello
          </div>
      )
    };

    render() {
        console.log(this.props.contacts);
        return (
            <div className="Contacts">
                {Object.keys(this.props.contacts).map(contact => (
                    <div className="contacts-block" key={contact}>
                        <img src={this.props.contacts[contact].photo} alt=""/>
                        <span onClick={this.modalClick}>{this.props.contacts[contact].name}</span>
                    </div>
                ))}
            </div>
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