import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ConfirmDeleteModal = ({ isOpen, onRequestClose, onConfirm }) => {
    const handleConfirm = () => {
        onConfirm();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Confirmar Exclusão"
            className="fixed inset-0 flex items-center justify-center p-4"
            overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
        >
            <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Confirmar Exclusão</h2>
                <p className="text-gray-600 mb-6">Você tem certeza que deseja excluir esta tarefa?</p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleConfirm}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                        Sim, excluir
                    </button>
                    <button
                        onClick={onRequestClose}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmDeleteModal;