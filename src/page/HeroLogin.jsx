import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useState } from "react";
import { update } from "firebase/database";

const HeroLogin = () => {
  const [signUpError, setsignUpError] = useState("");
  const [success, setSuccess] = useState(" ");

  const handleHeroLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    console.log(name, email, password);

    if (password.length < 6) {
      setsignUpError("Password must be 6 character");
      return;
    }

    console.log("Hero Login clicked");
    setsignUpError(" ");
    setSuccess("");

    //add firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(`account created successfully with-${email}`);

        //Profile updated
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log("Profile updated");
          })
          .catch((error) => {
            console.log(error.message);
          });

        //sendEmailVerification
        sendEmailVerification(result.user).then(() => {
          alert("check your email");
        });
      })

      .catch((error) => {
        console.log(error.message);
        const signError = error.message;
        setsignUpError(signError);
      });
  };
  return (
    <div className="lg:m-10">
      <div className="hero mx-auto lg:min-h-[3/5] lg:max-w-6xl bg-base-200 p-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleHeroLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className=" gap-1">
                <input type="checkbox" name="terms" id="terms" required />
                <span className=" ml-1">
                  Accept our <a href="">terms and conditions</a>
                </span>
              </div>
            </form>
            {signUpError && (
              <p className=" text-red-500 font-bold text-center">
                {signUpError}
              </p>
            )}
            {success && (
              <p className=" text-xl text-green-700 font-bold text-center">
                {success}
              </p>
            )}
            <p>
              Already have a account ? go to <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLogin;
