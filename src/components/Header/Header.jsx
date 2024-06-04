import icone from '../../assets/icone.png';
import './Header.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import regulamento from './regulamento.pdf';

export const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToCotacao = async () => {
    await navigate('/home');
    const posicao = document.querySelector('.section-faca-cotacao').getBoundingClientRect();
    window.scrollTo(0, posicao.y);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`box-header ${isMenuOpen ? 'nav-open' : ''}`}>
      <Link to='/home'><img src={icone} alt="" className='icone-logo-header' /></Link>
      <nav className={`box-navegacao-header ${isMenuOpen ? 'nav-open' : ''}`}>
        <a className='link-header' href={regulamento} download='RegulamentoAliança-2023'>Regulamento</a>
        <Link to='/beneficios' className='link-header'>Benefícios</Link>
        <a className='link-header' onClick={scrollToCotacao}>Faça sua Cotação</a>
        <a className='button-area-cliente link-header' href="https://kepler.hinova.com.br/sga/area/v5/auth/d28f81231d62bf78cccffa3fbd48975af4fbf23ece5d950022b2df5993ef0a22bedd5eede6a0d2401a672637b575cf06148ecdd705991d084c027fc6b4b0210e06ac5d3865374feb8d22e4e56403de34">Área Cliente</a>
      </nav>
      <button className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className='navbar-toggle-icon'>Menu</span>
      </button>
    </header>
  );
};
