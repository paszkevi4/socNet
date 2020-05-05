import React from 'react'

import {compose} from 'redux'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'

import {usersAPI} from '../../API/api'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {profileDidMount,
        statusRequested,
        updateStatus,
        updateProfileInfoThunk} from '../../Redux/profileReducer'

import Profile from './profile'
import {getProfile,
        getStatus,
        getUserId,} from '../../Redux/selectors'


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.userId;
        if (userId == undefined) return <Redirect to={'/login'}/>
        this.props.profileDidMount(userId);
        this.props.statusRequested(userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId != this.props.match.params.userId) {
            let userId = this.props.match.params.userId;
            if (!userId) userId = this.props.userId;
            if (userId == undefined) return <Redirect to={'/login'}/>
            this.props.profileDidMount(userId);
            this.props.statusRequested(userId);
        }
    }

    render() {
        return(
            /*внизу передается зис пропс просто на всякий случай. сейчас он тут не нужен*/
            <Profile {...this.props} validation={this.props.match.params.userId == this.props.userId}
                     profile={this.props.profile}
                     updateStatus={this.props.updateStatus}
                     updateProfileInfo={this.props.updateProfileInfoThunk}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId
})

let Composed = compose (
    connect(mapStateToProps, {profileDidMount, statusRequested, updateStatus, updateProfileInfoThunk}),
    withRouter,
    withAuthRedirect,
) (ProfileContainer)

export default Composed
