import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addNewMessageText } from '../../../redux/dialog/actions';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogData: state.dialogPage.dialogData,
  };
};
export default compose(connect(mapStateToProps, { addNewMessageText }), withAuthRedirect)(Dialogs);
