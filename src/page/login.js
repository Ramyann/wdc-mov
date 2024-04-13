import { Link, useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import Nav from "../components/nav";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuth } from "../firebase/setup";
import { googleIcon } from "../assets/images/Google_Icons.webp";

const Login = () => {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("user@gmail.com");
  const [password, SetPassword] = useState("1234abcd");
  const [isSuccesss, SetIsSuccess] = useState(false);

  const navigate = useNavigate();

  const googleSignin = async (e) => {
    e.preventDefault();
    const map = { username, email, password };
    SetIsSuccess(true);
    try {
      await signInWithPopup(auth, googleAuth);
      auth.currentUser?.emailVerified && navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  console.log(auth?.currentUser?.email);

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
              SetEmail(e.target.value);
            }}
            value={email}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              SetPassword(e.target.value);
            }}
            value={password}
          />

          <div id="remember_me">
            <div>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>

            <a id="forget-password">Forgot your password</a>
          </div>

          <button type="submit" className="default-sign-in">
            Sign in
          </button>

          <div className="google-button">
            <button
              type="submit"
              className="google-sign-in"
              onClick={googleSignin}
            >
              <span /> Sign in with Google
            </button>
          </div>

          <div className="signup-container">
            <p>Don't have an account?</p>
            <Link to="/register">Sign up</Link>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Login;
