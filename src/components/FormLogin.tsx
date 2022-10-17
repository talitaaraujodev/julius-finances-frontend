import "../assets/sass/login.scss";

export function FormLogin() {
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
      </form>
    </div>
  );
}
