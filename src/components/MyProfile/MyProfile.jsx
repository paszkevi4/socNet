import React, {useState} from 'react';
import css from './MyProfile.module.sass'
import Avatar from "./../../images/defaultAvatar.svg"
import Preloader from "./../common/Preloader/preloader"
import Status from './../Profile/profileInfo/statusNew'
import {NavLink} from "react-router-dom";

const MyProfile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    let onPhotoAdded = (event) => {
        console.log(event.target.files[0])
    }

    return (
        <div className={css.content}>
            <div className={css.myprofile__button_logout}>
                <div className={css.headerName}>
                    V { props.profile.fullName }
                </div>
                <div className={css.menu}>
                    <NavLink to={'/profile/' +props.profile.userId} ><div>To my profile</div></NavLink>
                    {/*<div onClick={props.logOut}>Logout</div>*/}
                    <NavLink to={'/login'} onClick={props.logOut}><div>Logout</div></NavLink>
                </div>
            </div>
            <div className={css.forShadow}>
                <div className={css.avatar}>
                    <img src={props.profile.photos.large  != null ? props.profile.photos.large : Avatar} />
                </div>
                <div className={css.nameStatus}>
                    <h2>{ props.profile.fullName }</h2>
                    <Status status={props.status} validation={props.validation} updateStatus={props.updateStatus}/>
                </div>
                <div>
                    <input type="file" onChange={onPhotoAdded}/>
                </div>
                <div className={css.rateing}>
                    <div className={css.rateingGrey}>
                        <div className={css.rateingColored}>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyProfile;