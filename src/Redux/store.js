import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let store = {
	_state: {
		profilePage: {
			postsData: [
				{name: 'Drew', text: 'Yo!', likes: 17,},
				{name: 'Ann', text: 'Its a great weather today', likes: 12,},
				{name: 'John', text: 'Its my first post!', likes: 25,},
			],
			newPostText: '',
		},

		dialogsPage: {
			dialogsData: [
				{id: 1, name: 'Dimon'},
				{id: 2, name: 'Andrey'},
				{id: 3, name: 'Sveta'},
				{id: 4, name: 'Sasha'},
				{id: 5, name: 'Viktor'},
				{id: 6, name: 'Vitaliy'},
			],
			messagesData: [
				{id: 1, message: 'Hi!'},
				{id: 2, message: 'How is it going?'},
				{id: 3, message: 'Yo'},
				{id: 4, message: 'Yo'},
				{id: 5, message: 'Yo'},
			],
			newMessageText: '',
		},
	},
	_rerenderEntireTree () {},
	getState() {
		return this._state;
	},
	//функция, перерисовывающая дерево
	subscribe (observer) {
		this._rerenderEntireTree = observer;
	},

	dispatch (action) {
		this._state.profilePage = profileReducer (this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
		this._rerenderEntireTree (this._state);
	}

}

export default store;
window.store = store;