import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { loadNewMessageText } from '../../../redux/actions';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => ({
  dialogData: state.dialogPage.dialogData,
});

const mapDispatchToProps = {
  loadNewMessageText,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
