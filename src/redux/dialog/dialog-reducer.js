import initialState from './initialState';
import { ADD_NEW_MESSAGE } from './types';

const dialogPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
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
