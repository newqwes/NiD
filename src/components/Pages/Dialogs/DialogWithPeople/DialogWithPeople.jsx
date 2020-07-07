import React from 'react'
import s from './DialogWithPeople.module.scss'
import DialogOwn from './DialogOwn/DialogOwn'
import { addNewMessageTextAC, dialogOnChangeTextareaAC } from './../../../../redux/dialog-reducer'

const DialogWithPeople = (props) => {

    let addNewMessageText = () => {
        props.dispatch(addNewMessageTextAC(props.dialogData.id))
    }
    let dialogOnChangeTextarea = (e) => {
        props.dispatch(dialogOnChangeTextareaAC(props.dialogData.id, e.target.value))
    }

    let dialogOwn = props.dialogData.message.textOwn.map
        (n => <DialogOwn textOwn={n} nameOwn={props.dialogData.nameOwn} avatarOwn={props.dialogData.avatarOwn} />);

    return (
        <div className={s.dialogWithPeople}>
            <div className={s.section}>
                <div className={s.containerEnemy}>
                    <div className={s.imgEnemy}>
                        <img src={props.dialogData.avatar} alt={props.dialogData.name} />
                    </div>
                    <div className={s.containerNameMessage}>
                        <div className={s.nameEnemy}>
                            <h3>{props.dialogData.name}</h3>
                        </div>
                        <div className={s.messageEnemy}>
                            <p>{props.dialogData.message.textEnemy}</p>
                        </div>
                    </div>
                </div>
                {dialogOwn}
            </div>
            <div className={s.submit}>
                <textarea value={props.dialogData.dialogTextarea} onChange={dialogOnChangeTextarea} />
                <button onClick={addNewMessageText}>Отправить</button>
            </div>
        </div>
    )
}

export default DialogWithPeople;