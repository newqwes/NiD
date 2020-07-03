import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import s from './App.module.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Pages/Profile/Profile';
import News from './components/Pages/News/News';
import Chat from './components/Pages/Chat/Chat';
import Dialogs from './components/Pages/Dialogs/Dialogs';

function App(props) {
    let appData = [
        { path: '/Profile', render: <Profile state={props.state.profilePage} /> },
        { path: '/News', render: <News /> },
        { path: '/Chat', render: <Chat /> },
        { path: '/Dialogs', render: <Dialogs state={props.state.dialogPage} /> }
    ];

    let appDataElements = appData.map(p => <Route path={p.path} render={() => p.render} />)
    return (
        <BrowserRouter>
            <Header />
            <section className={s.section}>
                <div className={s.wrapper}>
                    <div className={s.row}>
                        <Menu state={props.state.menuSideBar} />
                        <div className={s.content}>
                            {appDataElements}
                        </div>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    )
}

export default App;
