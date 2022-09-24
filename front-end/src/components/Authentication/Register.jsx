import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthenticationStyles from "./Authentication.module.css";
import { registerService } from "../../services";

import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  
  const newUser = { firstName, lastName, email, password };
  
  const validateEmail = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    setEmail(e.target.value);
    if (!emailRegex.test(e.target.value.toLowerCase())) {
      setError("Enter a valid email address");
    } else {
      setError("");
    }
  };

  function validatePassword(e) {
    var regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    setError("");

    setPassword(e.target.value);

    if (!regularExpression.test(e.target.value)) {
      setError(
        "The password should be 6-16 characters and should contain atleast 1 number & 1 special character"
      );
    }
  }

  const signupHandler = (e) => {
    e.preventDefault();

    registerService(newUser, navigate);
  };

  return (
    <div>
      <main className={AuthenticationStyles.formWrapper}>
        <div className={AuthenticationStyles.formRegister}>
          <form className={AuthenticationStyles.formContent}>
            <h2 className={AuthenticationStyles.formTitle}>Register</h2>
            <label htmlFor="fname" className={AuthenticationStyles.label}>
              First Name
            </label>
            <input
              type="text"
              id="fname"
              className={AuthenticationStyles.inputField}
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lname" className={AuthenticationStyles.label}>
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              className={AuthenticationStyles.inputField}
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="email" className={AuthenticationStyles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={AuthenticationStyles.inputField}
              placeholder="Enter email here"
              required
              value={email}
              onChange={validateEmail}
            />
            <label htmlFor="pass" className={AuthenticationStyles.label}>
              Password
            </label>
            <span className={AuthenticationStyles.inputPassword}>
              <input
                type={showPassword ? "type" : "password"}
                id="pass"
                className={AuthenticationStyles.inputField}
                placeholder="*******"
                required
                value={password}
                onChange={(e) => validatePassword(e, false)}
              />
              <span
                className={AuthenticationStyles.eyeIcon}
                onClick={() => setShowPassword((prevPass) => !prevPass)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </span>

            <div className={AuthenticationStyles.error}>{error}</div>

            {firstName && lastName && email && password && !error && (
              <button
                className={AuthenticationStyles.btn}
                onClick={signupHandler}
              >
                Register
              </button>
            )}
            <p className={AuthenticationStyles.newAccount}>
              Already have an account?
              <Link to="/login" className={AuthenticationStyles.link}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export { Register };
