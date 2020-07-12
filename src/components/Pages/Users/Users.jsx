import React from 'react';
import s from './Users.module.scss';
import * as axios from 'axios';
import photoUser from '../../../assets/images/hipster.svg'

const Users = (props) => {
    if (props.usersData.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(respons => {
            props.setUsers(respons.data.items)
        })
        // props.setUsers([

        //     {
        //         id: 0, fullName: 'Анна', status: 'Профессионально занимаюсь маникюром', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-64/avatar-373-456325.png',
        //         location: { country: 'Белерусь', city: 'Гродно' }, isSubscribe: false
        //     },
        //     {
        //         id: 1, fullName: 'Майя', status: 'Домашние задания', avatarUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png',
        //         location: { country: 'Туркменистан', city: 'Ашхабад' }, isSubscribe: true
        //     },
        //     {
        //         id: 2, fullName: 'Азим', status: 'Учусь в школе', avatarUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
        //         location: { country: 'Туркменистан', city: 'Ашхабад' }, isSubscribe: false
        //     }

        // ])
    }

    let userContainer = props.usersData.map(n => {
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