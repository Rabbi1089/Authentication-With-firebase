import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login1 = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setSuccessMsg("");
    setErrorMsg("");

    //checking user
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setSuccessMsg("user successfully logged");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
  return (
    <div className="hero min-h-3/5 min-w-1/4 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Here!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  // ref={emailRef}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>
              New to this website? Please <Link to="/register">Register</Link>
            </p>
            {successMsg && (
              <p className=" text-xl  text-green-800 font-bold">{successMsg}</p>
            )}
            {errorMsg && (
              <p className=" text-xl text-red-800 font-bold">{errorMsg}</p>
            )}
            <p>
              New to this site ? go for <a href="/HeroLogin">Signup</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login1;
