import Modal from 'react-modal';



Modal.setAppElement('#root');



export default function ModalImage({ modalIsOpen,  closeModal, image, customStyles}) {



  return (<Modal
      
        isOpen={modalIsOpen}
      onRequestClose={closeModal}
    
        style={customStyles}
    >

   
    <img className='modalImg' src={image }alt="" /></Modal>)
     
}