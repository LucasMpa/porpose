import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ChoosenButtonOptions } from '../types/proposal';
import { setDecisionOnLocalStorage } from '../utils/localStorageHandlers';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: '#f6f6f6',
  border: '2px solid #fff',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  color: 'red'
};

type DialogProps = {
  handleClose: () => void;
  visibility: boolean
  choosenButton: ChoosenButtonOptions
}


const Dialog: React.FC<DialogProps> = ({ handleClose, visibility, choosenButton }) => {

  const handleUrl = () => {
    if(choosenButton === 'money'){
      return 'https://wa.me/5585991981662?text=Minha+escolha+foi%3A+R%24+2%2C00'
    }

    if(choosenButton === 'gift'){
      return 'https://wa.me/5585991981662?text=Minha+escolha+foi%3A+Presente+Misterioso'
    }

    return ''
  }

  const handleConfirm = () => {
    setDecisionOnLocalStorage(choosenButton)
    window.location.href = handleUrl()
  }

  return (
    <Modal
      open={visibility}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Tu tem certeza mesmo?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Não pode voltar atrás hein...
        </Typography>
        <div>
          <img src='https://media.tenor.com/sV40ZMNzZO0AAAAC/felca.gif' alt='image' width={285}/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: 15 }}>
          <span className='button minify' onClick={handleConfirm}> Sim </span>
          <span className='button minify' onClick={handleClose}>Não</span>
        </div>
      </Box>
    </Modal>
  );
}

export { Dialog };