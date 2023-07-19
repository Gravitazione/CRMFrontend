import React from 'react';

export type ButtonProps = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  labelId: string;
  icon?: string;
  altText?: string;
};
