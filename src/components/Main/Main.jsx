import React from 'react';
import Profile from './Pages/Profile/Profile';
import s from './Main.module.scss';
import Dialogs from './Pages/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Pages/News/News';
import Chat from './Pages/Chat/Chat';
import Menu from './Menu/Menu';

const Main = () => {
    return (
        <BrowserRouter>
            <section className={s.section}>
                <div className={s.wrapper}>
                    <div className={s.row}>
                        <Menu />
                        <div className={s.content}>
                            <Route path='/Profile' component={Profile} />
                            <Route path='/News' component={News} />
                            <Route path='/Chat' component={Chat} />
                            <Route path='/Dialogs' component={Dialogs} />
                        </div>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    )
}

export default Main;