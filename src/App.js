// NLV9HFGYDB41JLB2
import "./App.css";
import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Views/Dashboard";
import Home from "./Views/Home";
import Funds from "./Views/Funds";
import Analyze from "./Views/Analyze";
import { setCurrentUser, setTick, moveTick } from "./Store/Actions";
import { connect } from "react-redux";
import Navbar from "./Components/navbar";
import SignInSignUpPage from "../src/Views/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import PrivateRoute from "../src/Components/privateRoute/privateRoute.component";

const userData = {
  name: "Warren Buffett",
  capital: 6500,
  holdings: [
    { scrip: "Reliance", avg: 2000, qty: 100 },
    { scrip: "Wipro", avg: 200, qty: 150 },
    { scrip: "HDFC", avg: 1300, qty: 30 },
    { scrip: "Bajaj Finance", avg: 8500, qty: 20 },
    { scrip: "Infosys", avg: 500, qty: 1000 },
  ],
};

function App(props) {
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          props.setCurrentUser({
            id: snapShot.data(),
            ...snapShot.data(),
          });
        });
      } else {
        props.setCurrentUser(userAuth);
      }
    });

    // console.log("UserData set to: ", userData);
  }, []);

  return (
    <div className="container-fluid App">
      <header className="bg-dark">
        <Navbar></Navbar>
      </header>

      <Switch>
        <Route path="/analyze" component={Analyze}></Route>
        <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
        <Route path="/funds" component={Funds}></Route>

        <Route
          exact
          path="/signin"
          render={() =>
            props.user == null ? (
              <SignInSignUpPage />
            ) : (
              <Redirect exact to="/" />
            )
          }
        />

        <Route exact path="/" component={Home}></Route>
        {/* {props.user == null ? <Route exact path="/signin" component={SignInSignUpPage}></Route> : null}
         */}
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tick: state.tick,
    user: state.currentUser,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    setCurrentUser: (data) => {
      dispatch(setCurrentUser(data));
    },
    setTick: (tick) => {
      dispatch(setTick(tick));
    },
    moveTick: () => {
      dispatch(moveTick());
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(App);

// Alpha Vantage API -KEY NLV9HFGYDB41JLB2
