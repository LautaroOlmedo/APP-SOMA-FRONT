import React, { useState, useRef } from 'react';
import { FiFolderPlus, FiCheck } from 'react-icons/fi';
import { BsArrowsMove, BsFileText } from 'react-icons/bs';
import style from './index.module.css';
import Imagen1 from '../../../../../assets/descarga.png'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy ,arrayMove} from '@dnd-kit/sortable'
import ListAdministrarWallet from './listAdministrarWallet';



function AdministrarWallet() {
  const [showForm, setShowForm] = useState(false);
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [agregado, setAgregado] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [cards, setCards] = useState([{ id: 1, name: 'MasterCard', date: '14/3/2022', image: Imagen1, icon: 'mastercard-icon.png' },
  { id: 2, name: 'VISA', date: '14/3/2022', image: Imagen1, icon: 'visa-icon.png' },
  { id: 3, name: 'PayPal', date: '14/3/2022', image: 'paypal-image.png', icon: 'paypal-icon.png' }]);
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
  const handleDragEnd = (event: { active: any; over: any; }) => {
    console.log("Antiguo",cards)
    const {active,over } = event

    const oldIndex = cards.findIndex(card => card.id === active.id)
    const newIndex = cards.findIndex(card => card.id === over.id)
    const newOrder = arrayMove(cards, oldIndex,newIndex)
    console.log("Nuevo",newOrder)

    setCards(newOrder)
  }
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


      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={cards} strategy={verticalListSortingStrategy}>
          {cards.map((card) => (
            <ListAdministrarWallet card={card} key={card.id}/>
          ))}
        </SortableContext>
      </DndContext>




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
