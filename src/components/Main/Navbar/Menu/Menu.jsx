import React from 'react'
import s from './Menu.module.scss'
import MenuItem from './MenuItem/MenuItem'

const Menu = () => {
    return (
        <nav className={s.menu}>
            <ul>
                <MenuItem value="Моя страница"/>
                <MenuItem value="Чат"/>
                <MenuItem value="Сообщения"/>
                <MenuItem value="Новости"/>
            </ul>
        </nav>
    )
}

export default Menu;