import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addNewMessageText, dialogOnChangeTextarea } from '../../../redux/dialog-reducer';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogData: state.dialogPage.dialogData
    }
}
let withRedirect = withAuthRedirect(Dialogs)
export default connect(mapStateToProps, {addNewMessageText, dialogOnChangeTextarea})(withRedirect);