import React from 'react';
import Profile from './Pages/Profile/Profile';
import s from './Main.module.scss';
import Dialogs from './Pages/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Pages/News/News';
import Chat from './Pages/Chat/Chat';
import Menu from './Menu/Menu';

const Main = () => {
    let mainData = [
        { path: '/Profile', component: Profile },
        { path: '/News', component: News },
        { path: '/Chat', component: Chat },
        { path: '/Dialogs', component: Dialogs }
    ];
    let mainDataElements = mainData.map(p => <Route path={p.path} component={p.component} />)
    return (
        <BrowserRouter>
            <section className={s.section}>
                <div className={s.wrapper}>
                    <div className={s.row}>
                        <Menu />
                        <div className={s.content}>
                            {mainDataElements}
                        </div>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    )
}

export default Main;