import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      dispError: "",
    };
  }

  handleSubmit = async (event) => {
    
    event.preventDefault();
    this.setState({dispError: ""})

    const { email, password } = this.state;
    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
      
      if( this.props.user !== null )
      {
          console.log("insiede if condition");
          <Redirect to="/dashboard"/>
      }

    } catch (error) {
      console.error(error);
      this.setState({dispError: error})
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <form onSubmit={this.handleSubmit}>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <span> {this.state.dispError} </span>

          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

export default connect(mapStateToProps)(SignIn);
