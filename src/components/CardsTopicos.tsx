import { useState, useEffect } from 'react';
import '../styles/CardsTopicos.css';
import { buscarImagem } from './buscarImagem';

const CardsTopicos = () => {
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string | null }>({
    bioArchitecture: null,
    smartCity2: null,
    renewableEnergies: null,
  });

  useEffect(() => {
    // Função assíncrona para buscar as imagens
    const fetchImages = async () => {
      try {
        const bioArchitecture = await buscarImagem('bioArchitecture');
        const smartCity2 = await buscarImagem('smartCity2');
        const renewableEnergies = await buscarImagem('renewableEnergies');

        // Atualiza o estado com as URLs das imagens
        setImageUrls({
          bioArchitecture,
          smartCity2,
          renewableEnergies,
        });
      } catch (error) {
        console.error("Erro ao buscar as imagens:", error);
      }
    };

    fetchImages(); // Chama a função para buscar as imagens quando o componente for montado
  }, []); // O efeito é executado uma vez após o componente ser montado

  return (
    <div className='container-cardstopicos'>
      <div className='conatainer-img-cardstopicos'>
        <h2>Bioarquitetura</h2>
        {imageUrls.bioArchitecture ? (
          <img src={imageUrls.bioArchitecture} alt="Bioarquitetura" className='img-cardstopicos' />
        ) : (
          <p>Carregando imagem...</p> // Exibe uma mensagem enquanto a imagem não for carregada
        )}
      </div>
      <div className='conatainer-img-cardstopicos'>
        <h2>Smart-cities</h2>
        {imageUrls.smartCity2 ? (
          <img src={imageUrls.smartCity2} alt="Smart-cities" className='img-cardstopicos' />
        ) : (
          <p>Carregando imagem...</p> // Exibe uma mensagem enquanto a imagem não for carregada
        )}
      </div>
      <div className='conatainer-img-cardstopicos'>
        <h2>Energíes Renováveis</h2>
        {imageUrls.renewableEnergies ? (
          <img src={imageUrls.renewableEnergies} alt="Energíes Renováveis" className='img-cardstopicos' />
        ) : (
          <p>Carregando imagem...</p> // Exibe uma mensagem enquanto a imagem não for carregada
        )}
      </div>
    </div>
  );
};

export default CardsTopicos;