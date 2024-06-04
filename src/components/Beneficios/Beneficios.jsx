import assistencia from '../../assets/24Horas.png'
import carCrash from '../../assets/terceiro.png'
import fenomeno from '../../assets/fenomeno.png'
import incendio from '../../assets/incendio.png'
import rastreamento from '../../assets/rastreamento.png'
import reboque from '../../assets/reboque.png'
import sos from '../../assets/sos-mecanico.png'
import vidro from '../../assets/vidro.png'
import chaveiro from '../../assets/chaveiro.png'
import './Beneficios.css'
import { Link } from 'react-router-dom'

export const Beneficios = () =>{
    const beneficios = [
        {
            id:0,
            icone:assistencia,
            titulo:"Assistência 24 Horas",  
        },
        {
            id:1,
            icone:carCrash,
            titulo:"Terceiros",  
        },
        {
            id:2,
            icone:chaveiro,
            titulo:"Chaveiro"
        },
        {
            id:3,
            icone:fenomeno,
            titulo:"Fenômenos da natureza",  
        },
        {
            id:4,
            icone:incendio,
            titulo:"Incêndio",  
        },
        {
            id:5,
            icone:rastreamento,
            titulo:"Rastreador",  
        },
        {
            id:6,
            icone:reboque,
            titulo:"Reboque",  
        },
        {
            id:7,
            icone:sos,
            titulo:"Sos",  
        },
        {
            id:8,
            icone:vidro,
            titulo:"Vidros", 
        }
    ]
    return(
        <section className="section-beneficios">
            <div className='box-titulo-beneficios'>
                <h3 className="titulo-section-beneficios">Nossos Beneficíos</h3>
                <div className='linha-divisa-titulo-alianca'></div>
            </div>
            <div className="box-cards-beneficios">
                {beneficios.slice(0,8).map(beneficio =>
                <div className="card-beneficio" key={beneficio.id}>
                    <img src={beneficio.icone} alt="" className="imagem-beneficio"/>
                    <p className="titulo-beneficio">{beneficio.titulo}</p>
                    <div className='borda-beneficio'></div>
                </div>    
                )}
            </div>
            <Link to='/beneficios' className="button-ver-beneficios">Ver todos os Beneficíos</Link>
        </section>
    )
}