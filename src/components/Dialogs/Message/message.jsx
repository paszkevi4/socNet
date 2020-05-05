import React from 'react';
import sass from './../dialogs.module.sass'

const Message = (props) => {
	return (
		<div className={sass.message}>
			<span className={`${sass.messageSpan} 
			${props.id === 2 && sass.odd} 
			${props.id > 5 && sass.odd}`}>{props.cloud}</span>
			{/*{ + ' id' + props.id}*/}
		</div>
	)
}

export default Message