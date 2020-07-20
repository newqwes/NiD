import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addNewMessageText, dialogOnChangeTextarea } from '../../../redux/dialog-reducer';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogData: state.dialogPage.dialogData
    }
}
export default compose (
    connect(mapStateToProps, {addNewMessageText, dialogOnChangeTextarea}),
    withAuthRedirect
)(Dialogs);