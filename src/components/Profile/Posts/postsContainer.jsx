import React from 'react';
import Posts from './posts'
import {addPostActionCreator, updateNewPostTextActionCreator, deletePostAC} from "../../../Redux/profileReducer";

import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        login: state.auth.login,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (name, newText) => {
            dispatch ( addPostActionCreator(name, newText) )
        },
        deletePost: () => {
            dispatch (deletePostAC())
        }

        /*onPostChange: (newText) => {
            dispatch ( updateNewPostTextActionCreator (newText) )
        }*/
    }
}

const PostsContainer = connect (mapStateToProps, mapDispatchToProps) (Posts);

export default PostsContainer;