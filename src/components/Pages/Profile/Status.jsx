import { Component } from "react";
import React from 'react';
import s from './Profile.module.scss';

export default class Status extends Component {
    
    state = { 
        isFucus: false,
        userStatus: this.props.userStatus
     }
     focusStatus = () => {
        this.setState({
            isFucus: true
        })
     }
     unFocusStatus = () => {
        this.setState({
            isFucus: false
        })
     }
     changeStatus = (e) => {
        this.setState({
            userStatus: e.currentTarget.value
        })
     }
    render() {
        return (
            <span className={s.containerStatus}>
            {this.state.isFucus 
            ? <div className={s.inputContainerStatus}>
                <input onChange={this.changeStatus} autoFocus={true} value={this.state.userStatus}/>
                <button onClick={this.unFocusStatus}>Изменить</button>
            </div>
            : <span onDoubleClick={ this.focusStatus } className={s.spanContainerStatus}>{this.state.userStatus || "Нет статуса"}</span> }
            </span>
        );
    }
}