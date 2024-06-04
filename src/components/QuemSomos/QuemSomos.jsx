import './QuemSomos.css'
import fotoSobreNos from '../../assets/foto-quem-somos.jpg';
export const QuemSomos = () =>{
    return(
        <section className='section-sobre-nos'>
                <div className="box-sobre-nos-texto">
                    <h1 className='titulo-sobre-nos'>Sobre a Aliança</h1>
                    <div className='linha-sobre-nos'></div>
                    <h2 className='descricao-sobre-nos'>
                    A associação Aliança, e uma Empresa de Proteção Veicular, que oferece diversas formas de proteção veicular,  além de outros benefícios via convênios com empresas e entidades parceiras.
E organizado sob forma de associaçăo. Associação ou Clube de Benefícios é um grupo de pessoas que se reúne com um mesmo objetivo. No nosso caso, o objetivo é garantir os benefícios e oferecer vantagens diferenciadas para todos os seus associados. </h2>
                </div>
                <img src={fotoSobreNos} className="icone-sobre-nos" alt="icone-alianca"/>
        </section>
    )
}