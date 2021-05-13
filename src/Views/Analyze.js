import React, { useEffect } from "react";
import { setAvailableShares } from "../Store/Actions";
import { connect } from "react-redux";
import "../Assets/styles/analyze.css";

const news = [
  { companyName: "  Reliance", news: "asdasdjnsadkfn", time: "9:05" },
  { companyName: "HDFC", news: "asdasdjnsadkfn", time: "9:05" },
  { companyName: "Wipro", news: "asdasdjnsadkfn", time: "9:05" },
  { companyName: "BajajFinance", news: "asdasdjnsadkfn", time: "9:05" },
  { companyName: "Infosys", news: "asdasdjnsadkfn", time: "9:05" },
];

const availableShares = [
  { scrip: "Reliance", qty: 10000 },
  { scrip: "HDFC", qty: 200 },
  { scrip: "Wipro", qty: 3000 },
  { scrip: "BajajFinance", qty: 400 },
  { scrip: "Infosys", qty: 6000 },
];

const currentHolding = [
  { scrip: "Reliance", qty: 10000 },
  { scrip: "HDFC", qty: 2000 },
  { scrip: "Wipro", qty: 3000 },
  { scrip: "BajajFinance", qty: 400 },
  { scrip: "Infosys", qty: 6000 },
];

const tablebody = availableShares.map((item) => {
  return (
    <tr>
      <td className="text-center ">{item.scrip}</td>
      <td className="text-center ">{item.qty}</td>
    </tr>
  );
});

const tablebodyForCurrentHolding = currentHolding.map((item) => {
  return (
    <tr>
      <td className="text-center ">{item.scrip}</td>
      <td className="text-center ">{item.qty}</td>
    </tr>
  );
});

const newsCard = news.map((item) => {
  return (
    <div class="row">
      <div class="card  m-1">
        <h5 class="card-header text-white bg-dark text-center">
          {item.companyName}
        </h5>
        <div class="card-body  bg-secondary text-white ">
          {/* <h5 class="card-title">Special title treatment</h5> */}
          <p class="card-text">{item.news}</p>
          <small>Time - {item.time}</small>
        </div>
      </div>
    </div>
  );
});

const Analyze = (props) => {
  useEffect(() => {
    //two axios request for setting Getting News and Available Shares

    props.setShares(availableShares);
  });

  //   availableShares.forEach((share) => console.log(share));

  return (
    <div className="container">
      <br></br>
      <h4 className="text-white">
        Available Funds - <span class="badge bg-warning text-dark">3423</span>
      </h4>
      <div className="row m-3">
        <div className="col-lg-6">
          <h4 class="text-center text-white">News</h4>
          <hr />
          <div className="news ">{newsCard}</div>
        </div>
        <div className="col-lg-6 text-center ">
          <h4 className="text-white">Available Shares</h4>
          <hr />
          <table class="table table-dark table-striped table-hover">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>{tablebody}</tbody>
          </table>
          <h4 className="text-white">Current Holding</h4>
          <hr />
          <table class="table table-dark table-striped table-hover">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>{tablebodyForCurrentHolding}</tbody>
          </table>
        </div>
      </div>

      <br />

      {/* card */}
    </div>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    setShares: (shares) => {
      dispatch(setAvailableShares(shares));
    },
  };
};

export default connect(null, mapActionToProps)(Analyze);
