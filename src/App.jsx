import React from "react";
import s from "./App.module.scss";
import News from "./components/Pages/News/News";
import Chat from "./components/Pages/Chat/Chat";
import { Route } from "react-router-dom";
import MenuContainer from "./components/Menu/MenuContainer";
import ProfileContainer from "./components/Pages/Profile/ProfileContainer";
import DialogsContainer from "./components/Pages/Dialogs/DialogsContainer";
import UsersContainer from "./components/Pages/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Pages/Login/Login";

function App(props) {
  return (
    <>
      <HeaderContainer />
      <section className={s.section}>
        <div className={s.wrapper}>
          <div className={s.row}>
            <MenuContainer />
            <div className={s.content}>
              <Route
                path="/Profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/News" render={() => <News />} />
              <Route path="/Chat" render={() => <Chat />} />
              <Route path="/Users" render={() => <UsersContainer />} />
              <Route path="/Dialogs" render={() => <DialogsContainer />} />
              <Route path="/login" render={() => <Login />} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
