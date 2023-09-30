import React, { useState } from 'react';
import { Dialog } from '..';
import { ChoosenButtonOptions } from '../types/proposal';
import { getDecisionOnLocalStorage } from '../utils/localStorageHandlers';
import { AlreadyDecisionPage } from './AlreadyDecisionPage';

const BasicPage: React.FC = () => {
    const [modalVisibility, setModalVisibility] = useState(false)
    const [choosenButton, setChoosenButton] = useState<ChoosenButtonOptions>('')
    const decision = getDecisionOnLocalStorage()

    const handleOpenModal = (decision: ChoosenButtonOptions) => {
        setChoosenButton(decision)
        setModalVisibility(true)
    }

    return (
        <>
            {!decision ? <>
                <Dialog visibility={modalVisibility} handleClose={() => setModalVisibility(false)} choosenButton={choosenButton} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '100%', height: 200, color: '#F26161', display: 'flex', justifyContent: 'center', fontSize: 35, textAlign: 'center', padding: 15 }}>
                        R$ 2,00 ou um presente misterioso? 🤔
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 15, height: '78vh' }}>
                        <span className='button' onClick={() => handleOpenModal('money')}>R$ 2,00 </span>
                        <span className='button' onClick={() => handleOpenModal('gift')}>Presente Misterioso 🎁</span>
                    </div>
                </div>
            </> : <AlreadyDecisionPage/>}

        </>
    );
}

export { BasicPage };