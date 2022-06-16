const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {

        profilePage: {
            postData: [
                { id: 1, message: "It's my first post!", likesCount: 18 },
                { id: 2, message: "Hey, everyone!", likesCount: 5 },
            ],
            newPostText: ''
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
            newMessageBody: ''
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
            let newPost = this._state.profilePage.newPostText;

            this._state.profilePage.newPostText = '';
            this._state.profilePage.postData.push({id: 3, message: newPost, likesCount: 0});
            this._callSubscriber(this._state);
        } 
        
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } 
        
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }

        else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;

            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({id: 4, message: body})
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})


export default store;

window.store = store;