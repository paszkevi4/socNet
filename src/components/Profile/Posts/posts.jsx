import React from 'react';
import {useState, useEffect} from 'react';
import sass from './posts.module.sass'
import Post from './post'

let Posts = (props) => {

	let [newPostText, setNewPostText] = useState('')

	let onPostTextChange = (e) => {
		setNewPostText (e.target.value)
	}

	let addPost = () => {
		props.addPost(props.login, newPostText);
		setNewPostText ('');
	}

	let deletePost = () => {
		props.deletePost();
	}

	let postsAll = props.profilePage.postsData.map (el => <Post name={el.name} text={el.text} likes={el.likes} />);

	return (
	<div className={sass.grid}>
		<h2>My posts:</h2>
		<div className={sass.newPost}>
			<input className={sass.posts__input} /*ref={ synId }*/
				   value={ newPostText } onChange={ onPostTextChange } placeholder={`What's going on?`} />
			<div className={sass.posts__button} onClick={ addPost }>
				Submit
			</div>
			<div className={sass.posts__button} onClick={props.deletePost}>
				Delete
			</div>


		</div>
		<div className={sass.postsList}>
			{postsAll}
		</div>
	</div>
	)
}

export default Posts



