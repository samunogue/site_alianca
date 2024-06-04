import './faq.css';
export const Faq = () =>{
    const perguntas = [
        {
            id:0,
            pergunta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus?",
            resposta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus"
        },
        {
            id:1,
            pergunta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus?",
            resposta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus"
        },
        {
            id:2,
            pergunta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus?",
            resposta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus"
        },
        {
            id:3,
            pergunta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus?",
            resposta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus"
        },
        {
            id:4,
            pergunta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus?",
            resposta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus"
        },
        {
            id:5,
            pergunta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus?",
            resposta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus"
        },
        {
            id:6,
            pergunta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            resposta:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus"
        }

    ]
    return(
        <section className='section-faq'>
                <p className='titulo-faq'>Dúvidas Frequentes</p>
                <div className='linha-faq'></div>
                <div className="box-perguntas-faq">
                    {perguntas.map(pergunta =>
                    <details className='box-pergunta' key={pergunta.id}>
                        <summary className='titulo-pergunta'>{pergunta.pergunta}</summary>
                        <div className='linha-pergunta'></div>
                        <p className='resposta-pergunta'>{pergunta.resposta}</p>
                    </details>
                    )}
                </div>
        </section>
    )
}