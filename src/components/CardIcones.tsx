import { useState, useEffect } from 'react';
import '../styles/CardIcones.css';
import { buscarImagem } from './buscarImagem';

const CardIcones = () => {
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string | null }>({
    energiasRenovaveis: null,
    ilustracaoBiomassa: null,
    ilustracaoBarragem: null,
    ilustracaoTurbina: null,
    ilustracaoPainelSolar: null
  });

  useEffect(() => {
    // Chama a função buscarImagem para cada imagem e atualiza o estado
    const fetchImages = async () => {
      try {
        const energiasRenovaveis = await buscarImagem('energiasRenovaveis');
        const ilustracaoBiomassa = await buscarImagem('illustracaoBiomassa');
        const ilustracaoBarragem = await buscarImagem('illustrcaoBarragem');
        const ilustracaoTurbina = await buscarImagem('illustracaoTurbina');
        const ilustracaoPainelSolar = await buscarImagem('illustracaoPainelSolar');

        // Atualiza o estado com as URLs das imagens
        setImageUrls({
          energiasRenovaveis,
          ilustracaoBiomassa,
          ilustracaoBarragem,
          ilustracaoTurbina,
          ilustracaoPainelSolar
        });
      } catch (error) {
        console.error("Erro ao buscar as imagens:", error);
      }
    };

    fetchImages(); // Chama a função assíncrona
  }, []); // O efeito só será executado uma vez, quando o componente for montado

  return (
    <div className='container-cardicones'>
      <div className='container-img-cardicones'>
        {/* Verifica se a URL da imagem de fundo foi carregada */}
        {imageUrls.energiasRenovaveis ? (
          <img
            src={imageUrls.energiasRenovaveis}
            alt="Energias Renováveis"
            id='background-img-cardicones'
          />
        ) : (
          <p>Carregando imagem de fundo...</p>
        )}

        <ul className='list-cardicones'>
          {/* Verifica se as URLs das imagens estão carregadas antes de renderizar */}
          {imageUrls.ilustracaoBiomassa ? (
            <li>
              <img
                className='img-card-icones'
                src={imageUrls.ilustracaoBiomassa}
                alt="Ilustração Biomassa"
              />
            </li>
          ) : (
            <p>Carregando imagem de Biomassa...</p>
          )}

          {imageUrls.ilustracaoBarragem ? (
            <li>
              <img
                className='img-card-icones'
                src={imageUrls.ilustracaoBarragem}
                alt="Ilustração Barragem"
              />
            </li>
          ) : (
            <p>Carregando imagem de Barragem...</p>
          )}

          {imageUrls.ilustracaoTurbina ? (
            <li>
              <img
                className='img-card-icones'
                src={imageUrls.ilustracaoTurbina}
                alt="Ilustração Turbina"
              />
            </li>
          ) : (
            <p>Carregando imagem de Turbina...</p>
          )}

          {imageUrls.ilustracaoPainelSolar ? (
            <li>
              <img
                className='img-card-icones'
                src={imageUrls.ilustracaoPainelSolar}
                alt="Ilustração Painel Solar"
              />
            </li>
          ) : (
            <p>Carregando imagem de Painel Solar...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CardIcones;
