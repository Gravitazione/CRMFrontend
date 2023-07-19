import React from 'react';
import { ButtonProps } from '../../constant/model/types/components/Button.types';

const PrimaryButton: React.FC<ButtonProps> = ({ title, labelId, onClick, icon, altText }) => {
  return (
    <button className={`p-2.5 bg-primary rounded-lg w-[160px]`} onClick={onClick}>
      <label htmlFor={labelId} className={`font-normal text-white`}>
        <div className="flex flex-row space-x-2.5 justify-center">
          <img src={icon} alt={altText} className="max-w-[16px] aspect-square" />
          <div>{title}</div>
        </div>
      </label>
    </button>
  );
};

export default PrimaryButton;
