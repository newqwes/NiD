import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addNewMessageTextAC, dialogOnChangeTextareaAC } from '../../../redux/dialog-reducer';

const mapStateToProps = (state) => {
    return {
        dialogData: state.dialogPage.dialogData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    addNewMessageText: id => dispatch(addNewMessageTextAC(id)),
    dialogOnChangeTextarea: (id, value) => dispatch(dialogOnChangeTextareaAC(id, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);