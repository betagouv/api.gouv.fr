import React from 'react';
import fileCopy from '../icon/fileCopy';

interface IProps {
  source: string
}

const ButtonCopy: React.FC<IProps> = ({source}) =>
  <button onClick={() =>  navigator.clipboard.writeText(source)} className='button-copy'>
    Copier le lien <span role="img" aria-label="icon file">{fileCopy}</span>
  </button>

export default ButtonCopy;
