import React from 'react'
import s from './DialogsPeople.module.scss'
import { NavLink } from 'react-router-dom';

const DialogsPeople = (props) => {
    return (
        <NavLink to={props.urlDialog} activeClassName={s.active} className={s.a}>
            <img src={props.urlAvatarDialog} alt="" />
            <span className={s.nameDialog}>{props.namePerson}</span>
        </NavLink>
    )
}

export default DialogsPeople;