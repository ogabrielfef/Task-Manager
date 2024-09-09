import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ConfirmDeleteModal = ({ isOpen, onRequestClose, onConfirm }) => {
    const handleConfirm = () => {
        onConfirm();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Confirm Delete">
            <h2>Confirmar exclusão</h2>
            <p>Você tem certeza que deseja excluir esta tarefa?</p>
            <button onClick={handleConfirm}>Sim, excluir</button>
            <button onClick={onRequestClose}>Cancelar</button>
        </Modal>
    );
};

export default ConfirmDeleteModal;