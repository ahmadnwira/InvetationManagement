import React from 'react';
import GuestName from './GuestName';
const Guest = (props) => {
    return (
        <li>
            <GuestName is_editing={props.is_editing}
                handleNameEditing={(e)=>{props.setName(e.target.value)}}>

                {props.name}
            </GuestName>

            <label>
                <input type="checkbox" checked={props.is_confirmed}
                    onChange={props.handle_confrim}/> Confirmed
            </label>
            <button onClick={props.handle_edit}>{props.is_editing? 'save': 'edit'}</button>
            <button onClick={props.handle_remove}>remove</button>
        </li>
    );
}

export default Guest;