import React, {Component, Fragment} from 'react';
import Header from "./Components/Header/Header";
import {Route, Switch} from "react-router-dom";
import NewContact from "./Components/Container/NewContact/NewContact";
import Contacts from "./Components/Container/Contacts/Contacts";
import ContactsModal from "./Components/Container/EditAndModal/EditAndModal";

class App extends Component{
  render() {
    return (
        <Fragment>
        <Header/>
        <Switch>
            <Route path="/" exact component={Contacts}/>
            <Route path="/new/contact" exact component={NewContact}/>
            <Route path="/contacts/modal:id" component={ContactsModal}/>
        </Switch>
        </Fragment>
    )
  }
}

export default App;