import React from 'react'
import s from './Header.module.scss'

const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.row}>
                    <div className={s.logo}>Night Dream</div>
                </div>
            </div>
        </header>
    )
}

export default Header;