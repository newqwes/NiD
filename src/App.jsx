import React from 'react';
import s from './App.module.scss';
import News from './components/Pages/News/News';
import Chat from './components/Pages/Chat';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Menu from './components/Menu';
import ProfileContainer from './components/Pages/Profile/ProfileContainer';
import DialogsContainer from './components/Pages/Dialogs/DialogsContainer';
import UsersContainer from './components/Pages/Users/UsersContainer';
import HeaderContainer from './components/Header';
import Login from './components/Pages/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader';
import { useEffect } from 'react';

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!props.isInitialized) <Preloader />;

  return (
    <>
      <HeaderContainer />
      <section className={s.section}>
        <div className={s.wrapper}>
          <div className={s.row}>
            <Menu />
            <div className={s.content}>
              <Switch>
                <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/News' render={() => <News />} />
                <Route path='/Chat' render={() => <Chat />} />
                <Route path='/Users' render={() => <UsersContainer />} />
                <Route path='/Dialogs' render={() => <DialogsContainer />} />
                <Route path='/login' render={() => <Login />} />
                <Route path='/' exact render={() => <Redirect to='/Profile' />} />
                <Route path='*' render={() => <h1>404 не найдена 404</h1>} />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized,
});

const mapDispatchToProps = {
  initializeApp,
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App);
