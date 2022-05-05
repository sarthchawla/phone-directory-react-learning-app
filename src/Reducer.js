const initialState = {
    contacts: []
};

function contactReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.name !== action.payload.name)
            }
        case 'EDIT_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact => {
                    if (contact.name === action.payload.name) {
                        return action.payload;
                    }
                    return contact;
                }
                )
            }
        default:
            return state;
    }
}

export default contactReducer;