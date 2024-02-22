import React, { memo } from 'react';

const Rail = () => {
  return (
    <div style={styles.root} />
  );
};

export default memo(Rail);

const styles = {
  root: {
    flex: 1,
    height: '4px',
    borderRadius: '2px',
    backgroundColor: '#7f7f7f',
  },
};