import Menu from './Menu'
import { connect } from 'react-redux'
import { addNewExchangeRate, addNewTime, getRates } from '../../redux/sidebar-reducer';
import React from 'react';

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
        this.props.addNewTime();
        setInterval(() => this.props.addNewTime() , 1000);
        this.props.getRates(this.props.addNewExchangeRate);
    }
    render() {
        return <Menu {...this.props} />
    }
}

export default connect(mapStateToProps, {addNewTime, addNewExchangeRate, getRates})(MenuContainer)