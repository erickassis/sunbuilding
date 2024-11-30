import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import '../styles/LoginCadastro.css';
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(""); // Estado para mensagens de erro
  const navigate = useNavigate(); // Hook do React Router para redirecionamento

  const logar = async () => {
    try {
      // Autentica o usuário
      await signInWithEmailAndPassword(auth, email, senha);

      // Redireciona para a página inicial após o login
      navigate("/");
    } catch (err: any) {
      // Exibe mensagem de erro
      setError("Falha ao logar. Verifique seu email e senha.");
      console.error(err);
    }
  };

  return (
    <>
      <div className="bkground">
        <div className="login">
          <Link to="/" className="back-arrow">
            <FaArrowLeft size={30} />
          </Link>
          <h1>Entrar na Suns Building</h1>
          <div className="form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="logarEmail"
              placeholder="Email..."
              type="text"
            />
            <input
              onChange={(e) => setSenha(e.target.value)}
              id="logarSenha"
              placeholder="Senha..."
              type="password"
            />
            <button onClick={logar}>Logar</button>
          </div>
          {error && <p className="error-message">{error}</p>} {/* Exibe erro, se houver */}
          <footer className="footerLogin">
            <p>Não possui conta? <Link to="/Register">Cadastre-se aqui</Link></p>
          </footer>
        </div>
      </div>
    </>
  );
}
