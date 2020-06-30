import React from 'react'
import s from './MenuItem.module.scss'

const MenuItem = (props) => {
    const yoy = () => props.status === 'active' ? s.active : ""
    return (
    <li className={`${s.li} ${yoy()}`}><a href={props.linkUrl} className={s.link}>{props.value}</a></li>
    )
}

export default MenuItem;