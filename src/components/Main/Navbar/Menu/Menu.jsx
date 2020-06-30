import React from 'react'
import s from './Menu.module.scss'
import MenuItem from './MenuItem/MenuItem'

const Menu = () => {
    return (
        <nav className={s.menu}>
            <ul>
                <MenuItem value="Моя страница" status="active" linkUrl="/Profile" />
                <MenuItem value="Чат" linkUrl="/Chat" />
                <MenuItem value="Сообщения" linkUrl="/Dialogs" />
                <MenuItem value="Новости" linkUrl="/News" />
            </ul>
        </nav>
    )
}

export default Menu;