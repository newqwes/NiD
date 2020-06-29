import React from 'react'
import s from './MenuItem.module.scss'

const MenuItem = (props) => {
    return (
    <li className={s.li}><a href="/" className={s.link}>{props.value}</a></li>
    )
}

export default MenuItem;