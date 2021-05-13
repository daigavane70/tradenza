export const SETCHARTDATA = "SETCHARTDATA";
export const SETUSERDATA = "SETUSERDATA";
export const BUYORDER = "BUYORDER";
export const SELLORDER = "SELLORDER";
export const SETNEWS = "SETNEWS";
export const SETLTP = "SETLTP";
export const SETAVAILABLESHARES = "SETAVAILABLESHARES";
export const STARTREFRESH = "STARTREFRESH";
export const SETTICK = "SETTICK";
export const MOVETICK = "MOVETICK";
export const SETCURRENTUSER = "SETCURRENTUSER";

export const setChartData = (data) => {
  return {
    type: SETCHARTDATA,
    payload: {
      chartData: data,
    },
  };
};

export const setCurrentUser = (user) => ({
  type: SETCURRENTUSER,
  payload: user,
});

export const setUserData = (data) => {
  return {
    type: SETUSERDATA,
    payload: {
      userData: data,
    },
  };
};

export const buyOrder = (orderDetails) => {
  return {
    type: BUYORDER,
    payload: {
      details: orderDetails,
    },
  };
};

export const sellOrder = (orderDetails) => {
  return {
    type: SELLORDER,
    payload: {
      details: orderDetails,
    },
  };
};

export const setNews = (getNews) => {
  return {
    type: SETNEWS,
    payload: {
      news: getNews,
    },
  };
};

export const setAvailableShares = (getShares) => {
  return {
    type: SETAVAILABLESHARES,
    payload: {
      availableShares: getShares,
    },
  };
};

export const setLTP = (ltp) => {
  return {
    type: SETLTP,
    ltp: ltp,
  };
};

export const setTick = (newTick) => {
  return {
    type: SETTICK,
    tick: newTick,
  };
};

export const moveTick = () => {
  return {
    type: MOVETICK,
  };
};

// export const startRefresing = () => {
//     return {
//         type: STARTREFRESH
//     }
// }
