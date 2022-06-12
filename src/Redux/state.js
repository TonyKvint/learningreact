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
                { id: 5, name: "Mom" },
            ],

            messagesData: [
                { id: 1, message: "Hi!" },
                { id: 2, message: "What's up?" },
                { id: 3, message: "How's your react lessons?" },
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;

window.store = store;