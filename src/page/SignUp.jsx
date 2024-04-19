import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";

const SignUp = () => {
  const [resError, setResError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    //reset error
    setResError(" ");
    setSuccess("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accept = e.target.terms.checked;
    console.log("if checked", accept);

    if (password.length < 6) {
      setResError("Password must be 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setResError("USe at lest one uppercase letter");
      return;
    } else if (!accept) {
      setResError("Accept our terms and conditions");
      return;
    }
    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(`Account create sucessfully with-${email}`);
      })
      .catch((error) => {
        console.log(error.message);
        const rError = error.message;
        setResError(rError);
      });
  };

  return (
    <div className=" w-2/3 mx-auto">
      <div className="mx-auto w-2/5 ">
        <h1 className=" text-2xl text-center font-bold">Sign Up here</h1>
        <form onSubmit={handleSubmitButton}>
          <input
            className="border w-full mb-4"
            type="email"
            name="email"
            id=""
            placeholder="email"
            required
          />
          <br />
          <div className="relative">
            <input
              className="w-full"
              type={showPassword ? "password" : "text"}
              name="password"
              id=""
              placeholder="Password"
              required
            />
            <span
              className="absolute top-1 right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BsFillEyeFill /> : <BsEyeSlashFill />}
            </span>
          </div>
          <br />
          <div className=" gap-1">
            <input type="checkbox" name="terms" id="terms" />
            <span className=" ml-1">
              Accept our <a href="">terms and conditions</a>
            </span>
          </div>
          <br />
          <button className="border w-full btn btn-primary" type="submit">
            Sign-Up
          </button>
        </form>
        {resError && (
          <p className=" text-xl text-red-800 font-bold text-center">
            {resError}
          </p>
        )}

        {success && (
          <p className="text-center text-xl font-bold text-green-800">
            {success}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
