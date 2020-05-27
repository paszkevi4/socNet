import React from 'react';
import Dialogs from './dialogs';
import {sendMessageAC} from './../../Redux/dialogsReducer';
import {updateMessageTextAC, setCurrentDialogAC, setDialogsThunk} from './../../Redux/dialogsReducer';
import {connect} from 'react-redux';
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {Redirect, withRouter} from "react-router-dom";
import Profile from "../Profile/profile";

class DialogsContainerInner extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setCurrentDialogAC(userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId != this.props.match.params.userId) {
            let userId = this.props.match.params.userId;
            this.props.setCurrentDialogAC(userId);
        }
    }

    render() {
        return(
            <Dialogs {...this.props} />
        )
    }
}


let mapStateToProps = (state) => {
    return { state: state.dialogsPage }
}

const DialogsContainer = compose(
    //withAuthRedirect,
    withRouter,
    connect (mapStateToProps, {sendMessageAC, setCurrentDialogAC, setDialogsThunk}),
)(DialogsContainerInner)

export default DialogsContainer;