import { Field, reduxForm } from 'redux-form';

import DialogOwn from './DialogOwn/DialogOwn';
import { TextareaCostom } from '../../../common/FormsControl/FormsControl';
import { required, maxLengthCreator } from '../../../../utils/validators/validators';

import s from './DialogWithPeople.module.scss';

const maxLength1000 = maxLengthCreator(1000);

const DialogWithPeople = props => {
  let dialogOwn = props.dialogData.message.textOwn.map(n => (
    <DialogOwn
      key={props.dialogData.id}
      textOwn={n}
      nameOwn={props.dialogData.nameOwn}
      avatarOwn={props.dialogData.avatarOwn}
    />
  ));

  const addNewMessage = values => {
    props.addNewMessageText(props.dialogData.id, values.dialogTextarea);
  };

  return (
    <div className={s.dialogWithPeople}>
      <div className={s.section}>
        <div className={s.containerEnemy}>
          <div className={s.imgEnemy}>
            <img src={props.dialogData.avatar} alt={props.dialogData.name} />
          </div>
          <div className={s.containerNameMessage}>
            <div className={s.nameEnemy}>
              <h3>{props.dialogData.name}</h3>
            </div>
            <div className={s.messageEnemy}>
              <p>{props.dialogData.message.textEnemy}</p>
            </div>
          </div>
        </div>
        {dialogOwn}
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = ({ handleSubmit }) => (
  <form className={s.submit} onSubmit={handleSubmit}>
    <Field
      component={TextareaCostom}
      validate={[required, maxLength1000]}
      name='dialogTextarea'
      placeholder='Введите текст'
    />
    <button>Отправить</button>
  </form>
);

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default DialogWithPeople;
