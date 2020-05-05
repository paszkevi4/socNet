import React from 'react';
import * as axios from 'axios'
import {connect} from 'react-redux'
import Header from './header'
import {headerDidMountThunk,
		loggedOutThunk} from './../../Redux/authReducer'
import {getLogin} from '../../Redux/selectors'


const HeaderContainer = (props) => {
	return (
		<Header login={props.login} isAuth={props.isAuth} userId={props.userId} logOut={props.loggedOutThunk}/>
	)
}


let mapStateToProps = (state) => ({
	userId: state.auth.userId,
})

export default connect (mapStateToProps, {loggedOutThunk}) (HeaderContainer)