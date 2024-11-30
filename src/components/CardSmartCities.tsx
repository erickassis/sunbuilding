import { useState, useEffect } from 'react';
import '../styles/CardSmartCities.css';
import { buscarImagem } from './buscarImagem';

const CardSmartCities = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // Chama a função buscarImagem e aguarda a URL
    buscarImagem('smartCity').then(url => {
      setImageUrl(url);  // Atualiza o estado com a URL da imagem
    }).catch(error => {
      console.error("Erro ao buscar imagem:", error);
      setImageUrl(null);  // Se houver erro, define como null
    });
  }, []); // O efeito só será executado uma vez, quando o componente for montado

  return (
    <div className='container-cardsmartcities'>
      <div className='container-img-cardsmartcities'>
        {/* Verifica se a URL foi carregada antes de renderizar a imagem */}
        {imageUrl ? (
          <img className='imagens-pequenas' src={imageUrl} alt="Smart City" />
        ) : (
          <p>Carregando imagem...</p>  // Exibe uma mensagem enquanto a imagem está sendo carregada
        )}
      </div>

      <div className='container-text-cardsmartcities'>
        <ul className='lista-smartcities'>
          <li id='titulo-lista-smartcities'>
            <h1>SMART CITIES...</h1>
          </li>
          <li>
            <p>
              As smart-cities utilizam tecnologias avançadas como inteligência artificial, IoT (Internet das Coisas) e big data,
              para promover o desenvolvimento sustentável e melhorar a qualidade de vida na cidade.
              Otimizando áreas como transporte, energia e infraestrutura.
            </p>
            <br />
            <p>
              As smart-cities reduzem emissões de carbono, melhoram a mobilidade e gerenciam melhor os recursos naturais. <br />
              Clique em um dos <span>links</span> abaixo para saber mais.
            </p>
          </li>
          <li className='links-t'>
            <a href="https://isbel.com/pt-br/postes-inteligentes-ciudades-futuro/" target="_blank" rel="noopener noreferrer">Postes Inteligentes</a>
          </li>
          <li className='links-t'>
            <a href="https://www.bbc.com/portuguese/noticias/2013/09/130902_cidades_futuro_seul_ru" target="_blank" rel="noopener noreferrer">Coleta de Lixo Inteligente</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardSmartCities;
