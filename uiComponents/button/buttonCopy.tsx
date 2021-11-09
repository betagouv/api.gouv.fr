import React from 'react';
import { MouseEvent } from 'react';
import fileCopy from '../icon/fileCopy';

interface IProps {
  source: string
}

const ButtonCopy: React.FC<IProps> = ({source}) =>
  <button onClick={(e) => copyToClipboard(e)} className='button-copy'>
    Copier le lien <span role="img" aria-label="icon file">{fileCopy}</span>
  </button>

const copyToClipboard = (e: MouseEvent) => {
  const t = e.target as HTMLInputElement
  navigator.clipboard.writeText(t.baseURI);
}

export default ButtonCopy;
