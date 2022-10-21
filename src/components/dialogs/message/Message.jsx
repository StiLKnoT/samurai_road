import React from 'react'
import chat from "../Dialogs.module.css";

const Message = (props) => <li className={chat.dialogs_message_user}>{props.message}</li>



export default Message


