import React, { useState, useEffect } from 'react'
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'
import {required, maxLengthCreator} from '../common/fields/validators'
import {Textarea} from '../common/fields/fields'
import css from './dialogs.module.sass'
import DialogItem from './DialogItem/dialogItem'
import Message from './Message/message'
import {authAPI} from "../../API/api";
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {sendMessageAC, setDialogsThunk} from "../../Redux/dialogsReducer";

let MessageInput = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field placeholder={'Message'} component={Textarea} onChange={props.changeValue}
				   name={'messageInput'} validate={[required]} value={props.messageValue} ></Field>
			<button>Submit</button>
		</form>
	)
}
let ReduxMessageInput = reduxForm ({form: 'dialogInput'}) (MessageInput)

let Dialogs = (props) => {

	let userId = props.match.params.userId;

	let dialogs = props.state.dialogsData.map ( el => <DialogItem id={el.id} name={el.name}/>)

	let clouds = null
	if (userId && props.state.messagesData[userId]) {
		clouds = props.state.messagesData[userId].map( el => <Message id={el.id} cloud={el.message} senderId={el.senderId}/>)
	}

	const onSubmitDeclared = (values, senderId) => {
		props.sendMessageAC (values.messageInput, props.senderId)
	}

	return (
		<div className={css.dialogs}>
			<div className={css.dialogList}>
				{dialogs}
			</div>
			<div className={css.messages}>
				<ReduxMessageInput onSubmit={onSubmitDeclared} />
				<div className={css.dialog}>
					{clouds}
				</div>
			</div>
		</div>
	)
}

export default compose (withRouter) (Dialogs)