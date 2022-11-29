import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messagesData.map( message => <Message message={message.message} id={message.id} />);

    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;