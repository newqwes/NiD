import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addNewMessageText, dialogOnChangeTextarea } from '../../../redux/dialog-reducer';

const mapStateToProps = (state) => {
    return {
        dialogData: state.dialogPage.dialogData
    }
}
export default connect(mapStateToProps, {addNewMessageText, dialogOnChangeTextarea})(Dialogs);