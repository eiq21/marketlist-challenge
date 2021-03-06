import React from 'react';

import styles from './modal-footer.module.scss';

const ModalFooter: React.FC = ({ children }) => {
  return <nav className={styles.container}>{children}</nav>;
};

export default ModalFooter;
