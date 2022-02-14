import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { initializeApp } from './actionCreators/thunk';

import Menu from './components/Menu';
import ProfileContainer from './components/Pages/Profile/ProfileContainer';
import DialogsContainer from './components/Pages/Dialogs/DialogsContainer';
import UsersContainer from './components/Pages/Users/UsersContainer';
import Header from './components/Header';

import News from './components/Pages/News/News';
import Chat from './components/Pages/Chat/Chat';
import Login from './components/Pages/Login/Login';
import Preloader from './components/common/Preloader/Preloader';

import s from './App.module.scss';

const App = props => {
  useEffect(() => {
    props.initializeApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!props.isInitialized) {
    return <Preloader />;
  }

  return (
    <>
      <Header />
      <section className={s.section}>
        <div className={s.wrapper}>
          <div className={s.row}>
            <Menu />
            <div className={s.content}>
              <Switch>
                <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/' exact render={() => <Redirect to='/Profile' />} />
                <Route path='/News' render={() => <News />} />
                <Route path='/Chat' render={() => <Chat />} />
                <Route path='/Users' render={() => <UsersContainer />} />
                <Route path='/Dialogs' render={() => <DialogsContainer />} />
                <Route path='/login' render={() => <Login />} />
                <Route path='*' render={() => <div>404 NOT FOUND</div>} />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = state => ({
  isInitialized: state.app.isInitialized,
});

const mapDispatchToProps = { initializeApp };

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(App);
