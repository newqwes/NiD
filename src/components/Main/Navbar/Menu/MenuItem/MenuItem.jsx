import React from 'react'
import s from './MenuItem.module.scss'
import { NavLink } from 'react-router-dom'

const MenuItem = (props) => {
    return (
        <li className={s.li}>
            <NavLink to={props.linkUrl} className={s.link} activeClassName={s.active}>
                {props.value}
            </NavLink>
        </li>
    )
}

export default MenuItem;