import { Link } from "react-router-dom";
import "../assets/css/style.css";
import { auth } from "../firebase/setup";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Nav = () => {

  const navigate = useNavigate()

  const Logout = async() => {
      try{
       await signOut(auth)
      }catch(error){
        console.log(error)
      }
  }

  
  const LogIn = async() => {
    navigate("/login")
}

  return (
    <nav>
      <link rel="icon" type="image/x-icon" href="./images/footer-logo.png" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Icons"
      />

      <div id="left-part">
        <div id="logo">
          <div className="logo-shape"></div>
        </div>
        <Link to={"/movies"}>WDC MOVIES</Link>
        <Link to={"/"}>Home</Link>
      </div>

      <div id="right-part">
        <div className="container">
          <div className="search-bar">
            <input
              type="text"
              id="search"
              className="search-input"
              placeholder="Search ..."
            />
            <span className="material-icons search-icon">search</span>
          </div>
          <div id="suggestions"></div>
        </div>

        <div className="container-two">
          <div className="account">
            {auth.currentUser?.emailVerified ? <Button onClick={Logout} >Logout</Button> :<Button onClick={LogIn}>Login</Button>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
