import React from 'react'

import { compose } from 'redux'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

import { usersAPI } from '../../API/api'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {myProfileDidMount} from '../../Redux/myProfileReducer'

import MyProfile from './MyProfile'
import {getProfile,
        getStatus,
        getUserId,} from '../../Redux/selectors'
import {loggedOutThunk} from "../../Redux/authReducer";
import Header from "../Header/header";




class MyProfileContainer extends React.Component {



    componentDidMount() {
        this.props.myProfileDidMount();
    }

    render() {
        return(
            /*внизу передается зис пропс просто на всякий случай. сейчас он тут не нужен*/
            <MyProfile profile={this.props.myProfile.myProfile}
                       status={this.props.myProfile.myStatus}
                       logOut={this.props.loggedOutThunk}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    myProfile: state.myProfile,
    userId: state.auth.userId,
})

export default compose (
    connect(mapStateToProps, {myProfileDidMount, loggedOutThunk}),
    //withRouter,
    //withAuthRedirect,
) (MyProfileContainer)