import s from './../DialogWithPeople.module.scss';

const DialogOwn = ({ nameOwn, textOwn, avatarOwn }) => (
  <div className={s.containerOwn}>
    <div className={s.containerNameMessage}>
      <div className={s.nameOwn}>
        <h3>{nameOwn}</h3>
      </div>
      <div className={s.messageOwn}>
        <p>{textOwn}</p>
      </div>
    </div>
    <div className={s.imgOwn}>
      <img src={avatarOwn} alt={nameOwn} />
    </div>
  </div>
);

export default DialogOwn;
