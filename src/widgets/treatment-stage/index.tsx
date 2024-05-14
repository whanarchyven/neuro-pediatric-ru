import { FC } from 'react';
import ProductCard, { ProductCardInterface } from '@/entities/product-card';
import InfoTab from '@/shared/ui/info-tab';
import ArrowIcon from '../../../public/images/arrow_infoblock.svg';
import ReactMarkdown from 'react-markdown';

export interface TreatmentStageInterface {
  title: string;
  description?: string;
  image?: string;
  drugs?: ProductCardInterface[];
  displayArrow?: boolean;
}

const TreatmentStage: FC<TreatmentStageInterface> = ({
  title,
  description,
  drugs,
  image,
  displayArrow,
}) => {
  return (
    <InfoTab className={'sm:p-6 p-4'}>
      <div className={'flex flex-col relative gap-2'}>
        {displayArrow && (
          <ArrowIcon className="sm:w-[17rem] w-[10rem] h-[21rem] sm:h-[40rem] sm:-top-[30rem] -top-[19rem] absolute -right-[3rem] sm:right-0 rounded-full" />
        )}
        <p className={'text-white font-extrabold w-3/4 text-base sm:text-xl'}>
          {title}
        </p>
        <div
          className={
            'flex sm:flex-row flex-col-reverse mt-3 justify-between gap-4'
          }>
          <ReactMarkdown
            className={'text-white text-xs w-full sm:text-base sm:w-1/2'}>
            {description}
          </ReactMarkdown>
          {image ? (
            <img
              src={image}
              className={'sm:w-1/2 w-full aspect-169 rounded-2xl object-cover'}
            />
          ) : (
            <div
              className={
                'sm:w-1/2 w-full aspect-169 rounded-2xl object-cover bg-black bg-opacity-10'
              }></div>
          )}
        </div>
        {drugs && drugs.length > 0 && (
          <div className={'flex flex-col gap-2'}>
            <p className={'text-white font-extrabold mb-3 sm:text-xl'}>
              Средства:
            </p>
            <div
              className={
                'flex items-start sm:flex-row flex-col flex-wrap justify-between gap-2 sm:gap-10'
              }>
              {drugs.map((drug, counter) => {
                return (
                  <>
                    {counter % 2 == 1 ? (
                      <div
                        className={
                          'font-normal sm:self-start sm:mt-10 p-1 sm:p-3 bg-black bg-opacity-10 rounded-full text-white aspect-square sm:text-base text-sm flex items-center justify-center'
                        }>
                        ИЛИ
                      </div>
                    ) : null}
                    <ProductCard
                      className={'w-full sm:w-2/6'}
                      {...drug}></ProductCard>
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </InfoTab>
  );
};

export default TreatmentStage;
