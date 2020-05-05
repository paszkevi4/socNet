import React from 'react';

let UsersItem = (props) => {

    return (
        <div>
            <div>
                <div>

                </div>
            </div>
            <div>
                <div>{props.name}</div>
                <div>{props.status}</div>
                <div>{props.country}</div>
                <div>{props.city}</div>
            </div>
        </div>
    )
}

export default UsersItem