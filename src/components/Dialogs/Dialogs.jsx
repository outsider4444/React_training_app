import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        { id: "1", name: "Хрюшка", }, { id: "2", name: "Говрюша", }, { id: "3", name: "Павлуша", },{ id: "4", name: "Груша", },
    ]
    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesData = [{ id: "1", message: "Привет", }, { id: "2", message: "Букет", }, { id: "3", message: "Омлет", },]
    let messagesElements = messagesData.map( message => <Message message={message.message} id={message.id} />);

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