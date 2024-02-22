import React, { memo } from 'react';

interface LabelProps {
  text: string;
  [key: string]: any; // for restProps
}

const Label = ({ text, ...restProps }: LabelProps) => {
  return (
    <div style={styles.root} {...restProps}>
      <span style={styles.text}>{text}</span>
    </div>
  );
};

const styles = {
  root: {
    alignItems: 'center',
    padding: '8px',
    backgroundColor: '#4499ff',
    borderRadius: '4px',
    display: 'inline-block', // Ensures the container size fits the text
  },
  text: {
    fontSize: '16px',
    color: '#fff',
  },
};

export default memo(Label);
