import React from 'react'
import {useState} from 'react'
import sass from './profileInfo.module.sass'

let Status = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div className={sass.statusInput}>
            { editMode
                ? < input className='status_input' placeholder={'Enter your new status'} onBlur={ deactivateEditMode }
                          autoFocus={true} value={status} onChange={ onStatusChange }/>
                : <p className='status_p' onClick={ props.validation && activateEditMode }>{ props.status || `No status here` }</p>
            }
        </div>
    )
}

export default Status;