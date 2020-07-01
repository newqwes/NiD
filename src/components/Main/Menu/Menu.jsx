import React from 'react'
import s from './Menu.module.scss'
import MenuItem from './MenuItem/MenuItem'

const Menu = () => {
    return (
        <nav className={s.menu}>
            <ul className={s.ul}>
                <MenuItem value="Моя страница" status="active" linkUrl="/Profile" />
                <MenuItem value="Новости" linkUrl="/News" />
                <MenuItem value="Сообщения" linkUrl="/Dialogs" />
                <MenuItem value="Чат" linkUrl="/Chat" />
            </ul>
        </nav>
    )
}

export default Menu;