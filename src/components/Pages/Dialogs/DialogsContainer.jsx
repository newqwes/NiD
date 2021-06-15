import { connect } from 'react-redux';
import { compose } from 'redux';

import { addNewMessageText } from '../../../actionCreators';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = state => ({
  dialogData: state.dialogPage.dialogData,
});

const mapDispatchToProps = {
  addNewMessageText,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
