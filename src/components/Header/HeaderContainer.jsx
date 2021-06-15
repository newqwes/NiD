import Header from './Header';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { logout } from '../../actionCreators/thunk';

const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = { logout };

export default compose(connect(mapStateToProps, mapDispatchToProps))(HeaderContainer);
