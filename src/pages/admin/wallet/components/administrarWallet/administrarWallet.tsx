import React, { useState, useRef } from 'react';
import { FiFolderPlus, FiCheck } from 'react-icons/fi';
import { BsArrowsMove, BsFileText } from 'react-icons/bs';
import style from './index.module.css';
import Imagen1 from '../../../../../assets/descarga.png'
function AdministrarWallet() {
  const [showForm, setShowForm] = useState(false);
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [agregado, setAgregado] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [cards, setCards] = useState([{ name: 'MasterCard', date: '14/3/2022', image: Imagen1, icon: 'mastercard-icon.png' },
  { name: 'VISA', date: '14/3/2022', image: Imagen1, icon: 'visa-icon.png' },
  { name: 'PayPal', date: '14/3/2022', image: 'paypal-image.png', icon: 'paypal-icon.png' }]);
  const handleNombreChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNombre(event.target.value);
  };

  const handleImagenChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    // Lógica de manipulación de la imagen aquí
    setImagen(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Lógica cuando se envía el formulario
    setAgregado(true);
  };

  const handleUploadClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className={style.container}>
      {!agregado && (
        <button className={style['dashed-button']} onClick={() => setShowForm(true)}>
          + Agregar billetera.
        </button>
      )}
      {showForm && !agregado && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <form
            onSubmit={handleSubmit}
            className={style.form}
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '10px',
              marginRight: '30px',
              marginLeft: '30px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <label htmlFor="upload" className={style.uploadLabel} onClick={handleUploadClick}>
                  <div className={style.uploadIconContainer} style={{ width: '40px' }}>
                    <BsFileText className={style.uploadIcon} style={{ fontSize: '20px' }} />
                  </div>
                  <input
                    ref={inputRef}
                    id="myfile"
                    style={{ display: 'none' }}
                    type="file"
                    accept="image/*"
                    onChange={handleImagenChange}
                    className={style.uploadInput}
                  />
                </label>
                <input
                  type="text"
                  placeholder="Escribir nombre"
                  value={nombre}
                  onChange={handleNombreChange}
                  className={style.nombreInput}
                  style={{ width: 'calc(100% - 60px)', marginRight: '10px', border: 'none' }}
                />
              </div>
              <button type="submit" className={style.confirmButton}>
                <FiCheck />
              </button>
            </div>
          </form>
        </div>
      )}

<div className={style.cardsContainer}>
  {cards.map((card, index) => (
    <div className={style.card} key={index}>
      <div className={style.cardDetails}>
        <img src={card.image} alt={`${card.name} logo`} className={style.cardImage} />
        <div className={style.cardInfo}>
          <span>{card.name}</span>
          <span style={{marginLeft:"25px"}}>Creado {card.date}</span>
        </div>
      </div>
      <div className={style.iconOuterContainer}>
        <div className={style.iconContainer}>
          <BsArrowsMove style={{ fontSize: "40px" }} />
        </div>
      </div>
    </div>
  ))}
</div>



      {agregado && (
        <div className={style.card}>
          <FiFolderPlus className={style.cardIcon} />
          <span>{nombre}</span>
          <FiCheck className={style.cardCheck} />
        </div>
      )}
    </div>
  );
}

export default AdministrarWallet;
