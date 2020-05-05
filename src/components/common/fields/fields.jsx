import React from 'react'
import './fields.sass'

export let Textarea = ({input, meta, ...props}) => {
    let anError = meta.error && meta.touched;
    return(
        <div className= { 'field' + ' ' + (anError ? 'error' : ' ')}>
            <textarea {...input} {...props} />
            {anError && <p>{meta.error}</p>}
        </div>
    )
}

export let Input = ({input, meta, ...props}) => {
    let anError = meta.error && meta.touched;
    return(
        <div className= { 'field' + ' ' + (anError ? 'error' : ' ')}>
            <input {...input} {...props} />
            {anError && <p>{meta.error}</p>}
        </div>
    )
}