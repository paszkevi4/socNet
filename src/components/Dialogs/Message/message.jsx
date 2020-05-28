import React from 'react';
import sass from './../dialogs.module.sass'

const Message = (props) => {
	return (
		<div className={sass.message}>
			<span className={`${sass.messageSpan} 
			${props.senderId === (6846 || 1079) && sass.odd}
			/*IDs are hard coded above b/c of a test account*/
			`}>{props.cloud}</span>

		</div>
	)
}

export default Message