import React, { useState } from 'react'
import sass from './profileInfo.module.sass'
import Preloader from "./../../common/Preloader/preloader"
import Status from './statusNew'
import InfoFormRedux from './profileInfoCustomization'
import {Field} from "redux-form";
import s from "../../Login/loginPage.module.sass";
import {Input} from "../../common/fields/fields";
import {NavLink} from "react-router-dom";

import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialYoutube, TiSocialGithub, } from 'react-icons/ti'
import { IoLogoVk, IoLogoOctocat, IoLogoTwitter, IoLogoYoutube, IoLogoInstagram, IoLogoFacebook, IoIosBriefcase, IoIosAt } from 'react-icons/io'


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    let edit = () => {
        setEditMode(!editMode)
    }

    const onSubmit = (formData) => {
        props.updateProfileInfo(formData)
        setEditMode(!editMode)
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={sass.coverage}>
            <Status status={props.status} validation={props.validation} updateStatus={props.updateStatus}/>

            {props.validation
                ? editMode
                    ? <InfoFormRedux initialValues={props.profile} profile={props.profile}
                                     onSubmit={onSubmit}/>
                    : <Info profile={props.profile} edit={edit} validation={props.validation}/>
                : <Info profile={props.profile} edit={edit}/>
            }

        </div>
    )
}

const Info = (props) => {
    return (
        <div onClick={props.edit}>
            <div className={sass.infoBlock}>
                <div>
                    <b>Full name: </b><p>{props.profile.fullName}</p>
                </div>
                <div>
                    <b>About me: </b><p>{props.profile.aboutMe}</p>
                </div>
                <div>
                    <b>In search: </b><p>{props.profile.lookingForAJob ? 'yes' : 'no'}</p>
                </div>
                <div>
                    <b>My skills: </b><p>{props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
            <div>
                <div className={sass.contactsHeader}>
                    <b>Contacts: </b>
                </div>
                <div className={sass.contacts}>
                    {Object.keys(props.profile.contacts).map(key => {
                        return <Contacts key={key} neededKey={key} value={props.profile.contacts[key]}/>
                    })}
                </div>
            </div>
            {props.validation &&
            <div className={sass.infoBTN}>
                <button onClick={props.edit}>change</button>
            </div>}
            {props.validation ||
            <div className={sass.infoBTN}>
                <button><NavLink to='/dialogs'>Message {props.profile.fullName}</NavLink></button>
            </div>}
        </div>


    )
}

const Contacts = ({neededKey, value}) => {
    return <div><b>{neededKey == 'facebook' ? <IoLogoFacebook /> :
        neededKey == 'website' ? <IoIosBriefcase /> :
        neededKey == 'vk' ? <IoLogoVk /> :
        neededKey == 'twitter' ? <IoLogoTwitter /> :
        neededKey == 'instagram' ? <IoLogoInstagram /> :
        neededKey == 'youtube' ? <IoLogoYoutube /> :
        neededKey == 'github' ? <IoLogoOctocat /> :
        neededKey == 'mainLink' ? <IoIosAt /> : neededKey }</b><p>{value}</p></div>
}

export default ProfileInfo;