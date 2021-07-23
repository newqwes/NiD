import imgPreloader2 from '../../../assets/images/preloader2.svg';
import s from './Preloader.module.scss';

const Preloader = () => (
  <div className={s.preloaderWrapper}>
    <img className={s.img} src={imgPreloader2} alt='' />
  </div>
);

export default Preloader;
