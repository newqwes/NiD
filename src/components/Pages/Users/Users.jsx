import React from 'react';
import s from './Users.module.scss';
import photoUser from '../../../assets/images/hipster.webp';
import { NavLink } from 'react-router-dom';
import Paginator from '../../common/Paginator';

const Users = (props) => {
  return (
    <section className={s.usersWrapper}>
      {props.usersData.map((n) => {
        return (
          <div key={n.id} className={s.userContainer}>
            <div className={s.avatarWrapper}>
              <img
                className={s.imgAvatar}
                src={n.photos.small != null ? n.photos.small : photoUser}
                alt=''
              />
            </div>
            <div className={s.subscribeButtonWrapper}>
              {n.followed ? (
                <button
                  disabled={props.isAnswerGone.some((id) => id === n.id)}
                  className={s.unSubscribeButton}
                  onClick={() => {
                    props.loadUnfollow(n.id);
                  }}
                >
                  Отписаться
                </button>
              ) : (
                <button
                  disabled={props.isAnswerGone.some((id) => id === n.id)}
                  className={s.subscribeButton}
                  onClick={() => {
                    props.loadFollow(n.id);
                  }}
                >
                  Подписаться
                </button>
              )}
            </div>
            <div className={s.fullNameWrapper}>
              <NavLink to={'/profile/' + n.id} className={s.nameLink}>
                <h3>{n.name}</h3>
              </NavLink>
            </div>
            <div className={s.statusWrapper}>
              <p className={s.statusP}>{n.status}</p>
            </div>
            <div className={s.country}>{'n.location.country'}</div>
            <div className={s.city}>{'n.location.city'}</div>
          </div>
        );
      })}
      <Paginator
        totalAmountItems={props.totalAmountUsers}
        itemsOnPage={props.usersOnPage}
        currentPageItems={props.currentPageUsers}
        newSelectedPage={props.newSelectedPage}
      />
    </section>
  );
};

export default Users;
