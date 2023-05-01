import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | React.ReactNode[];
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children ?? 'My Button'}</button>;
};
