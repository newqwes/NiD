import React from 'react'
import s from './Users.module.scss';

const Users = (props) => {
    let userContainer = props.usersData.map(n => {
        return (
            <div className={s.userContainer}>
                <div className={s.avatarWrapper}>
                    <img className={s.imgAvatar} src={n.avatarUrl} alt="" />
                </div>
                <div className={s.subscribeButtonWrapper}>
                    {n.isSubscribe
                        ? <button className={s.unSubscribeButton} onClick={() => props.unsubscribe(n.id)}>Отписаться</button>
                        : <button className={s.subscribeButton} onClick={() => props.subscribe(n.id)}>Подписаться</button>}

                </div>
                <div className={s.fullNameWrapper}>
                    <h3>{n.fullName}</h3>
                </div>
                <div className={s.statusWrapper}>
                    <p className={s.statusP}>{n.status}</p>
                </div>
                <div className={s.country}>{n.location.country}</div>
                <div className={s.city}>{n.location.city}</div>
            </div>
        )
    })
    return (
        <section className={s.usersSection}>
            <div className={s.usersWrapper}>
                {userContainer}
            </div>
            <div className={s.buttonWrapper}>
                <button>Далее</button>
            </div>
        </section>
    )
}

export default Users