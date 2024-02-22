import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/Validate";
import { addUser } from "../utils/userSlice";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Login = () => {
  const [isSignInForm, setIsSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const togggleSignInForm = () => {
    setIsSignInform(!isSignInForm);
  };

  //handle button click

  const handleButtonClick = (e) => {
    e.preventDefault();
    //validate From Data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //signup logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/1c374ba1-86e6-4011-a8ce-bae26663d7ff/DE-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="img"
        />
      </div>

      <form className=" w-3/12  p-12 absolute bg-black my-36  mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold  text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4  w-full bg-gray-600"
          ref={email}
        />

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4  w-full bg-gray-600"
            ref={name}
          />
        )}

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
          ref={password}
        />

        <p className="text-red-500 font-bold text-lg py-4 ">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={togggleSignInForm}>
          {isSignInForm
            ? " New To Netflix Sign up now"
            : "Already Registered ? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
