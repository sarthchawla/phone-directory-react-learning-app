import { connect } from "react-redux";
import { createStore } from "redux";
import PhoneDirectory from "./PhoneDirectory";


function PhoneDirectoryContainer(props) {



    const showContact = () => { };
    const addNewContact = (contact) => props.dispatch({
        type: "ADD_CONTACT", payload: contact
    });

    return (
        <div className="phone-directory-container">
            <PhoneDirectory
                contacts={props.contacts}
                showContact={showContact}
                addNewContact={addNewContact}
            />
        </div>
    );
}

const mapStateToProps = (state) => (
    {
        contacts: state.contacts
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        addNewContact: (contact) => dispatch({
            type: "ADD_CONTACT", payload: contact
        })
    }
);

const PhoneBookContainerWithRedux = connect(mapStateToProps)(PhoneDirectoryContainer);

export default PhoneBookContainerWithRedux;