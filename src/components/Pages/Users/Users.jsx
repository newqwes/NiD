import React from 'react';
import s from './Users.module.scss';
import * as axios from 'axios';
import photoUser from '../../../assets/images/hipster.svg'

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(respons => {
            this.props.setUsers(respons.data.items)
        })
    }

    render() {
        return (
            <section className={s.usersWrapper}>{
                this.props.usersData.map(n => {
                    return (
                        <div key={n.id} className={s.userContainer}>
                            <div className={s.avatarWrapper}>
                                <img className={s.imgAvatar} src={n.photos.small != null ? n.photos.small : photoUser} alt="" />
                            </div>
                            <div className={s.subscribeButtonWrapper}>
                                {n.isSubscribe
                                    ? <button className={s.unSubscribeButton} onClick={() => this.props.unsubscribe(n.id)}>Отписаться</button>
                                    : <button className={s.subscribeButton} onClick={() => this.props.subscribe(n.id)}>Подписаться</button>}

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
            </section>
        )
    }
}


export default Users