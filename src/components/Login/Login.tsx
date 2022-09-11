//react
import { useState } from "react";

//sign-in function
import { firebaseSignIn } from "../../firebase/FirebaseAuthFunctions/firebaseSignIn";

//interfaces
import { ILoginProps } from "../../Interfaces/LoginInterface";

const Login = () => {
  const [loginInformation, setLoginInformation] = useState<ILoginProps | null>(
    null
  );

  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); //if there is an error while user try to login show the error.

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInformation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setDisplayErrorMessage(false);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginInformation?.email && loginInformation.password) {
      firebaseSignIn(
        loginInformation?.email,
        loginInformation?.password,
        setDisplayErrorMessage,
        setErrorMessage
      );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-100">
      <h1 className="font-semibold text-5xl text-center leading-tight">
        Bug Tracker
      </h1>
      <hr className=" w-9/12 mt-4 max-w-lg" />
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full mx-auto items-center mt-8 md:w-8/12 lg:w-8/12 xl:w-6/12"
      >
        <h2 className="mb-4 font-bold">Login your account</h2>
        <input
          className="border-2 w-10/12 h-12 lg:w-6/12 pl-2 placeholder:text-lg"
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
        />
        <input
          className="border-2 w-10/12 h-12 mt-2 lg:w-6/12 pl-2 placeholder:text-lg"
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
        />
        {displayErrorMessage && (
          <p className="w-10/12 h-4 lg:w-6/12 pl-1 my-1 text-strongRed font-bold">
            {errorMessage}
          </p>
        )}
        <button className="bg-fbFillColor hover:bg-blue-500 my-6 w-7/12 h-12 lg:w-4/12 text-white font-bold">
          Sign In
        </button>
      </form>

      <div>
        <p>
          Don't have an account?
          <span className="underline cursor-pointer pl-1 hover:text-gray-600">
            Sign up here
          </span>
          .
        </p>
        <p
          // onClick={() => signIn("testdeveloper@gmail.com", 123456789)}
          className="mt-2 underline cursor-pointer hover:text-gray-600"
        >
          Sign in as a Demo User
        </p>
        <p
          // onClick={() => signIn("kayhankayhan@hotmail.com", 123456789)}
          className="mt-2 underline cursor-pointer hover:text-gray-600"
        >
          Sign in as a Admin
        </p>
      </div>
    </div>
  );
};
export default Login;
