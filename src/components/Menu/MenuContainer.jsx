import Menu from './Menu'
import { connect } from 'react-redux'
import { addNewTime, getRates } from '../../redux/sidebar-reducer';
import React from 'react';
import { compose } from 'redux';

const mapStateToProps = state => {
    return {
        menuItemData: state.menuSideBar.menuItemData,
        exchangeRate: state.menuSideBar.exchangeRate,
        whatTimeNow: state.menuSideBar.whatTimeNow,
        isAuth: state.auth.isAuth
    }
}

class MenuContainer extends React.Component {
    componentDidMount() {
        this.props.getRates();
        setInterval(() => this.props.addNewTime() , 1000);
    }
    render() {
        return <Menu {...this.props} />
    }
}

export default compose(connect(mapStateToProps, {addNewTime, getRates}))(MenuContainer)
