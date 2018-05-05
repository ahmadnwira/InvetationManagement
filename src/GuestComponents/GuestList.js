import React from 'react';
import Guest from './Guest';

const GuestList = (props) => {
    return (
        <ul>

        <li className="pending">
          <span>{props.addingGuest}</span>
        </li>
        
        {props.guests
        .filter( guest => !props.is_filtred || guest.is_confirmed )
        .map((guest, index)=>
            <Guest 
                key={index} 
                name={guest.name}
                is_confirmed={guest.is_confirmed}
                is_editing = {guest.is_editing}
                handle_confrim = {()=>{props.toggle_confirm(index)}}
                handle_edit={()=>{props.toggle_edit(index)}}
                handle_remove = {()=>props.handle_remove(index)}
                setName = {(txt => props.setName(txt, index))}
            />
        )}
      </ul>
    );
}

export default GuestList;