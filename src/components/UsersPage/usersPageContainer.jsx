import React from 'react'
import { connect } from 'react-redux';
import UsersPage from './usersPage'
import {follow,
        unfollow,
        usersPageContainerDidMount,
        usersPageContainerHasBeenChanged} from './../../Redux/usersReducer'
import fetchingCircle from './../../images/fetching.svg'
import * as axios from "axios";
import Preloader from "../common/Preloader/preloader";

import {getUsers,
        getUsersAmount,
        getPageSize,
        getCurrentPage,
        getIsFetching,
        reselector,} from '../../Redux/selectors'


class UsersPageContainer extends React.Component {

    componentDidMount() {
        this.props.usersPageContainerDidMount(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p) => {
        this.props.usersPageContainerHasBeenChanged (p, this.props.pageSize)

    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : <UsersPage {...this.props} onPageChanged={this.onPageChanged} /> }
        </>
    }

}

let mapStateToProps = (state) => {

    return {
        users: reselector(state),
        usersAmount: getUsersAmount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
    }
}



let UsersContainer = connect (mapStateToProps, {follow, unfollow, usersPageContainerDidMount, usersPageContainerHasBeenChanged}) (UsersPageContainer);
export default UsersContainer;
