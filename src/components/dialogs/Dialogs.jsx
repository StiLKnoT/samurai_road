import React from "react";
import chat from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";



const dialogsData = [
  {id: 1,  name: "Bill"},
  {id: 2,  name: "Pavel"},
  {id: 3,  name: "Mark"},
  {id: 4,  name: "Elon"},
]

const messageData = [
  {id: 1, message:"Hi!"},
  {id: 2, message:"How are you?"},
  {id: 3, message:"OK?"}
]

const dialogElements = dialogsData.map(d => 
  <DialogItem name={d.name} id={d.id}/>
)
const messagesElements = messageData.map(m => 
  <Message message={m.message} id={m.id}/>
)

const Dialogs = (props) => {
  return (
    <div className={chat.dialogs}>
      <ul className={chat.dialogs_chat}>
        {dialogElements}
        {/* <li className={chat.dialogs_chat_user}>
          <NavLink to="/dialogs/2">Pavel</NavLink>
        </li>
        <li className={chat.dialogs_chat_user}>
          <NavLink to="/dialogs/3">Mark</NavLink>
        </li>
        <li className={chat.dialogs_chat_user}>
          <NavLink to="/dialogs/4">Elon</NavLink>
        </li> */}
      </ul>

      <ul className={chat.dialogs_messages}>
        {messagesElements}
      </ul>
    </div>
  );
};

export default Dialogs;
