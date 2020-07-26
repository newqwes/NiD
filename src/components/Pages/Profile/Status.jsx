import { Component } from "react";
import React from 'react';
import s from './Profile.module.scss';

export default class Status extends Component {

    state = {
        isFucus: false,
        status: this.props.status
    }
    focusStatus = () => {
        this.setState({
            isFucus: true
        })
    }
    sendStatus = () => {
        this.setState({
            isFucus: false
        });
        this.props.updateUserStatus(this.state.status);
    }
    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) { // что бы засинхронизировать локал стейт с тем что приходит
        if(this.state.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <span className={s.containerStatus}>
                {this.state.isFucus
                    ? <div className={s.inputContainerStatus}>
                        <input onChange={this.changeStatus} autoFocus={true} value={this.state.status} />
                        <button onClick={this.sendStatus}>Изменить</button>
                    </div>
                    : <span onDoubleClick={this.focusStatus} className={s.spanContainerStatus}>{this.props.status || "Нет статуса"}</span>}
            </span>
        );
    }
}