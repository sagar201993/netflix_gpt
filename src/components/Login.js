import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInform] = useState(true);

  const togggleSignInForm = () => {
    setIsSignInform(!isSignInForm);
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

        {isSignInForm ? (
          <>
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 my-4  w-full bg-gray-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-600"
            />
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={togggleSignInForm}>
              New to Netflix ? Sign up now
            </p>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4  w-full bg-gray-600"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 my-4  w-full bg-gray-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-600"
            />
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={togggleSignInForm}>
              Already Register ? Sign in now
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
