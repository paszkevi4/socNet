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
    currentDialog: 'id2',
    messagesData: {
            id2: [
                {id: 1, message: 'Hi!', senderId: 2 },
                {id: 2, message: 'How is it going?', senderId: 6846 },
                {id: 3, message: 'Yo', senderId: 2 },
                {id: 4, message: 'Yo', senderId: 2 },
                {id: 5, message: 'Yo', senderId: 2 },
            ],
            id3: [
                {id: 1, message: 'Ok, Siri, what is the weather like today?', senderId: 3 },
                {id: 2, message: 'Not even funny', senderId: 6846 },
                {id: 3, message: 'Yo', senderId: 3 },
            ],
            id4: [
                {id: 1, message: 'Hello, my friend!', senderId: 4 },
                {id: 2, message: 'How are you?', senderId: 6846 },
                {id: 3, message: 'Im good. And how are you?', senderId: 4 },
                {id: 4, message: 'Perfecto mio amico', senderId: 4 },
            ],
            id5: [
                {id: 1, message: 'Greetings!', senderId: 5 },
                {id: 2, message: 'How is it going?', senderId: 6846 },
                {id: 3, message: 'Back from Scotland', senderId: 5 },
                {id: 4, message: 'Thats incredible!', senderId: 5 },
            ],
            id7: [
                {id: 1, message: 'Hello!', senderId: 7 },
                {id: 2, message: 'How are you?', senderId: 6846 },
                {id: 3, message: 'Yo', senderId: 7 },
                {id: 4, message: 'Whats up?', senderId: 7 },
            ],
            id8: [
                {id: 1, message: 'Konichiva!', senderId: 8 },
                {id: 2, message: 'How is it going?', senderId: 6846 },
                {id: 3, message: 'Namaste', senderId: 8 },
                {id: 4, message: 'Namaste', senderId: 8 },
                {id: 5, message: 'Namaste', senderId: 8 },
            ],
        },
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        /*case 'SEND-MESSAGE':
            let idCount = state.messagesData.id2.length + 1;
            let newMessage = {
                id: idCount,
                message: action.text,
            };
            let abc = [...state.messagesData.id2, newMessage]
            let id2 = abc
            return {
                ...state,
                dialogsData: [...state.dialogsData],
                dialogsData1: [...state.dialogsData1],
                messagesData: {...state.messagesData, id2: abc },
                //id2: [...state.messagesData.id2, newMessage]
            }*/
        case 'SEND-MESSAGE':
            let idCount = state.messagesData[state.currentDialog].length + 1;
            let newMessage = {
                id: idCount,
                message: action.text,
                senderId: action.userId
            };
            let abc = [...state.messagesData[state.currentDialog], newMessage]
            let id2 = abc
            for (let key in state.messagesData) {
                if (key == state.currentDialog) {
                    return {
                        ...state,
                        dialogsData: [...state.dialogsData],
                        dialogsData1: [...state.dialogsData1],
                        messagesData: {...state.messagesData, [key]: abc},
                    }
                }
            }
        case 'SET_CURRENT_DIALOG':
            return {
                ...state,
                currentDialog: action.id,
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

export const sendMessageAC = (text, userId) => ({ type: 'SEND-MESSAGE', text, userId })
export const setCurrentDialogAC = (id) => ({ type: 'SET_CURRENT_DIALOG', id })
export const setDialogsDataAC = (profile) => ({type: 'SET_DIALOGS_DATA', profile: profile })

export const setDialogsThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setDialogsDataAC(data))
        })
    }
}

export default dialogsReducer;