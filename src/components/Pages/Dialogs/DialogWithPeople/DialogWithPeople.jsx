import React from 'react'
import s from './DialogWithPeople.module.scss'
import DialogOwn from './DialogOwn/DialogOwn'
import { addNewMessageTextAC, dialogOnChangeTextareaAC } from './../../../../redux/store'

const DialogWithPeople = (props) => {

    let addNewMessageText = () => {
        props.dispatch(addNewMessageTextAC(props.id))
    }
    let dialogOnChangeTextarea = (e) => {
        props.dispatch(dialogOnChangeTextareaAC(props.id, e.target.value))
    }

    let dialogOwn = props.message.textOwn.map
        (n => <DialogOwn textOwn={n} nameOwn={props.nameOwn} avatarOwn={props.avatarOwn} />);

    return (
        <div className={s.dialogWithPeople}>
            <div className={s.section}>
                <div className={s.containerEnemy}>
                    <div className={s.imgEnemy}>
                        <img src={props.avatar} alt={props.name} />
                    </div>
                    <div className={s.containerNameMessage}>
                        <div className={s.nameEnemy}>
                            <h3>{props.name}</h3>
                        </div>
                        <div className={s.messageEnemy}>
                            <p>{props.message.textEnemy}</p>
                        </div>
                    </div>
                </div>
                {dialogOwn}
            </div>
            <div className={s.submit}>
                <textarea value={props.dialogTextarea} onChange={dialogOnChangeTextarea} />
                <button onClick={addNewMessageText}>Отправить</button>
            </div>
        </div>
    )
}

export default DialogWithPeople;