import { FC } from "react";

//react
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { signIn } from "../../firebase/firebaseConfig";

//typescript
import { ILoginProps } from "../../Interfaces/LoginInterface";

const Login: FC = () => {
  const [loginInformation, setLoginInformation] = useState<ILoginProps | null>(
    null
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInformation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(loginInformation);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginInformation);
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