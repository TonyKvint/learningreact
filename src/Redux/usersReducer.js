const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {

    usersData: [
        {id: 1, isFollowed: false, userName: "Anton", status: "", location: {country: "Russia", city: "Saint-Petersburg"} },
        {id: 2, isFollowed: true, userName: "Veronika", status: "", location: {country: "Russia", city: "Moscow"} },
        {id: 3, isFollowed: true, userName: "Anton", status: "", location: {country: "Russia", city: "Saint-Petersburg"} },
        {id: 4, isFollowed: true, userName: "Alexey", status: "", location: {country: "Russia", city: "Ivanovo"} },
        {id: 5, isFollowed: true, userName: "Sergey", status: "", location: {country: "Russia", city: "Krasnoyarsk"} },
        {id: 6, isFollowed: true, userName: "Ekaterina", status: "", location: {country: "Russia", city: "Norilsk"} },
        {id: 7, isFollowed: false, userName: "Darya", status: "", location: {country: "Russia", city: "Moscow"} },
        {id: 8, isFollowed: false, userName: "Maxim", status: "", location: {country: "Russia", city: "Moscow"} },
        {id: 9, isFollowed: false, userName: "Vsevolod", status: "", location: {country: "Russia", city: "Saint-Petersburg"} },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollowed: true}
                    }
                    return u;
                })
            };
            
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFollowed: false}
                    }
                    return u;
                })
            };

        case SET_USERS: {
            return {...state, usersData: [...state.usersData, ...action.users]}
        }
            
        default:
            return state;  
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;