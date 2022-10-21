import React from 'react'
import { NavLink } from 'react-router-dom'
import chat from "../Dialogs.module.css";


const DialogItem = (props) => {
    let path ='/dialogs/'+props.id
  
    return(
      <li className={chat.dialogs_chat_user + " " + chat.active}>
          <NavLink to={path}>{props.name}</NavLink>
      </li>
    )
  
}

export default DialogItem

