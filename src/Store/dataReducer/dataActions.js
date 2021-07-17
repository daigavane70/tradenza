export const SETCHARTDATA = "SETCHARTDATA";
export const BUYORDER = "BUYORDER";
export const SELLORDER = "SELLORDER";
export const SETNEWS = "SETNEWS";
export const SETLTP = "SETLTP";
export const SETAVAILABLESHARES = "SETAVAILABLESHARES";
export const STARTREFRESH = "STARTREFRESH";
export const SETTICK = "SETTICK";
export const MOVETICK = "MOVETICK";
export const LEADERBOARD = 'LEADERBOARD';

export const setChartData = (data) => {
  return {
    type: SETCHARTDATA,
    payload: {
      chartData: data,
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

export const setLeaderBoard = (leaderBoard) => {
  return {
    type: LEADERBOARD,
    leaderBoard: leaderBoard
  }
}
