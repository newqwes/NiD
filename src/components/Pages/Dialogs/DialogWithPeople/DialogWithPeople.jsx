import React from 'react'
import s from './DialogWithPeople.module.scss'
import {addNewMessageTextAC, dialogOnChangeTextareaAC} from './../../../../redux/store'

const DialogWithPeople = (props) => {

    let dialogTextareaValue = React.createRef();

    let addNewMessageText = () => {
       props.dispatch(addNewMessageTextAC(props.id)) 
    }
    let dialogOnChangeTextarea = () => {
        props.dispatch(dialogOnChangeTextareaAC(props.id, dialogTextareaValue.current.value))
    }

    return (
        <div className={s.section}>
            <div className={s.containerEnemy}>
                <div className={s.imgEnemy}>
                    <img src={props.avatar} alt="" />
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

            <div className={s.containerOwn}>
                <div className={s.containerNameMessage}>
                    <div className={s.nameOwn}>
                        <h3>Назар</h3>
                    </div>
                    <div className={s.messageOwn}>
                        <p>{props.message.textOwn}</p>
                    </div>
                </div>
                <div className={s.imgOwn}>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png" alt="" />
                </div>

            </div>
            <div className={s.submit}>
                <textarea ref={dialogTextareaValue} value={props.dialogTextarea} onChange={dialogOnChangeTextarea} />
                <button onClick={addNewMessageText}>Отправить</button>
            </div>
        </div>
    )
}

export default DialogWithPeople;