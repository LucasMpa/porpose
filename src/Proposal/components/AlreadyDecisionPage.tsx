import React from 'react';
import { getDecisionOnLocalStorage } from '../utils/localStorageHandlers';

const AlreadyDecisionPage: React.FC = () => {
    const decision =  getDecisionOnLocalStorage()

    const translateDecision = () => {
        if(decision?.decision === 'gift'){
            return 'Presente Misterioso'
        }
        if(decision?.decision === 'money'){
            return 'R$ 2,00'
        }
        return ''
    }
    
  return (
    <div style={{color: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
        Opa. você já fez sua escolha...
        <span><img src='https://media.tenor.com/YQM0Ul4thmYAAAAd/felca-base-virginia.gif' alt='image-felca'/></span>
        <span>{translateDecision()}</span>
    </div>
  );
}

export { AlreadyDecisionPage };