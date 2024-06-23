import React from "react";
import scss from "./Auth.module.scss";
import img from "../assets/Ellipse 1 (3).png";
import anim from "../assets/Group (1).png";
import { Button, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useAuth } from "../context/AuthContext";
const LoginAdmin = () => {
  const { login } = useAuth();
  return (
    <div className={scss.main}>
      <div style={{ marginLeft: "-100px" }} className={scss.images}>
        <img
          style={{ position: "relative" }}
          className={scss.img}
          src={img}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            marginLeft: "-628px",
            marginTop: "210px",
          }}
          className={scss.anim}
          src={anim}
          alt=""
        />
      </div>
      <div className={scss.register_content}>
        <h1>Register Yourself</h1>
        <p>Begin your journey with us today</p>

        <div className={scss.inputs}>
          <p>Email/UserName</p>
          <input type="text" />
        </div>
        <div className={scss.inputs}>
          <p>Password</p>
          <input type="text" />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          className="inpRad"
        >
          <input type="checkbox" />
          <p>Remember me ? </p>

          <div style={{ marginLeft: "290px" }}>
            <p>Forget password ?</p>
          </div>
        </div>
        <Button
          onClick={() => login()}
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
          sign in
        </Button>

        <h5>OR SIGN IN WITH</h5>

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
          Don't hava an account ? <a href="/register">Click Here !</a>
        </p>
      </div>
    </div>
  );
};

export default LoginAdmin;
