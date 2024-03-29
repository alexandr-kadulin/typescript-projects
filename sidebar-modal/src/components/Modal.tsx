import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/appContext';

export const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? 'show-modal modal-overlay' : 'modal-overlay'
      }`}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
