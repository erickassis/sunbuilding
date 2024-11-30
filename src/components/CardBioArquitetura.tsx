import { useState, useEffect } from 'react';
import '../styles/CardBioArquitetura.css';
import { buscarImagem } from './buscarImagem';

const CardBioArquitetura = () => {
  const [bioArchitectureImage, setBioArchitectureImage] = useState<string | null>(null);

  useEffect(() => {
    // Função assíncrona para buscar a imagem
    const fetchImage = async () => {
      try {
        const imageUrl = await buscarImagem('bioArchitecture2');
        setBioArchitectureImage(imageUrl);
      } catch (error) {
        console.error("Erro ao buscar a imagem:", error);
      }
    };

    fetchImage(); // Chama a função para buscar a imagem quando o componente for montado
  }, []); // O efeito é executado uma vez após o componente ser montado

  return (
    <div className='container-cardbioarquitetura'>
      <div className='container-img-cardbioarquitetura'>
        {/* Verifica se a URL da imagem foi carregada */}
        {bioArchitectureImage ? (
          <img className='imagens-pequenas' src={bioArchitectureImage} alt="Bioarquitetura" />
        ) : (
          <p>Carregando imagem...</p> // Exibe uma mensagem enquanto a imagem não for carregada
        )}
      </div>

      <div className='container-text-cardbioarquitetura'>
        <ul className='lista-bioarquitetura'>
          <li id='titulo-lista-bioarquitetura'>
            <h1>BIO-ARQUITETURA...</h1>
          </li>
          <li>
            <p>A bio-arquitetura é uma abordagem sustentável que integra técnicas de construção ecológicas e materiais naturais, minimizando o impacto ambiental e criando espaços mais harmoniosos com o meio ambiente.</p>
            <br />
            <p>Clique em um dos <span>links</span> abaixo para saber mais:</p>
          </li>
          <li className='links-t'>
            <a href="https://www.orcafascio.com/papodeengenheiro/ecotelhado" target='_black' rel="noopener noreferrer">Ecotelhados</a>
          </li>
          <li className='links-t'>
            <a href="https://www.archdaily.com.br/br/920314/drenagem-urbana-sustentavel-para-a-concretizacao-de-metas-de-ods-onu" target='_black' rel="noopener noreferrer">Sistema de Drenagem Sustentável</a>
          </li>
          <br />
          <li className='links-t'>
            <a href="https://www.escolaengenharia.com.br/tijolo-ecologico/" target='_black' rel="noopener noreferrer">Tijolos Ecológicos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardBioArquitetura;
