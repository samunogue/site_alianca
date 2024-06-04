import consultor from '../../assets/consultor.jpg'
import './SejaConsultor.css'
export const SejaConsultor = () =>{
    return(
        <section className='section-consultor'>
                <img src={consultor} className="icone-consultor" alt="imagem de um consultor"/>
                <div className="box-consultor-texto">
                    <p className='titulo-consultor'>Seja um Consultor</p>
                    <div className='linha-consultor'></div>
                    <p className='descricao-consultor'>✅ 100% da Adesão</p>
                    <p className='descricao-consultor'>✅ Premiação por meta batida</p>
                    <p className='descricao-consultor'>✅ Flexibilidade do horário</p>
                    <p className='descricao-consultor'>✅ Treinamento e capacitação</p>
                    <a href='https://wa.me/5585998623110?text=Olá+gostaria+de+me+tornar+um+consultor' className='button-consultor'>Saiba Mais</a>
                </div>
        </section>
    )
}