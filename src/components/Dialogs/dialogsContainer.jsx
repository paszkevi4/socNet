import React from 'react';
import Dialogs from './dialogs';
import {sendMessageAC} from './../../Redux/dialogsReducer';
import {updateMessageTextAC, setDialogsThunk} from './../../Redux/dialogsReducer';
import {connect} from 'react-redux';
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return { state: state.dialogsPage }
}

const DialogsContainer = compose(
    //withAuthRedirect,
    withRouter,
    connect (mapStateToProps, {sendMessageAC, setDialogsThunk}),
)(Dialogs)

export default DialogsContainer;