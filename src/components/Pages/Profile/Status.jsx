import { Component } from "react";
import React from 'react';
import s from './Profile.module.scss';

export default class Status extends Component {
    state = { 
        isFucus: false
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
    render() {
        return (
            <span className={s.containerStatus}>
            {this.state.isFucus 
            ? <div className={s.inputContainerStatus}>
                <input autoFocus={true} value={this.props.status}/>
                <button onClick={this.unFocusStatus}>Изменить</button>
            </div>
            : <span onDoubleClick={ this.focusStatus } className={s.spanContainerStatus}>{this.props.status}</span> }
            </span>
        );
    }
}