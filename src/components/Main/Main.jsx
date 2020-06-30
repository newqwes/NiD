import React from 'react';
import Navbar from './Navbar/Navbar';
import Profile from './Pages/Profile/Profile';
import s from './Main.module.scss';
import Dialogs from './Pages/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Pages/News/News';
import Chat from './Pages/Chat/Chat';

const Main = () => {
    return (
        <BrowserRouter>
            <section className={s.section}>
                <div className={s.wrapper}>
                    <Navbar />
                    <Route path='/Profile' component={Profile} />
                    <Route path='/Chat' component={Chat} />
                    <Route path='/Dialogs' component={Dialogs} />
                    <Route path='/News' component={News} />
                </div>
            </section>
        </BrowserRouter>
    )
}

export default Main;