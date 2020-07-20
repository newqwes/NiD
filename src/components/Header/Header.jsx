import React from 'react'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.row}>
                    <div className={s.logo}>Night Dream</div>
                    <NavLink className={s.login} to='/login'>{props.auth.data.login} ID:{props.auth.data.id}</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;