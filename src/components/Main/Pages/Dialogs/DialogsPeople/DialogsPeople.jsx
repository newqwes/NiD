import React from 'react'
import s from './DialogsPeople.module.scss'
import { NavLink } from 'react-router-dom';

const DialogsPeople = (props) => {
    return (
        <div className={s.section}>
            <NavLink to={props.urlDialog} activeClassName={s.active}>{props.namePerson}</NavLink>
        </div>
    )
}

export default DialogsPeople;