import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import AuthenticationStyles from "./Authentication.module.css";
import { loginService } from "../../services";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginHandler = (e) => {
    e.preventDefault();

    loginService(user, navigate, location);
  };

  return (
    <main className={AuthenticationStyles.formWrapper}>
      <div className={AuthenticationStyles.formRegister}>
        <h3 className={AuthenticationStyles.formTitle}>Login</h3>
        <form
          className={AuthenticationStyles.formContent}
          onSubmit={(e) => loginHandler(e)}
        >
          <label htmlFor="email" className={AuthenticationStyles.label}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className={AuthenticationStyles.inputField}
            name="email"
            required
            placeholder="Enter Email Here"
            value={user.email}
            onChange={(e) => onChangeHandler(e)}
          />
          <label htmlFor="pass" className={AuthenticationStyles.label}>
            Password
          </label>
          <input
            type="password"
            id="pass"
            className={AuthenticationStyles.inputField}
            placeholder="*********"
            name="password"
            required
            value={user.password}
            onChange={(e) => onChangeHandler(e)}
          />

          <button className={AuthenticationStyles.btn}>LOGIN</button>
          <p className={AuthenticationStyles.newAccount}>
            Don't have an account yet?
            <Link to="/register" className={AuthenticationStyles.link}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export { Login };
