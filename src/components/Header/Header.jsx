import React from 'react'
import s from './Header.module.scss'

const Header = () => {
    //-------------------------- получение курса доллара -----------------------
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.nbrb.by/api/exrates/rates/145', false); //курс доллара к рублю нацбанк
    xhr.send();
    let bankData = JSON.parse(xhr.response);
    let USD_BYR = bankData.Cur_OfficialRate
    // ------------------------------------------------------------------------
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.row}>
                    <div className={s.logo}>Night Dream</div>
                    <div className={s.titleMoney}>
                        <h2>1$ = {USD_BYR}руб.</h2>
                    </div>
                    <div className={s.title}>
                        <h2>{new Date().toLocaleTimeString()}</h2>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;