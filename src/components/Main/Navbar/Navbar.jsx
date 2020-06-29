import React from 'react'
import s from './Navbar.module.scss'

const Navbar = () => {
    return (
        <section className={s.section}>
        <div className={s.imgName}>
            <div className={s.avatar}>
                <img src="https://qwes.pw/img/photo.jpg" alt="avatar"/>
            </div>
            <div className={s.name}>
                <h3>Аширов Назар</h3>
            </div>
        </div>
        <div className={s.progress__bar}>
            progress bar
        </div>
        <nav className={s.navbar}>
            <ul>
                <li>sdf</li>
                <li>sdf</li>
                <li>sdf</li>
                <li>sdf</li>
                <li>sdf</li>
            </ul>
        </nav>
        </section>
    )
}

export default Navbar;