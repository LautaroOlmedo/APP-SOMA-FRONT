import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Form, Table } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useGetAllProducts } from '../../../api/product/useGetAllProducts';
import { ProductCartComponent } from "../../../components/ProductCardComponent";
// import { Loader } from '../../../components/Loader/Loader';
import style from "./index.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import ModalComp from "../../../utils/ModalComp/ModalComp";
import AdministrarWallet from "./components/administrarWallet/administrarWallet";
import imagenAzul from '../../../assets/Tarjetas_Activated.png';
// import imagenGris from '../../../assets/Tarjetas_Desactived.png';
import ToggleButton from "./components/Button/ToggleButton";
import Balance from "./components/balance/Balance";
import TransaccionReciente from "./components/transaccionesRecientes/TransaccionReciente";
const WalletPage: any = ({ authProps }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [cards, setCards] = useState([
    {
      id:1,
      cardHolder: "Sofiane NAIT",
      cardTypeImg: imagenAzul,
      cardPuceImg: "http://img11.hostingpics.net/pics/734325puce.png",
      cardNumber: "6278",
      expires: "01/20",
      activated: true, // Añadir la propiedad 'activated'
    },
    {
      id:2,
      cardHolder: "Tomas NAIT",
      cardTypeImg: imagenAzul,
      cardPuceImg: "http://img11.hostingpics.net/pics/734325puce.png",
      cardNumber: "6278",
      expires: "01/20",
      activated: true, // Añadir la propiedad 'activated'
    },
    {
      id:3,
      cardHolder: "Javier NAIT",
      cardTypeImg: imagenAzul,
      cardPuceImg: "http://img11.hostingpics.net/pics/734325puce.png",
      cardNumber: "6278",
      expires: "01/20",
      activated: false, // Añadir la propiedad 'activated'
    },
    {id:4,
      cardHolder: "Leonardo NAIT",
      cardTypeImg: imagenAzul,
      cardPuceImg: "http://img11.hostingpics.net/pics/734325puce.png",
      cardNumber: "6278",
      expires: "01/20",
      activated: false, // Añadir la propiedad 'activated'
    },
    {id:5,
      cardHolder: "Gelvez NAIT",
      cardTypeImg: imagenAzul,
      cardPuceImg: "http://img11.hostingpics.net/pics/734325puce.png",
      cardNumber: "6278",
      expires: "01/20",
      activated: false, // Añadir la propiedad 'activated'
    },

  ]);
  const [toggleButton, setToggleButton] = useState(false)

  useEffect(() => {
    console.log(cards);
  }, [cards]);
  
  const handleToggle = (index: number) => {
    const updatedCards = [...cards];
    updatedCards[index] = { ...updatedCards[index], activated: !updatedCards[index].activated };
    setCards(updatedCards);
  };
  const handleCardClick = (index: React.SetStateAction<number>) => {
    setActiveCard(index);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };


  const renderBalance = () => {
    return (
      <Balance />
    );
  }

  const renderTransactionRec = () => {
    return (
      <TransaccionReciente />
    );
  }
  return (
    <>
      <Container>
        <Row>
          <Card className={style.cardwallet}>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "40px" }}>
              <button onClick={handleOpenModal}>Administrar billetera</button>
            </div>
            {showModal && (
              <ModalComp
                component={<AdministrarWallet />}
                show={showModal}
                handleClose={handleCloseModal}
                size={"lg"}
              />
            )}

            <Slider {...settings}>
              {cards.map((card, index) => (
                <div key={index}>
                  <div
                    key={index}
                    className={`${style["cc"]} ${index === activeCard ? style["active"] : ""}`}
                    onClick={() => handleCardClick(index)}
                  >
                    {!toggleButton && (
                      <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "red", color: "white", padding: "4px" }}>
                        Cuenta inhabilitada
                      </div>
                    )}
                    <img src={card.cardTypeImg} alt={`Card ${index}`} />
                    <div style={{ position: "absolute", top: 20, right: 20 }} onClick={() => alert("HOLA")}>
                    <ToggleButton
                      activated={card.activated}
                      onToggle={() => handleToggle(index)}
                    />                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Card>
        </Row>

        <Row style={{ display: "flex", marginTop: "40px" }}>
          {renderBalance()}
          {renderTransactionRec()}
        </Row>

      </Container>
    </>
  );
};

export default WalletPage;