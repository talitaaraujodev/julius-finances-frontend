import "../assets/sass/login.scss";

type PropsFormLogin = {
  handleRegister: () => void;
};
export function FormLogin(props: PropsFormLogin) {
  return (
    <div className="left">
      <form method="post" className="form">
        <h2 className="title">Login</h2>
        <span>Preencha os campos corretamente</span>

        <label htmlFor="name">Usuário</label>
        <input type="text" id="user" name="user" />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" />

        <button className="btn-send" type="submit">
          Entrar
        </button>
        <button className="link" onClick={props.handleRegister}>
          Registre-se
        </button>
      </form>
    </div>
  );
}
