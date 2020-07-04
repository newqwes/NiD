import React from 'react'
import s from './Dialogs.module.scss'
import DialogsPeople from './DialogsPeople/DialogsPeople'
import DialogWithPeople from './DialogWithPeople/DialogWithPeople'
import { BrowserRouter, Route } from 'react-router-dom'

const Dialogs = (props) => {
    let dialogDataElement = props.state.dialogData.map(n => <DialogsPeople namePerson={n.name} urlAvatarDialog={n.avatar} urlDialog={n.url} />)
    let messageDataElement = props.state.dialogData.map(n => <Route path={n.url} render={() => <DialogWithPeople message={n.message} avatar={n.avatar} name={n.name} id={n.id} addNewMessage={props.addNewMessage}/>} /> )
    return (
        <BrowserRouter>
            <section className={s.section}>
                <div className={s.dialogsPeople}>
                    {dialogDataElement}
                </div>
                    { messageDataElement }
                    
            </section>
        </BrowserRouter>
    )
}

export default Dialogs;