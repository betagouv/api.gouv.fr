import React from 'react';

interface IProps {
  emoji: string;
  label: string;
}

const Emoji: React.FC<IProps> = ({ emoji, label }) => (
  <>
    <span role="img" aria-label={`emoji ${label}`}>
      {emoji}
    </span>
    <style jsx>{`
      span {
        margin-right: 8px;
      }
    `}</style>
  </>
);

export default Emoji;
