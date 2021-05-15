import * as Actions from "./dataActions";
import DefaultState from './DefaultState';

const Reducer = (state = DefaultState, action) => {
  switch (action.type) {
    case Actions.SETCHARTDATA: {
      console.log("Setting Chart Data");
      return {
        ...state,
        chartData: action.payload.chartData,
      };
    }

    // case Actions.SETCURRENTUSER:
    //   return {
    //     ...state,
    //     currentUser: action.payload
    // };

    case Actions.BUYORDER: {
      console.log("Buy Order");
      return state;
    }

    case Actions.SELLORDER: {
      console.log("Sell Order");
      return state;
    }

    case Actions.SETNEWS: {
      return {
        ...state,
        news: action.payload.news,
      };
    }

    case Actions.SETLTP: {
      return {
        ...state,
        ltp: action.ltp,
      };
    }

    case Actions.SETAVAILABLESHARES: {
      return {
        ...state,
        availableShares: action.payload.availableShares,
      };
    }

    // case Actions.STARTREFRESH: {

    //     const interval = setInterval(() => {
    //         console.log("Inside Interval")
    //         Store.dispatch(Actions.MOVETICK);

    //         if(state.tick === 10){
    //             return {
    //                 ...state
    //             }
    //         }

    //     }, 1000);

    //     return () => clearInterval(interval);
    // }

    case Actions.SETTICK: {
      return {
        ...state,
        tick: action.tick,
      };
    }

    case Actions.MOVETICK: {
      return {
        ...state,
        tick: state.tick + 1,
      };
    }

    default: {
      return state;
    }
  }
};

export default Reducer;
