import { useState } from "react";
import scss from "./Auth.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import img from "../assets/Ellipse 1 (4).png";
import anim from "../assets/Animation 2.png";

const Register = () => {
  const { register, signInGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [pass, setPass] = useState("password");
  const navigate = useNavigate();

  async function signUp() {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className={scss.main}>
      <div className={scss.register_content}>
        <h1>Register Yourself</h1>
        <p>Begin your journey with us today</p>
        <div className={scss.name}>
          <div className={scss.fName}>
            <p>First Name</p>
            <input type="text" />
          </div>
          <div className={scss.lName}>
            <p>Last Name</p>
            <input type="text" />
          </div>
        </div>
        <div className={scss.inputs}>
          <p>Email</p>
          <input type="text" />
        </div>
        <div className={scss.inputs}>
          <p>Password</p>
          <input type={pass ? "password" : "text"} />
          <span
            onClick={() => {
              setPass(!pass);
            }}
          >
            {pass ? (
              <VisibilityOffIcon sx={{ color: "#fff" }} />
            ) : (
              <VisibilityIcon sx={{ color: "#fff" }} />
            )}
          </span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          className="inpRad"
        >
          <input type="checkbox" />
          <p>I accept the Terms & Conditions </p>
        </div>
        <Button
          onClick={() => signUp()}
          variant="contained"
          sx={{
            background: "rgba(247, 23, 53, 1)",
            color: "rgba(248, 168, 27, 1)",
            width: 575,
            height: 54,
            "&:hover": {
              background: "rgba(247, 23, 53, 1)",
              color: "rgba(248, 168, 27, 1)",
            },
          }}
        >
          sign up
        </Button>

        <h5>OR SIGN UP WITH</h5>

        <div className={scss.sign_logo}>
          <IconButton>
            <InstagramIcon sx={{ color: "#000", width: 54, height: 73 }} />
          </IconButton>
          <IconButton>
            <FacebookIcon sx={{ color: "#000", width: 54, height: 73 }} />
          </IconButton>
          <IconButton onClick={() => signInGoogle()}>
            <GoogleIcon sx={{ color: "#000", width: 54, height: 73 }} />
          </IconButton>
          <IconButton>
            <GitHubIcon sx={{ color: "#000", width: 54, height: 73 }} />
          </IconButton>
        </div>
        <p>
          Already sign up? <a href="/login">Click Here !</a>
        </p>
      </div>

      <img
        style={{ position: "relative" }}
        className={scss.img}
        src={img}
        alt=""
      />
      <img
        style={{ position: "absolute", marginLeft: "723px" }}
        className={scss.anim}
        src={anim}
        alt=""
      />
    </div>
  );
};

export default Register;
