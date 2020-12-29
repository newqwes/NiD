import React from 'react';
import imgPreloader2 from '../../../assets/images/preloader2.svg'
import s from './Preloader.module.scss'

const Preloader = () => {
    return (
        <div className={s.preloaderWrapper}>
            <img className={s.img} src={imgPreloader2} alt="Загрузка"/>
        </div>
        
    )

}

export default Preloader;