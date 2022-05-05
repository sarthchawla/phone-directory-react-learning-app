import { Component } from "react";
import AddSubs from "./AddSubs";
import ShowSubs from "./ShowSubs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class PhoneDirectory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: props.contacts
        }

    }



    addContact = (newContact) => { // contact is an object = {id, name, phone}
        let contacts = this.state.contacts;

        if (contacts.length === 0) // 1. no contacts
        {
            newContact.id = 1;
        }
        else if (contacts.length > 0) // 2. more than one contact
        {
            // 3. get index of last contact
            let indexOfLastContact = contacts.length - 1;

            // 4. get last contact
            let lastAddedContact = contacts[indexOfLastContact];

            // 5. get id of last contact
            let idOfLastContact = lastAddedContact.id;

            // 6. increment id by 1
            newContact.id = idOfLastContact + 1;
        }

        contacts.push(newContact);

        this.setState({ contacts: contacts });

        console.log(contacts);
    }

    render() {
        return (
            // <Router>
            //     <div className="main-container">
            //         <Routes>
            //             {/* <Route exact path="/" element={<ShowSubs myContacts={this.state.contacts} />
            //             } /> */}

            //             <Route path="/" element={
            //                 <AddSubs addNewContact={this.props.addNewContact} />
            //             } />
            //         </Routes>
            //     </div>
            // </Router>
            <AddSubs addNewContact={this.props.addNewContact} />
        )
    }
}

export default PhoneDirectory;