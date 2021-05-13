import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      currentUser !== null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signin" />
      )
    }
  />
);

// PrivateRoute.propTypes = {
//   auth: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(PrivateRoute);
