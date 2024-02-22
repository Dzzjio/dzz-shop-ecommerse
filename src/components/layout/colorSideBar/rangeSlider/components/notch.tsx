import React, { memo } from 'react';

interface NotchProps {
  [key: string]: any; // for props
}

const Notch = (props: NotchProps) => {
  return (
    <div style={styles.root} {...props} />
  );
};

export default memo(Notch);

const styles = {
  root: {
    width: '8px',
    height: '8px',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#4499ff',
    borderLeftWidth: '4px',
    borderRightWidth: '4px',
    borderTopWidth: '8px',
    borderStyle: 'solid',
  },
};
