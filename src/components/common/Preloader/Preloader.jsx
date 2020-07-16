import React from 'react';
import imgPreloader2 from '../../../assets/images/preloader2.svg'
import s from './Preloader.module.scss'

const Preloader = () => {
    return (
        <div className={s.preloaderWrapper}>
            <img className={s.img} src={/*Math.random() >= 0.5 ? imgPreloader : //random preloader 50%*/imgPreloader2} alt=""/>
        </div>
        
    )

}

export default Preloader;