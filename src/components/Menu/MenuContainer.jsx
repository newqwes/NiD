import Menu from './Menu'
import { connect } from 'react-redux'
import { addNewExchangeRate, addNewTime } from '../../redux/sidebar-reducer';

const mapStateToProps = state => {
    return {
        menuItemData: state.menuSideBar.menuItemData,
        exchangeRate: state.menuSideBar.exchangeRate,
        whatTimeNow: state.menuSideBar.whatTimeNow
    }
}

export default connect(mapStateToProps, {addNewExchangeRate, addNewTime})(Menu)