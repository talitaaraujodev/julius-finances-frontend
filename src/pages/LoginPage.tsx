import "../assets/sass/login.scss";
import loginImg from "../assets/images/login.jpg";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <div className="container-login">
      <div className="content-login">
        <div className="left">
          <form method="post" className="form">
            <h2 className="title">Login</h2>
            <span>Preencha os campos corretamente</span>

            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" />

            <button className="btn-send" type="submit">
              Entrar
            </button>
            <Link to={"/register"} className="link-register">
              Registre-se
            </Link>
          </form>
        </div>
        <div className="right">
          <h2 className="title">Julius Finances</h2>
          <img src={loginImg} alt="Image Login" />
          <span>Organização finanças pessoal</span>
          <button className="btn-register">Registre-se</button>
        </div>
      </div>
    </div>
  );
}
