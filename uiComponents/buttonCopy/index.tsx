import React from 'react';
import { ButtonLink } from '..';
import fileCopy from '../icon/fileCopy';

interface IProps {
  source: string;
}

const ButtonCopy: React.FC<IProps> = ({ source }) => (
  <ButtonLink alt onClick={() => navigator.clipboard.writeText(source)}>
    <span>Copier le lien </span>
    <span>{fileCopy}</span>
  </ButtonLink>
);

export default ButtonCopy;
