import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;