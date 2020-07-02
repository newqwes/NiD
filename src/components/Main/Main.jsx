import React from 'react';
import Profile from './Pages/Profile/Profile';
import s from './Main.module.scss';
import Dialogs from './Pages/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Pages/News/News';
import Chat from './Pages/Chat/Chat';
import Menu from './Menu/Menu';

const Main = () => {
    let MainData = [
        { path: '/Profile', component: Profile },
        { path: '/News', component: News },
        { path: '/Chat', component: Chat },
        { path: '/Dialogs', component: Dialogs }
    ]
    return (
        <BrowserRouter>
            <section className={s.section}>
                <div className={s.wrapper}>
                    <div className={s.row}>
                        <Menu />
                        <div className={s.content}>
                            <Route path={MainData[0].path} component={MainData[0].component} />
                            <Route path={MainData[1].path} component={MainData[1].component} />
                            <Route path={MainData[2].path} component={MainData[2].component} />
                            <Route path={MainData[3].path} component={MainData[3].component} />
                        </div>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    )
}

export default Main;