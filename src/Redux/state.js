const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {

        profilePage: {
            postData: [
                { id: 1, message: "It's my first post!", likesCount: 18 },
                { id: 2, message: "Hey, everyone!", likesCount: 5 },
            ]
        },

        dialogsPage: {
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
            newMessageText: ""
        }

    },
    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } 
        
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        } 
        
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.messageBody;
            this._callSubscriber(this._state);
        }

        else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (newPostText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: newPostText
    }
}

export const updateNewMessageTextActionCreator = () => ({type: UPDATE_NEW_MESSAGE_TEXT})

export const sendMessageActionCreator = (newMessage) => {
    return {
        type: SEND_MESSAGE,
        message: newMessage
    }
}

export default store;

window.store = store;