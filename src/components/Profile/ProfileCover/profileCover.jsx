import React from 'react'
import sass from './profileCover.module.sass'
import Coverage from "../../cover.png";
import Avatar from "./../../../images/defaultAvatar.svg";
import Cover from "../../cover.png";
import Status from "../profileInfo/statusNew";

let ProfileCover = (props) => {
    return (
        <div className={sass.profileHeader}>
            <div className={sass.cover}>
                <img className={sass.coverImg} src={Cover} />
            </div>
            <div className={sass.name}>
                <b>{ props.profile.fullName }</b>
            </div>
            <div className={sass.avatar}>
                <img src={props.profile.photos.small  != null ? props.profile.photos.large : Avatar} />
            </div>
        </div>
    )
}

export default ProfileCover