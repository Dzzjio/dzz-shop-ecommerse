import React, { memo } from 'react';

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

interface ThumbProps {
  name?: string;
}

const Thumb = ({ name = 'low' }: ThumbProps) => {
  const thumbStyle = {
    width: name === 'high' ? `${THUMB_RADIUS_HIGH * 2}px` : `${THUMB_RADIUS_LOW * 2}px`,
    height: name === 'high' ? `${THUMB_RADIUS_HIGH * 2}px` : `${THUMB_RADIUS_LOW * 2}px`,
    borderRadius: name === 'high' ? `${THUMB_RADIUS_HIGH}px` : `${THUMB_RADIUS_LOW}px`,
    borderWidth: '2px',
    borderColor: '#7f7f7f',
    backgroundColor: name === 'high' ? '#ffffff' : '#aaaaaa',
  };

  return <div style={thumbStyle} />;
};

export default memo(Thumb);