import React from 'react';

const MainBlockBgImage = () => {
  return (
    <div className={'w-full h-full relative'}>
      <img
        className={
          'mix-blend-soft-light w-full h-full object-cover object-left-top main-bloc-bg-mask'
        }
        src={'/images/main_bg.png'}
        alt={'main image'}
      />
    </div>
  );
};

export default MainBlockBgImage;
