import React, {useEffect} from 'react';
import css from './../dialogs.module.sass'
import {NavLink} from 'react-router-dom'
import ava from './../../../images/defaultAvatar.svg'

const DialogItem = (props) => {
	let dialogsPath='/dialogs/' + props.id
	let profilePath='/profile/' + props.id
	return (
		<div className={css.user}>
			<NavLink className={css.userAvatar} to={profilePath}>
				<img src={ava} alt="userAvatar"/>
			</NavLink>
			<NavLink className={css.userName} to={dialogsPath} activeClassName={css.active}>
				<div>{props.name}</div>
			</NavLink>
		</div>

	)
}





export default DialogItem