import './Banner.css'
import iconeTelefone from '../../assets/icone-telefone-banner.png'
import iconeEmail from '../../assets/icone-email-banner.png'
import iconeinstagram from '../../assets/instagram.png'
export const Banner = () =>{
    return(
        <section className="box-banner">
            <div className='box-texto-banner'>
                <h3 className='titulo-banner'>Não deixe seu carro desprotegido</h3>
                <h2 className='subtitulo-banner'>Faça uma cotação agora</h2>
                <div className='box-contatos-banner'>
                    <div className='box-contato-banner'>
                        <img src={iconeTelefone} alt="icone telefone" className='icone-contato-banner' />
                        <p className='texto-contato-banner'>85 9 8703 5202</p>
                    </div>
                    <div className='box-contato-banner'>
                        <img src={iconeEmail} alt="icone email"  className='icone-contato-banner'/>
                        <p className='texto-contato-banner'>aliancaprotecaoveicular@outlook.com</p>
                    </div>
                    <div className='box-contato-banner'>
                        <img src={iconeinstagram} alt="icone email"  className='icone-contato-banner'/>
                        <a href='https://instagram.com/aliancaprotecaoveicular?igshid=MzRlODBiNWFlZA==' className='texto-contato-banner link-instagram'>Aliança Proteção</a>
                    </div>
                </div>
            </div>
        </section>
    )
}