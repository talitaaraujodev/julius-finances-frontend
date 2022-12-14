import { useState } from "react";
import "../assets/sass/login.scss";
import loginImg from "../assets/images/login.jpg";
import { FormLogin } from "../components/FormLogin";
import { FormRegister } from "../components/FormRegister";

export function LoginPage() {
  const [isSingIn, setIsSignIn] = useState(true);

  const handleRegister = () => {
    setIsSignIn(!isSingIn);
  };
  const handleLogin = () => {
    setIsSignIn(true);
  };
  return (
    <div className="container-login">
      <div className="content-login">
        <div className="left">
          {isSingIn ? (
            <FormLogin handleRegister={handleRegister} />
          ) : (
            <FormRegister handleLogin={handleLogin} />
          )}
        </div>
        <div className="right">
          <h2 className="title">Julius Finances</h2>
          <img src={loginImg} alt="Image Login" />
          <span>Organização de finanças pessoais</span>
          <button className="btn-register" onClick={handleRegister}>
            {isSingIn ? "Registre-se" : "Logar"}
          </button>
        </div>
      </div>
    </div>
  );
}
