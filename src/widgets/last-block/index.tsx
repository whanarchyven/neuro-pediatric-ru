import React, { FC } from 'react';
import LastBlockBgImage from './ui/last-block-bg-image';
import InfoTab from '@/shared/ui/info-tab';
import AlertIcon from '../../../public/images/atention.svg';
import ProductCard, { ProductCardInterface } from '@/entities/product-card';
import ReactMarkdown from 'react-markdown';

export interface LastBlockInterface {
  title: string;
  description: string;
  advices: { reason: string; product: ProductCardInterface }[];
}

const LastBlock: FC<LastBlockInterface> = ({ title, description, advices }) => {
  return (
    <div className={'w-full sm:p-10 p-2 flex relative flex-col gap-3'}>
      <div className={'absolute  bottom-0 w-full h-fit left-0'}>
        <LastBlockBgImage />
      </div>
      <InfoTab>
        <div className={'flex flex-col text-white p-4 sm:p-8 gap-4'}>
          <ReactMarkdown
            className={'whitespace-pre sm:text-xl text-sm font-extrabold'}>
            {title}
          </ReactMarkdown>
          <div
            className={
              'bg-black bg-opacity-10 rounded-2xl sm:px-4 sm:py-2 px-2 py-1 flex items-start justify-between gap-1 sm:gap-4'
            }>
            <AlertIcon className={'sm:w-7 w-2'} />
            <ReactMarkdown className={'sm:text-base w-full text-xs'}>
              {description}
            </ReactMarkdown>
          </div>
          <div className={'flex items-center flex-wrap justify-between gap-10'}>
            {advices.map((advice, counter) => {
              return (
                <div
                  key={counter}
                  className={'flex w-full sm:w-2/6 flex-col gap-2'}>
                  <p className={'font-bold'}>{advice.reason}</p>
                  <ProductCard
                    className={'w-full'}
                    {...advice.product}></ProductCard>
                </div>
              );
            })}
          </div>
        </div>
      </InfoTab>
    </div>
  );
};

export default LastBlock;
