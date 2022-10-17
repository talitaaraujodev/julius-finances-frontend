import "../assets/sass/login.scss";

export function FormRegister() {
  return (
    <div className="left">
      <form method="post" className="form">
        <h2 className="title">Registre-se</h2>
        <span>Preencha os campos corretamente</span>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="name">Usuário</label>
        <input type="text" id="user" name="user" />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" />

        <button className="btn-send" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
