const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        { id: 1, message: "It's my first post!", likesCount: 18 },
        { id: 2, message: "Hey, everyone!", likesCount: 5 },
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 3, 
                message: state.newPostText, 
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        default:
            return state;
    }
    
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;