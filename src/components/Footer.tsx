import '../styles/Footer.css'
import unifacs from '../assets/unifacs.png'

function Footer() {
  return (
    <footer className="container-footer">
      <div className="container-img-unifacs">
        <a href="https://www.unifacs.br/" target="_blank" rel="noopener noreferrer">
          <img className='logoUni' src={unifacs} alt="Logo da UNIFACS" />
        </a>
      </div>
      <div className="container-nome-footer">
        <p>DESENVOLVEDORES:</p>
        <ul className='lista-nome'>
          <li>AMANDA BEATRIZ DE JESUS SOUZA</li>
          <li>ERICK FONSECA DANTAS DE ASSIS</li>
          <li>GUILHERME SANTANA EVANGELISTA</li>
          <li>HÉLDER ARION DE BRITO LIMA</li>
          <li>KAWAN OLIVEIRA CARNEIRO</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
