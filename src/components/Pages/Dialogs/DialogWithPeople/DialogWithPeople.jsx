import React from 'react';
import s from './DialogWithPeople.module.scss';
import DialogOwn from './DialogOwn/DialogOwn';
import { Field, reduxForm } from 'redux-form';
import { TextareaCustom } from '../../../common/FormsControl/FormsControl';
import { required, maxLengthCreator } from '../../../../utils/validators/validators';

const maxLength1000 = maxLengthCreator(1000);

const DialogWithPeople = (props) => {
  let dialogOwn = props.dialogData.message.textOwn.map((n) => (
    <DialogOwn
      key={props.dialogData.id}
      textOwn={n}
      nameOwn={props.dialogData.nameOwn}
      avatarOwn={props.dialogData.avatarOwn}
    />
  ));

  let addNewMessage = (values) => {
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

const AddMessageForm = (props) => {
  return (
    <form className={s.submit} onSubmit={props.handleSubmit}>
      <Field
        component={TextareaCustom}
        validate={[required, maxLength1000]}
        name='dialogTextarea'
        placeholder='Введите текст'
      />
      <button>Отправить</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default DialogWithPeople;
