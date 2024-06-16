import '@testing-library/jest-dom';
import Modal from 'react-modal';

// Crear un elemento div con el id 'root' y agregarlo al documento
const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

// Configurar el elemento raíz para react-modal
Modal.setAppElement(root);

