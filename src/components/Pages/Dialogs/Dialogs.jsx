import s from './Dialogs.module.scss';
import DialogsPeople from './DialogsPeople/DialogsPeople';
import { Route } from 'react-router-dom';
import DialogWithPeople from './DialogWithPeople/DialogWithPeople';

const Dialogs = ({ dialogData, addNewMessageText, dialogOnChangeTextarea }) => {
  const dialogDataElement = dialogData.map(n => (
    <DialogsPeople key={n.id} namePerson={n.name} urlAvatarDialog={n.avatar} urlDialog={n.url} />
  ));

  const messageDataElement = dialogData.map(n => (
    <Route
      key={n.id}
      path={n.url}
      render={() => (
        <DialogWithPeople
          addNewMessageText={addNewMessageText}
          dialogOnChangeTextarea={dialogOnChangeTextarea}
          dialogData={n}
        />
      )}
    />
  ));

  return (
    <section className={s.section}>
      <div className={s.dialogsPeople}>{dialogDataElement}</div>
      {messageDataElement}
    </section>
  );
};

export default Dialogs;
