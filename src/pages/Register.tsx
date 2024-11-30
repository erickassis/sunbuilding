import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import '../styles/LoginCadastro.css';
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export default function Autenticar() { 
  // Estados para capturar os valores dos inputs e mensagens de erro
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState(""); // Estado para erros
  const navigate = useNavigate(); // Hook para redirecionamento

  const cadastrar = async () => {
    try {
      setMensagemErro("");

      await createUserWithEmailAndPassword(auth, email, senha);

      alert("Conta criada com sucesso!");

      navigate("/");
    } catch (err: any) {
      console.error(err);

      switch (err.code) {
        case "auth/email-already-in-use":
          setMensagemErro("O email já está em uso. Tente outro.");
          break;
        case "auth/invalid-email":
          setMensagemErro("Email inválido. Verifique o formato.");
          break;
        case "auth/weak-password":
          setMensagemErro("A senha deve ter no mínimo 6 caracteres.");
          break;
        default:
          setMensagemErro("Erro ao criar a conta. Tente novamente.");
      }
    }
  };

  const logout = async () => {
    try {
      // Limpa mensagens anteriores
      setMensagemErro("");

      // Realiza o logout
      await signOut(auth);
      alert("Você saiu da sua conta."); // Alerta de sucesso
    } catch (err) {
      console.error(err);
      setMensagemErro("Erro ao sair da conta. Tente novamente.");
    }
  };

  return (
    <>
      <div className="bkground">
        <div className="login">
          <Link to="/" className="back-arrow">
            <FaArrowLeft size={34} />
          </Link>
          <h1>Entrar na Suns Building</h1>
          <div className="form">
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              id="email" 
              placeholder="Email..." 
              type="text" 
            />
            <input 
              onChange={(e) => setSenha(e.target.value)} 
              id="senha" 
              placeholder="Senha..." 
              type="password" 
            />
            <button onClick={cadastrar}>Cadastrar-se</button>
            <button onClick={logout}>Logout</button>
          </div>

          {/* Exibe mensagens de erro */}
          {mensagemErro && <p className="error-message">{mensagemErro}</p>}

          <footer className="footerLogin">
            <p>Já possui conta? <Link to="/Login">Faça login aqui</Link></p>
          </footer>
        </div>
      </div>
    </>
  );
}
