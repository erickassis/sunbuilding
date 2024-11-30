import CardBrand from '../components/CardBrand';  
import CardsTopicos from '../components/CardsTopicos';
import CardBioArquitetura from '../components/CardBioArquitetura';
import CardSmartCities from '../components/CardSmartCities';
import CardEnergiaRenovaveis from '../components/CardEnergiaRenovaveis';
import CardIcones from '../components/CardIcones';
import Footer from '../components/Footer.tsx';

const Home = () => {
  return (
    <div>
      <CardBrand /> 
      <CardsTopicos/>
      <CardBioArquitetura/>
      <CardSmartCities/>
      <CardEnergiaRenovaveis/>
      <CardIcones/>
      <Footer></Footer>

    </div>
  );
};

export default Home;