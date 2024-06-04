import './Footer.css'
import relogio from '../../assets/relogio.png'
import  mapa from '../../assets/mapa.png'
import telefone  from '../../assets/telefone.png'
import icone from '../../assets/icone.png'
import { Link } from 'react-router-dom'

export const Footer = () =>{
    return(
        <footer className="section-footer">
            <div className='box-icone-slogan'>
                <img src={icone} alt="icone aliança" className='icone-alianca-footer'/>
            </div>
            <div className="box-contato">
                <h3 className="titulo-box-contato">
                    Contato
                </h3>
                <div className='box-info'>
                    <img src={telefone} alt="" className='icone-info-contato' />
                    <p className="texto-info-contato">85 9 8703 5202</p>
                </div>
                <div className='box-info'>
                    <img src={mapa} alt="" className='icone-info-contato' />
                    <p className="texto-info-contato">Rua das Carnaúbas, 801 - Passaré, Fortaleza - CE</p>
                </div>
                <div className='box-info'>
                    <img src={relogio} alt="" className='icone-info-contato'/>
                    <div>
                        <p className="texto-info-contato horario">Segunda a sexta - 8:00 as 18:00</p>
                        <p className="texto-info-contato horario">Sabado - 8:00 as 12:00</p>
                    </div>
                </div>
            </div>
            <div className="box-links">
                <h3 className="titulo-box-links">
                    Links
                </h3>
                <Link to='/creditos' className="link-footer">Créditos</Link>
                <Link to='/termosdeuso' className="link-footer">Termos de Uso</Link>
                <Link to='/politicadeprivacidade' className="link-footer">Politica de privacidade</Link>
            </div>
        </footer>
    )
}