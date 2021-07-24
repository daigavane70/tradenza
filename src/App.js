// NLV9HFGYDB41JLB2
import "./App.css";
import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Views/Dashboard";
import Home from "./Views/Home";
import Ranking from "./Views/Ranking";
import Analyze from "./Views/Analyze";
import { setCurrentUser } from "./Store/loginReducer/loginActions";
import { setTick, moveTick } from "./Store/dataReducer/dataActions";
import { connect } from "react-redux";
import Navbar from "./Components/navbar";
import SignInSignUpPage from "../src/Views/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Footer from "./Components/footer";
import Store from "./Store/Store";

// const userData = {
//   name: "Warren Buffett",
//   capital: 6500,
//   holdings: [
//     { scrip: "Reliance", avg: 2000, qty: 100 },
//     { scrip: "Wipro", avg: 200, qty: 150 },
//     { scrip: "HDFC", avg: 1300, qty: 30 },
//     { scrip: "Bajaj Finance", avg: 8500, qty: 20 },
//     { scrip: "Infosys", avg: 500, qty: 1000 },
//   ],
// };

function App(props) {
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          props.setCurrentUser({
            id: snapShot.data(),
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
        <Navbar />
      </header>
      <Switch>
        <Route path="/analyze" component={Analyze}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/ranking" component={Ranking}></Route>
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
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tick: state.data.tick,
    user: state.user.currentUser,
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
