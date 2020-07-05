import React from 'react';
import s from './App.module.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Pages/Profile/Profile';
import News from './components/Pages/News/News';
import Chat from './components/Pages/Chat/Chat';
import Dialogs from './components/Pages/Dialogs/Dialogs';
import { Route } from 'react-router-dom';

function App(props) {

    return (
        <>
            <Header />
            <section className={s.section}>
                <div className={s.wrapper}>
                    <div className={s.row}>
                        <Menu state={props.state.menuSideBar} />
                        <div className={s.content}>
                            <Route path='/Profile' render={() =>
                                <Profile state={props.state.profilePage} addNewPost={props.addNewPost} changePostTextarea={props.changePostTextarea} />} />
                            <Route path='/News' render={() =>
                                <News />} />
                            <Route path='/Chat' render={() =>
                                <Chat />} />
                            <Route path='/Dialogs' render={() =>
                                <Dialogs state={props.state.dialogPage} addNewMessage={props.addNewMessage} stateDialogOnChangeTextarea={props.stateDialogOnChangeTextarea} />} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App;
