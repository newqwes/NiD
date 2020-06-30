import React from 'react'
import s from './MenuItem.module.scss'
import { NavLink } from 'react-router-dom'

const MenuItem = (props) => {
    const yoy = () => props.status === 'active' ? s.active : ""
    return (
        <li className={`${s.li} ${yoy()}`}>
            <NavLink to={props.linkUrl} className={s.link} activeClassName={s.active}>
                {props.value}
            </NavLink>
        </li>
    )
}

export default MenuItem;