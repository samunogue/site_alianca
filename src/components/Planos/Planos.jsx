import './Planos.css'
export const Planos = () =>{
    const beneficios = [
            {
                id:0,
    
                titulo:"Assistência 24 Horas",  
            },
            {
                id:1,
                  titulo:"Terceiros",  
            },
            {
                id:2,
                titulo:"Chaveiro",  
            },
            {
                id:3,
                  titulo:"Fenômenos da natureza",  
            },
            {
                id:4,
                  titulo:"Incêndio",  
            },
            {
                id:5,
                titulo:"Rastreador",  
            },
            {
                id:6,
                titulo:"Reboque",  
            },
            {
                id:8,
                titulo:"Terceiros",  
            },
            {
                id:9,
               titulo:"Vidros",  
            }
    ]
    return(
        <section className="section-planos">
            <h2 className="titulo-section-planos">Nossos Planos</h2>
            <div className="box-planos">
                <a href='https://wa.me/5585998623110?text=Olá+gostaria+de+saber+mais+sobre+a+proteção+para+carros+particulares' className="card-plano">
                    <h4 className="titulo-plano">Particular</h4>
                    {beneficios.map(beneficio =>
                        <p className="beneficio">{beneficio.titulo} <p>✅</p></p>
                    )}
                    <p className='texto-a-partir-de'>a partir de</p>
                    <p className='preco-plano'>R$ 3,39 / dia</p>
                    <button className='button-contratar-plano'>Contrate Agora</button>
                </a>
                <a href='https://wa.me/5585998623110?text=Olá+gostaria+de+saber+mais+sobre+a+proteção+para+carros+utilitários' className="card-plano card-meio">
                    <h4 className="titulo-plano">Utilitários</h4>
                    {beneficios.map(beneficio =>
                        <p className="beneficio">{beneficio.titulo} <p>✅</p></p>
                    )}
                    <p className='texto-a-partir-de'>a partir de</p>
                    <p className='preco-plano'>R$ 5,81 / dia</p>
                    <button className='button-contratar-plano'>Contrate Agora</button>
                </a>
                <a href='https://wa.me/5585998623110?text=Olá+gostaria+de+saber+mais+sobre+a+proteção+para+carros+uber+/+taxi' className="card-plano">
                    <h4 className="titulo-plano">Uber / Táxi</h4>
                    {beneficios.map(beneficio =>
                        <p className="beneficio">{beneficio.titulo} <p>✅</p></p>
                    )}
                    <p className='texto-a-partir-de'>a partir de</p>
                    <p className='preco-plano'>R$ 3,86 / dia</p>
                    <button className='button-contratar-plano'>Contrate Agora</button>
                </a>
            </div>
        </section>
    )
}