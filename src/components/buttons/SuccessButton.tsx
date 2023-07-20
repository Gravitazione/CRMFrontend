import React from 'react';
import { ButtonProps } from '../../constant/model/types/components/Button.types';

const SuccessButton: React.FC<ButtonProps> = ({ title, labelId, onClick, icon, altText }) => {
  return (
    <button className={`p-2.5 bg-success rounded-lg min-w-[160px] shadow-lg`} onClick={onClick}>
      <label htmlFor={labelId} className={`font-normal text-white`}>
        <div className="flex flex-row space-x-2.5 justify-center">
          <img src={icon} alt={altText} className="max-w-[16px] aspect-square" />
          <div>{title}</div>
        </div>
      </label>
    </button>
  );
};

export default SuccessButton;
