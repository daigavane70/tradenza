import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../../src/Components/sign-in/sign-in.component";
import SignUp from "../../../src/Components/sign-up/sign-up.component";

const SignInSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
