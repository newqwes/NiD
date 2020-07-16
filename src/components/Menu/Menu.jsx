import React from 'react'
import s from './Menu.module.scss'
import MenuItem from './MenuItem/MenuItem'
import * as axios from 'axios'

class Menu extends React.Component {
    componentDidMount() {
        this.props.addNewTime()
        axios.get("https://www.nbrb.by/api/exrates/rates/145").then(respons => {
            this.props.addNewExchangeRate(respons.data.Cur_OfficialRate);
        })
        setInterval(() => this.props.addNewTime(), 1000);
    }
    render() {
        return (
            <nav className={s.menu}>
                <div className={s.imgSection}>
                    <div className={s.imgContainer}>
                        <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png" alt="" />
                    </div>
                    <div className={s.imgTitle}>
                        <MenuItem value="Аширов Назар" status="active" linkUrl="/Profile" />
                    </div>
                    <div className={s.imgStatusBar}>
                        <div className={s.barContainer}>
                            <div className={s.barTitle}>
                                ПД.
                            </div>
                            <div className={s.bar}>
                                <progress max="100" value="80" className={s.bar1}>
                                    <div className={s.progressBar}>
                                    </div>
                                </progress>
                            </div>
                        </div>
                        <div className={s.barContainer}>
                            <div className={s.barTitle}>
                                УР.
                            </div>
                            <div className={s.bar}>
                                <progress max="100" value="60" className={s.bar2}>
                                    <div className={s.progressBar}>
                                    </div>
                                </progress>
                            </div>
                        </div>
                        <div className={s.barContainer}>
                            <div className={s.barTitle}>
                                АКТ.
                            </div>
                            <div className={s.bar}>
                                <progress max="100" value="70" className={s.bar3}>
                                    <div className={s.progressBar}>
                                    </div>
                                </progress>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className={s.ul}>
                    {this.props.menuItemData.map(m => <MenuItem key={m.id} value={m.value} linkUrl={m.linkUrl} />)}
                </ul>
                <div className={s.infoWtapper}>
                    <div className={s.titleTime}>
                        <h2>{this.props.whatTimeNow}</h2>
                    </div>
                    <div className={s.titleMoney}>
                        <h2>1$ = {this.props.exchangeRate}руб.</h2>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Menu;