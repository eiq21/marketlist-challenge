import React from 'react';

import styles from './button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorSchema?: 'primary' | 'secundary';
}

const Button: React.FC<Props> = ({ colorSchema = 'secundary', children, ...props }) => {
  return (
    <button className={`${styles.container} ${styles[colorSchema]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
