import React from 'react';

const GuestName = (props) => {
    if(props.is_editing){
        return <input value={props.children} onChange={props.handleNameEditing}/>
    }
    return (<span>{props.children}</span>)
}

export default GuestName;