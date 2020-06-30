import React from 'react'
import s from './DialogsPeople.module.scss'
import { NavLink } from 'react-router-dom';

const DialogsPeople = (props) => {
    return (
        <div className={s.section}>
            <NavLink to={props.urlDialog}>{props.namePerson}</NavLink>
        </div>
    )
}

export default DialogsPeople;