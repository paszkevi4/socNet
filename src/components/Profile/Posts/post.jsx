import React, {useState, setState} from 'react'
import sass from './posts.module.sass'

let Post = (props) => {

	let [likesCount, setLikes] = useState(props.likes)

	const liked = () => {
		setLikes(++likesCount)
	}

	return (
		<div className={sass.item}>
			<div className={sass.name}>{props.name}</div>
			<div className={sass.text}>{props.text}</div>
			<div className={sass.likes} onClick={liked}>Likes {likesCount}</div>

		</div>
	)
}

export default Post