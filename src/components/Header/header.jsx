import React from 'react';
import css from './header.module.css';
import './header.sass'
import Logo from './../../images/logo.svg';
import {NavLink} from 'react-router-dom'

let Header = (props) => {
	return (
		<header>
			<div className='links'>
				<div className='item'>
					<NavLink to={'/profile/' +props.userId} activeClassName='active'>Profile</NavLink>
				</div>
				<div className='item'>
					<NavLink to='/userspage' activeClassName='active'>Users</NavLink>
				</div>
				<div className='item'>
					<NavLink to='/dialogs' activeClassName='active'>Messages</NavLink>
				</div>
				<div className='item'>
					<NavLink to='/login' activeClassName='active'>Highlights</NavLink>
				</div>

				{/*<div className={css.item}>
					<NavLink to='/friends' activeClassName={css.active}>Friends</NavLink>
				</div>
				<div className='item'>
					<NavLink to='/login' activeClassName='active'>Login</NavLink>
				</div>
				<div className={css.item}>
					<NavLink to='/news' activeClassName={css.active}>News</NavLink>
				</div>
				<div className={css.item}>
					<NavLink to='/music' activeClassName={css.active}>Music</NavLink>
				</div>
				<div className={css.item}>
					<NavLink to='/settings' activeClassName={css.active}>Settings</NavLink>
				</div>*/}
			</div>
		</header>
	)
}

{/*<div><button className='header__button'>{props.login}</button></div>*/}

{/*<NavLink className='buttons' to={'/login'}>
					<button className='header__button'>Login</button>
				</NavLink>*/}

export default Header