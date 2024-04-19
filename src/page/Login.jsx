import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Login = () => {
  const handLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //console.log(email, password);
    //console.log("hello");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center text-center dark:bg-gray-50 dark:text-gray-800">
        <form
          onSubmit={handLogin}
          noValidate=""
          className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-800"
        >
          <label
            htmlFor="username"
            className="self-start text-xs font-semibold"
          >
            Username or Email
          </label>
          <input
            id="username"
            name="email"
            type="text"
            className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
          />
          <label
            htmlFor="password"
            className="self-start mt-3 text-xs font-semibold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600"
          />
          <button
            type="submit"
            className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Login
          </button>
          <div className="flex justify-center mt-6 space-x-2 text-xs">
            <a
              rel="noopener noreferrer"
              href="#"
              className="dark:text-gray-600"
            >
              Forgot Password?
            </a>
            <span className="dark:text-gray-600">/</span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="dark:text-gray-600"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
