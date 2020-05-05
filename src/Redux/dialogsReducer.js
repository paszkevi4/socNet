import {usersAPI} from "../API/api";
import {setProfile} from "./profileReducer";

let initialState = {
    dialogsData: [
        {id: 5, name: 'essedger'},
        {id: 2, name: 'samurai'},
        {id: 7, name: 'tinirait'},
        {id: 4, name: 'marina'},
        {id: 3, name: 'Alexander'},
        {id: 8, name: 'Nastya'},
    ],
    dialogsData1: [
        {name: 'John', text: 'Its my first post!', likes: 25,},
    ],
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is it going?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let idCount = state.messagesData.length + 1;
            let newMessage = {
                id: idCount,
                message: action.text,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        case 'SET_DIALOGS_DATA':
            return {
                ...state,
                dialogsData1: [...state.dialogsData1, action.profile ],
            }
        default:
            return state;
    }

}

export const sendMessageAC = (text) => ({ type: 'SEND-MESSAGE', text })
export const setDialogsDataAC = (profile) => ({type: 'SET_DIALOGS_DATA', profile: profile })

export const setDialogsThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setDialogsDataAC(data))
        })
    }
}

export default dialogsReducer;