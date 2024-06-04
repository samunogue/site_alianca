import { Header } from '../../components/Header/Header';
import './BeneficiosPage.css';
import assistencia from '../../assets/24Horas.png'
import carCrash from '../../assets/terceiro.png'
import fenomeno from '../../assets/fenomeno.png'
import incendio from '../../assets/incendio.png'
import rastreamento from '../../assets/rastreamento.png'
import reboque from '../../assets/reboque.png'
import vidro from '../../assets/vidro.png'
import chaveiro from '../../assets/chaveiro.png'
export const BeneficiosPage = () =>{
    const beneficios = [
        {
            id:0,
            icone:assistencia,
            titulo:"Assistência 24 Horas",
            descricao:"Benefício do guincho 24 horas por dia 7 dias por semana, 365 dias por ano"  
        },
        {
            id:1,
            icone:carCrash,
            titulo:"Terceiros",
            descricao:"Benefício para aúxílio durante o tratamento do evento com o terceiro."    
        },
        {
            id:2,
            icone:chaveiro,
            titulo:"Chaveiro",
            descricao:"Envio de profissional para auxílio com chaves e acessos ao veículo.."
        },
        {
            id:3,
            icone:fenomeno,
            titulo:"Fenômenos da natureza",  
            descricao:"Benefício para reparo em caso de fenômenos da natureza."
        },
        {
            id:4,
            icone:incendio,
            titulo:"Incêndio",
            descricao:"Benefício para casos de incêndios decorrentes de terceiros."  
        },
        {
            id:5,
            icone:rastreamento,
            titulo:"Rastreamento",
            descricao:"Rastreamento veicular com aplicativo"  
        },
        {
            id:6,
            icone:reboque,
            titulo:"Reboque",
            descricao:"Envio do guincho após evento comunicado."  
        },
        {
            id:8,
            icone:vidro,
            titulo:"Vidros",
            descricao:"Benefício para troca e reparo de vidros traseiro e para-brisa." 
        }
    ]
    return(
        <>
            <Header />
            <main className='section-page-nossos-beneficios'>
                <div className='box-titulo-page-beneficios'>
                    <h1 className='titulo-page-beneficios'>Nossos Beneficíos</h1>
                    <div className='linha-divisa-page-beneficios'></div>
                </div>
                <div className='box-page-beneficios'>
                    {beneficios.map(beneficio =>
                        <div className='card-beneficio-page-beneficio'>
                            <img src={beneficio.icone} className="icone-card-beneficio-page-beneficio" alt={`imagem beneficio ${beneficio.titulo}`} />
                            <div className='box-titulo-descricao-card-page-beneficio'>
                                <h2 className="titulo-beneficio-page-beneficio">{beneficio.titulo}</h2>
                                <div className='linha-divisa-card-page-beneficio'></div>
                                <p className='descricao-beneficio-page-beneficio'>{beneficio.descricao}</p>
                            </div>
                        </div>    
                    )}
                </div>
            </main>
        </>
    )
}