import * as Actions from "./loginActions";

const DefaultState = {
    currentUser: null
}

const Reducer = (state = DefaultState, action) => {

  switch (action.type) {

    case Actions.SETCURRENTUSER:
      return {
        ...state,
        currentUser: action.user
    };

    case Actions.USERLOGOUT:
      return {
        currentUser: null
      }

    default: {
      return state;
    }
  }

};

export default Reducer;
