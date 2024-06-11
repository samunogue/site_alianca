import { Card, Flex } from "antd";
import "./style.css";

export const BannerAPP = () => {
  return (
    <Flex
        vertical={false}
        align="flex-start"
        justify="space-around"
      style={{
        paddingTop:50,
        width: "100%",
        height: "90vh",
        padding: 0,
        border: 0,
        backgroundImage: `url(${require("../../assets/banner_app.jpg")})`,
        backgroundSize: "cover", // Garante que a imagem cubra todo o card
        backgroundPosition: "center", // Centraliza a imagem
        position: "relative", // Permite posicionar elementos dentro do Flex
      }}
    >
      <Flex vertical={true} align="center" justify="center" style={{width:"60%"}}>
        <h1 className="titulo_banner_app">Baixe nosso App e aproveite nossos beneficíos</h1>
      </Flex>
      <Flex vertical={true} style={{width:"40%"}}>
        <img src={require('../../assets/celular.png')} height={600} />
      </Flex>
    </Flex>
  );
};
