import React from 'react';
import css from './sidebar.module.sass'
import {NavLink} from 'react-router-dom'

let Sidebar = (props) => {
	return (
		<sidebar>
			<div className={css.item}>
				<NavLink to='/login' activeClassName={css.active}>Login</NavLink>
			</div>
			<div className={css.item}>
				<NavLink to={'/profile/' +props.userId} activeClassName={css.active}>Profile</NavLink>
			</div>
			<div className={css.item}>
				<NavLink to='/dialogs' activeClassName={css.active}>Messages</NavLink>
			</div>
			<div className={css.item}>
				<NavLink to='/userspage' activeClassName={css.active}>Users</NavLink>
			</div>
			<div className={css.item}>
				<NavLink to='/friends' activeClassName={css.active}>Friends</NavLink>
			</div>
			<div className={css.item}>
				<NavLink to='/news' activeClassName={css.active}>News</NavLink>
			</div>
			<div className={css.item}>
				<NavLink to='/music' activeClassName={css.active}>Music</NavLink>
			</div>
			<div className={css.item}>
				<NavLink to='/settings' activeClassName={css.active}>Settings</NavLink>
			</div>
		</sidebar>
	)
}

export default Sidebar



