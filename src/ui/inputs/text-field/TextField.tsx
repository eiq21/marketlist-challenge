import React from 'react';

import styles from './text-field.module.scss';

const TextField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input type="text" className={styles.container} {...props} />;
};

export default TextField;
