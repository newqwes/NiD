import Menu from './Menu'
import { connect } from 'react-redux'
import { addExchangeRateAC, addNewTimeAC } from '../../redux/sidebar-reducer';

const mapStateToProps = state => {
    return {
        menuItemData: state.menuSideBar.menuItemData,
        exchangeRate: state.menuSideBar.exchangeRate,
        whatTimeNow: state.menuSideBar.whatTimeNow
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addNewExchangeRate: () => dispatch(addExchangeRateAC()),
        addNewTime: () => dispatch(addNewTimeAC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)