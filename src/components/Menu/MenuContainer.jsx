import Menu from './Menu'


const mapStateToProps = (state) => {
    return {
        menuItemData: state.menuSideBar.menuItemData
    }
  }
  
  const mapDispatchToProps = () => {
      return {}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Menu)
