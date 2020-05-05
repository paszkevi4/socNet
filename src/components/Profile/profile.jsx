import React from 'react';
import './profile.sass'
import PostsContainer from './Posts/postsContainer'
import ProfileInfo from './profileInfo/profileInfo'
import ProfileCover from "./ProfileCover/profileCover";
import Preloader from "../common/Preloader/preloader";

let Profile = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
	<div className='content'>
		{props.validation || <ProfileCover profile={props.profile}/>}
		<ProfileInfo profile={props.profile} validation={props.validation}
					 status={props.status} updateStatus={props.updateStatus} updateProfileInfo={props.updateProfileInfo}/>
		<PostsContainer profile={props.profile} validation={props.validation}/>
	</div>
	)
}

export default Profile
