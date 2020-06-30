import React from 'react'
import s from './DialogWithPeople.module.scss'

const DialogWithPeople = () => {
    return (
        <div className={s.section}>
            <div className={s.text}>
                text
            </div>
            <div className={s.submit}>
                <textarea></textarea>
                <button>Отправить</button>
            </div>
        </div>
    )
}

export default DialogWithPeople;