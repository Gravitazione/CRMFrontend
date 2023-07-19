import React from 'react';
import { ButtonProps } from '../../constant/model/types/components/Button.types';

const LargeButton: React.FC<ButtonProps> = ({ title, onClick, labelId }) => {
  return (
    <button className={`py-5 w-full rounded-full bg-primary`} onClick={onClick}>
      <label htmlFor={labelId} className={`font-normal text-lg text-white`}>
        {title}
      </label>
    </button>
  );
};

export default LargeButton;
