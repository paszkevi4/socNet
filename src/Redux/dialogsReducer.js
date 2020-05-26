import {usersAPI} from "../API/api";
import {setProfile} from "./profileReducer";

let initialState = {
    dialogsData: [
        {id: 'id5', name: 'essedger'},
        {id: 'id2', name: 'samurai'},
        {id: 'id7', name: 'tinirait'},
        {id: 'id4', name: 'marina'},
        {id: 'id3', name: 'Alexander'},
        {id: 'id8', name: 'Nastya'},
    ],
    dialogsData1: [
        {name: 'John', text: 'Its my first post!', likes: 25,},
    ],
    messagesData: {
            id2: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How is it going?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            id3: [
                {id: 1, message: 'Ok, Siri, what is the weather like today?'},
                {id: 2, message: 'Not even funny'},
                {id: 3, message: 'Yo'},
            ],
            id4: [
                {id: 1, message: 'Hello, my friend!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Im good. And how are you?'},
                {id: 4, message: 'Perfecto mio amico'},
            ],
            id5: [
                {id: 1, message: 'Greetings!'},
                {id: 2, message: 'How is it going?'},
                {id: 3, message: 'Back from Scotland'},
                {id: 4, message: 'Thats incredible!'},
            ],
            id7: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Whats up?'},
            ],
            id8: [
                {id: 1, message: 'Konichiva!'},
                {id: 2, message: 'How is it going?'},
                {id: 3, message: 'Namaste'},
                {id: 4, message: 'Namaste'},
                {id: 5, message: 'Namaste'},
            ],
        },
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let idCount = state.messagesData.id2.length + 1;
            let newMessage = {
                id: idCount,
                message: action.text,
            };
            let abc = [state.messagesData.id2, newMessage]
            return {
                ...state,
                ...state.messagesData,
                id2: [...state.messagesData.id2, newMessage]
                //messagesData: [state.messagesData, [...state.messagesData.id2, newMessage]],
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