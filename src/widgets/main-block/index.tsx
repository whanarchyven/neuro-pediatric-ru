import React, { FC, ReactNode } from 'react';
import MainBlockBgImage from '@/widgets/main-block/ui/main-block-bg-image';
import InfoTab from '@/shared/ui/info-tab';
import InfoTile, { InfoTileInterface } from '@/shared/ui/info-tile';
import ArrowsIcon from '../../../public/images/arrows_mainblock.svg';

export interface MainBlockInterface {
  title: ReactNode;
  description: ReactNode;
  tiles: InfoTileInterface[];
}

const MainBlock: FC<MainBlockInterface> = ({ title, tiles, description }) => {
  return (
    <div className={'w-full sm:px-10 p-2 flex flex-col gap-3'}>
      <div className={'absolute top-0 w-full h-fit left-0'}>
        <MainBlockBgImage />
      </div>
      <InfoTab>
        <div className={'flex flex-col text-white p-4 sm:p-8 gap-4'}>
          <div className={'whitespace-pre sm:text-xl font-extrabold'}>
            {title}
          </div>
          <div
            className={
              'sm:whitespace-pre pl-2 text-sm whitespace-pre-wrap sm:text-base sm:pl-5 border-l-2 border-white'
            }>
            {description}
          </div>
        </div>
      </InfoTab>
      <InfoTab>
        <div
          className={
            'flex flex-col-reverse sm:flex-row justify-between text-white sm:px-5 sm:py-0 pt-2 px-2 gap-4 relative'
          }>
          <div
            className={
              'flex flex-col w-full sm:w-1/3 relative justify-center items-center'
            }>
            <div
              className={
                'w-1/2 sm:w-full aspect-square absolute z-[-1] bg-white rounded-full blur-2xl'
              }></div>
            <img
              className={'sm:absolute w-1/2 sm:w-full bottom-0'}
              src={'/images/alena.png'}
              alt={'logo'}
            />
          </div>
          <div
            className={
              'w-full sm:w-2/3 flex sm:p-5 flex-col justify-center relative gap-2'
            }>
            <ArrowsIcon
              className={
                'sm:w-7 w-4 sm:scale-x-[1] scale-x-[-1]  -right-3 sm:right-auto z-[999] sm:-left-3 absolute'
              }
            />
            {tiles.map((tile, index) => (
              <InfoTile key={index} {...tile} />
            ))}
          </div>
        </div>
      </InfoTab>
    </div>
  );
};

export default MainBlock;
