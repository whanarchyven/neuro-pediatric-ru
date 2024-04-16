import React from 'react';

const LastBlockImage = () => {
  return (
    <div className={'w-full h-full relative'}>
      <img
        className={
          'mix-blend-soft-light w-full h-full object-cover object-left-top last-bloc-bg-mask'
        }
        src={'/images/last_bg.png'}
        alt={'main image'}
      />
    </div>
  );
};

export default LastBlockImage;
