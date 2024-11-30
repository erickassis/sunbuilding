import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { buscarImagem } from "./buscarImagem";
import "../styles/CardBrand.css";
import "../styles/CardsTopicos.css"; // Certifique-se de importar o CSS correto

const CardBrand = () => {
  const { currentUser } = useAuth();
  const nomeVisitante = currentUser ? currentUser.email?.split("@")[0].toUpperCase() : "Visitante";

  const [imagemSkyscraper, setImagemSkyscraper] = useState<string | null>(null);

  useEffect(() => {
    // Função assíncrona para buscar a imagem
    const fetchImage = async () => {
      try {
        const imageUrl = await buscarImagem("skyscraper");
        setImagemSkyscraper(imageUrl);
      } catch (error) {
        console.error("Erro ao buscar a imagem:", error);
      }
    };

    fetchImage(); // Chama a função para buscar a imagem quando o componente for montado
  }, []); // O efeito é executado uma vez após o componente ser montado

  return (
    <div className="container-cardbrand">
      <div className="container-limitador-cardbrand">
        <div className="container-img-cardbrand">
          {/* Verifica se a URL da imagem foi carregada */}
          {imagemSkyscraper ? (
            <img src={imagemSkyscraper} alt="Skyscraper" />
          ) : (
            <p>Carregando imagem...</p> // Exibe uma mensagem enquanto a imagem não for carregada
          )}
        </div>
        <div className="container-titulo-cardbrand">
          <h1>Bem Vindo {nomeVisitante}</h1>
        </div>
      </div>

      {/* Adicionando a descrição ao lado do card */}
      <div className="descricao-container">
        <h1 className="descricaoSite">Nosso Objetivo</h1>
        <p className="descricaoSite">
          Sun's Building é uma plataforma interativa, onde os usuários poderão acessar informações relevantes e dados sobre urbanização sustentável. Ao fazer isso, esperamos contribuir para a conscientização e a adoção de práticas que promovam o desenvolvimento de cidades mais verdes, resilientes e sustentáveis.
        </p>
      </div>
    </div>
  );
};

export default CardBrand;
