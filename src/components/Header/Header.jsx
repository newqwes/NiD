import React from 'react'
import s from './Header.module.scss'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.row}>
                    <div className={s.logo}>Night Dream</div>
                    <div>{props.auth.data.login} {props.auth.data.id}</div>
                </div>
            </div>
        </header>
    )
}

export default Header;