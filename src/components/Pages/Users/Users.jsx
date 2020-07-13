import React from 'react';
import s from './Users.module.scss';
import photoUser from '../../../assets/images/hipster.svg'

const Users = (props) => {
    return (
        <section className={s.usersWrapper}>
            {
                props.usersData.map(n => {
                    return (
                        <div key={n.id} className={s.userContainer}>
                            <div className={s.avatarWrapper}>
                                <img className={s.imgAvatar} src={n.photos.small != null ? n.photos.small : photoUser} alt="" />
                            </div>
                            <div className={s.subscribeButtonWrapper}>
                                {n.isSubscribe
                                    ? <button className={s.unSubscribeButton} onClick={() => props.unsubscribe(n.id)}>Отписаться</button>
                                    : <button className={s.subscribeButton} onClick={() => props.subscribe(n.id)}>Подписаться</button>}

                            </div>
                            <div className={s.fullNameWrapper}>
                                <h3>{n.name}</h3>
                            </div>
                            <div className={s.statusWrapper}>
                                <p className={s.statusP}>{n.status}</p>
                            </div>
                            <div className={s.country}>{"n.location.country"}</div>
                            <div className={s.city}>{"n.location.city"}</div>
                        </div>
                    )
                })
            }
            <div className={s.usersPageButton_wrapper}>
                {props.pages.map(n => {
                    return (
                        <span className={`${s.usersPageButton} ${props.currentPageUsers === n && s.usersPageButton_active}`} onClick={(e) => props.newSelectedPage(n)}>{n}</span>
                    )
                })}
            </div>
        </section>
    )
}

export default Users