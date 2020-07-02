import React from 'react'
import s from './Menu.module.scss'
import MenuItem from './MenuItem/MenuItem'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className={s.menu}>
            <div className={s.imgSection}>
                <div className={s.imgContainer}>
                    <img src="https://qwes.pw/img/photo.jpg" alt="" />
                </div>
                <div className={s.imgTitle}>
                    <MenuItem value="Аширов Назар" status="active" linkUrl="/Profile" />
                </div>
                <div className={s.imgStatusBar}>
                    <div className={s.barContainer}>
                        <div className={s.barTitle}>
                            ПД.
                        </div>
                        <div className={s.bar}>
                            <progress max="100" value="80" className={s.bar1}>
                                <div class="progress-bar">
                                </div>
                            </progress>
                        </div>
                    </div>
                    <div className={s.barContainer}>
                        <div className={s.barTitle}>
                            УР.
                        </div>
                        <div className={s.bar}>
                            <progress max="100" value="60" className={s.bar2}>
                                <div class="progress-bar">
                                </div>
                            </progress>
                        </div>
                    </div>
                    <div className={s.barContainer}>
                        <div className={s.barTitle}>
                            АКТ.
                        </div>
                        <div className={s.bar}>
                            <progress max="100" value="70" className={s.bar3}>
                                <div class="progress-bar">
                                </div>
                            </progress>
                        </div>
                    </div>
                </div>
            </div>
            <ul className={s.ul}>
                <MenuItem value="Новости" linkUrl="/News" />
                <MenuItem value="Сообщения" linkUrl="/Dialogs" />
                <MenuItem value="Чат" linkUrl="/Chat" />
            </ul>
        </nav>
    )
}

export default Menu;