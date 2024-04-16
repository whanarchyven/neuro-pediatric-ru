import React, { FC, ReactNode } from 'react';
import MainBlockBgImage from '@/widgets/main-block/ui/main-block-bg-image';
import InfoTab from '@/shared/ui/info-tab';
import InfoTile, { InfoTileInterface } from '@/shared/ui/info-tile';
import ArrowsIcon from '../../../../public/images/arrows_mainblock.svg';

interface MainBlockInterface {
  title: ReactNode;
  description: ReactNode;
  tiles: InfoTileInterface[];
}

const MainBlock: FC<MainBlockInterface> = ({ title, tiles, description }) => {
  return (
    <div className={'w-full flex flex-col gap-3 p-10'}>
      <div className={'absolute top-0 w-full h-fit left-0'}>
        <MainBlockBgImage />
      </div>
      <InfoTab>
        <div className={'flex flex-col text-white p-8 gap-4'}>
          <div className={'whitespace-pre text-xl font-extrabold'}>{title}</div>
          <div className={'whitespace-pre pl-5 border-l-2 border-white'}>
            {description}
          </div>
        </div>
      </InfoTab>
      <InfoTab>
        <div className={'flex justify-between text-white px-5 gap-4 relative'}>
          <div
            className={
              'flex flex-col w-1/3 relative justify-center items-center'
            }>
            <div
              className={
                'w-full aspect-square absolute bg-white rounded-full blur-2xl'
              }></div>
            <img
              className={'absolute bottom-0 w-full'}
              src={'/images/alena.png'}
              alt={'logo'}
            />
          </div>
          <div
            className={'w-2/3 flex p-5 flex-col justify-center relative gap-2'}>
            <ArrowsIcon className={'w-7 -left-3 absolute'} />
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
