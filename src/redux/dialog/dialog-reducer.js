import { DIALOGS } from '../constants';
import initialState from './initialState';

const dialogPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIALOGS.MESSAGE:
      return {
        ...state,
        dialogData: state.dialogData.map((n) => {
          if (action.id === n.id)
            return {
              ...n,
              message: {
                ...n.message,
                textOwn: [...n.message.textOwn, action.value],
              },
            };
          return n;
        }),
      };

    default:
      return state;
  }
};

export default dialogPageReducer;
