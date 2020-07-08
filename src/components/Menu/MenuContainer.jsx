import Menu from './Menu'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        menuItemData: state.menuSideBar.menuItemData
    }
  }
  
  export default connect(mapStateToProps)(Menu)
