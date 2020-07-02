import React from 'react'
import s from './Menu.module.scss'
import MenuItem from './MenuItem/MenuItem'

const Menu = () => {
    let MenuItemData = [
        { value: "Новости", linkUrl: "/News" },
        { value: "Сообщения", linkUrl: "/Dialogs" },
        { value: "Чат", linkUrl: "/Chat" },
    ]
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
                                <div className={s.progressBar}>
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
                                <div className={s.progressBar}>
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
                                <div className={s.progressBar}>
                                </div>
                            </progress>
                        </div>
                    </div>
                </div>
            </div>
            <ul className={s.ul}>
                <MenuItem value={MenuItemData[0].value} linkUrl={MenuItemData[0].linkUrl} />
                <MenuItem value={MenuItemData[1].value} linkUrl={MenuItemData[1].linkUrl} />
                <MenuItem value={MenuItemData[2].value} linkUrl={MenuItemData[2].linkUrl} />
            </ul>
        </nav>
    )
}

export default Menu;