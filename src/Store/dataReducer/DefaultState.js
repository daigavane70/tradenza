export const sampleLeaderBoard = [
    {name: "Vedant Daigavane", netWorth: 10000},
    {name: "Vedant Daigavane", netWorth: 10000},
    {name: "Vedant Daigavane", netWorth: 9210},
    {name: "Vedant Daigavane", netWorth: 13200},
    {name: "Vedant Daigavane", netWorth: 55330},
    {name: "Vedant Daigavane", netWorth: 10120},
    {name: "Vedant Daigavane", netWorth: 10023},
    {name: "Vedant Daigavane", netWorth: 10012},
    {name: "Vedant Daigavane", netWorth: 72300},
    {name: "Vedant Daigavane", netWorth: 13300},
    {name: "Vedant Daigavane", netWorth: 5220},
    {name: "Vedant Daigavane", netWorth: 10230},
    {name: "Vedant Daigavane", netWorth: 41200},
]

const defaultState = {
    count: 1,
    ltp: 0,
    chartData: [
        {stock: "Reliance", data: [{ltp: 0}]},
        {stock: "Wipro", data: [{ltp: 0}]},
        {stock: "HDFC", data: [{ltp: 0}]},
        {stock: "Bajaj Finance", data: [{ltp: 0}]},
        {stock: "HCL Tech", data: [{ltp: 0}]}
    ],
    leaderBoard: sampleLeaderBoard
}

export default defaultState;
