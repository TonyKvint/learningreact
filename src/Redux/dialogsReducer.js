const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: "Veronica" },
        { id: 2, name: "Anton" },
        { id: 3, name: "Alexey" },
        { id: 4, name: "Brother" },
        { id: 5, name: "Mom" }
    ],
    messagesData: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "What's up?" },
        { id: 3, message: "How's your react lessons?" }
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 4, message: body }],
                newMessageBody: ''
            };
            
        default:
            return state;
    }
}

export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})


export default dialogsReducer;