import React, { useState } from 'react';
import Modal from 'react-modal';
import instruments from '../data/luthierData'
import ScrollToTopButton from "../components/ScrollToTopButton";

Modal.setAppElement('#root');


function Luthier() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };
 

  const columns = [];
  for (let i = 0; i < instruments.length; i += 3) {
    columns.push(instruments.slice(i, i + 3));
  }

  return (
    <>
      <div className="luthier-title">
        <p>El Taller</p>
      </div>

      <div className="luthier-container">
        {instruments.map((instrument) => (
          <div
            key={instrument.id}
            className="luthier-card"
          >
            <h3>{instrument.title}</h3>
            <img
            loading='lazy'
              src={instrument.image}
              alt={instrument.title}
              className="mb-2"
              onClick={() => openModal(instrument.image)}
            />
            <p>{instrument.description}</p>
          </div>
        ))}
      </div>
      <ScrollToTopButton />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="flex justify-center items-center h-full">
          <img src={selectedImage} alt="Selected" className="max-w-full max-h-full object-contain" />
        </div>
        <button onClick={closeModal} className="absolute top-0 right-2 m-4 text-white">
          X
        </button>
      </Modal>
    </>
  );
}

export default Luthier;
