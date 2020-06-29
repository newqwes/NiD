import React from 'react';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import s from './Main.module.scss';

const Main = () => {
    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <Navbar />
                <Profile />
            </div>
        </section>
    )
}

export default Main;