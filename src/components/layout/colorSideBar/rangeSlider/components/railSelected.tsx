import React, { memo } from 'react';

const RailSelected = () => {
  return (
    <div style={styles.root} />
  );
};

const styles = {
    root: {
        height: '4px',
        backgroundColor: '#4499ff',
        borderRadius: '2px',
    },
};

export default memo(RailSelected);