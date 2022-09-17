//react
import { Link } from "react-router-dom";

//firebase
import { firebaseSignUp } from "../../firebase/FirebaseAuthFunctions/firebaseSignUp";

//useFormik
import { useFormik } from "formik";
import * as yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirm_password: "",
      role: "user",
    },
    validationSchema: yup.object({
      fullName: yup.string().required("Enter your name"),
      email: yup.string().email().required("Enter your email address."),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters.")
        .required("Enter your password."),
      confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match"),
    }),
    onSubmit: async (values) => {
      await firebaseSignUp(values.email, values.password, values.fullName);
    },
  });

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col bg-slate-100">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
        >
          <h1 className="mb-8 text-3xl text-center">
            Sign up Bug Tracker and join your team!
          </h1>
          <input
            name="fullName"
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Full Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="text-strongRed -mt-2 mb-2 text-sm font-bold">
              {formik.errors.fullName}
            </p>
          )}
          <input
            name="email"
            type="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-strongRed -mt-2 mb-2 text-sm font-bold">
              {formik.errors.email}
            </p>
          )}
          <input
            name="password"
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <input
            name="confirm_password"
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirm_password}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-strongRed -mt-2 mb-2 text-sm font-bold">
              {formik.errors.password}
            </p>
          )}
          {formik.touched.confirm_password &&
            formik.errors.confirm_password && (
              <p className="text-strongRed -mt-2 mb-2 text-sm font-bold">
                {formik.errors.confirm_password}
              </p>
            )}
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-fbFillColor hover:bg-blue-500 text-white focus:outline-none my-1"
          >
            Create Account
          </button>
        </form>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link to="/log-in">
            <span className="border-blue text-blue pl-1 text-blue-800 underline hover:text-blue-400">
              Log in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
