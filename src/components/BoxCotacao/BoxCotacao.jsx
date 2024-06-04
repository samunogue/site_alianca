import './BoxCotacao.css'
export const BoxCotacao = () =>{
    const redirectWhatsapp = () =>{
        var nome = document.querySelector(".input-nome").value
        var marca = document.querySelector(".input-marca").value
        var modelo = document.querySelector(".input-modelo").value
        var ano = document.querySelector(".input-ano").value
        window.open(`https://wa.me/5585998623110?text=Olá+me+chamo+${nome}+e+gostaria+de+saber+mais+sobre+o+seguro+para+o+meu+carro+${marca}+${modelo}+${ano}`, "Whatsapp", "height=700,width=900");
    } 
    return(
        <section className="section-faca-cotacao">
            <h2 className="titulo-cotacao">Não perca tempo, Faça <br/> sua cotação agora</h2>
                <form className="box-input-cotacao">
                    <div className="box-input-nome-numero">
                        <input type="text" placeholder="Nome" className='input-cotacao input-nome' required/>
                        <input type="tel" placeholder="Telefone" className='input-cotacao input-numero' required/>
                    </div>
                    <div className="box-input-veiculo">
                        <input type="text" placeholder="Marca" className='input-cotacao input-marca' required/>
                        <input type="text" placeholder="Modelo" className='input-cotacao input-modelo' required/>
                        <input type="text" placeholder="Ano" className='input-cotacao input-ano' required/>
                    </div>
                    <button className="button-cotacao" onClick={redirectWhatsapp}>Fazer Cotação</button>
                </form>
        </section>
    )
}