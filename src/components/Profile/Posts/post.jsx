import React, { useState } from 'react'
import sass from './posts.module.sass'

let Post = (props) => {

	let [liked, setLiked] = useState(false)

	const like = () => {
		setLiked(!liked)
	}

	return (
		<div className={sass.item}>
			<div className={sass.name}>{props.name}</div>
			<div className={sass.text}>{props.text}</div>
			<div className={sass.likes} onClick={like}>Likes {liked ? props.likes +1 : props.likes}</div>

		</div>
	)
}

export default Post