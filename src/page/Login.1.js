import { Link } from "react-router-dom";
import Nav from "../components/nav";

export const Login = () => {
  return (
    <body>
      <Nav />
      <div className="login">
        <form>
          <div class="title">
            <h2>Welcome Back</h2>
            <p>Sign in to continue</p>
          </div>

          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => {
              console.log(e);
            }}
          />
          <input type="password" placeholder="Password" />

          <div id="remember_me">
            <div>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>

            <a id="forget-password">Forgot your password</a>
          </div>
          <button type="submit">Sign in</button>

          <div className="signup-container">
            <p>Don't have an account?</p>
            <Link to="/register">Sign up</Link>
          </div>
        </form>
      </div>
    </body>
  );
};
