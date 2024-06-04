import { Banner } from "../../components/Banner/Banner"
import { Header } from "../../components/Header/Header"
import { SejaConsultor } from "../../components/SejaConsultor/SejaConsultor"
import { BoxCotacao } from "../../components/BoxCotacao/BoxCotacao"
import { Beneficios } from "../../components/Beneficios/Beneficios"
import { Planos } from "../../components/Planos/Planos"
import './Home.css'
import { Footer } from "../../components/Footer/Footer"
import { QuemSomos } from "../../components/QuemSomos/QuemSomos"
export const Home = () =>{
    window.scrollTo(0, 0);
    return(
        <>
        <Header />
        <main>
            <Banner />
            <QuemSomos />
            <Beneficios />
            <Planos />
            <BoxCotacao />
            <SejaConsultor />   
                
        </main>
        <Footer />
        </>
    )
}