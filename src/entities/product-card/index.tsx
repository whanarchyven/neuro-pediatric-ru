import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export interface ProductCardInterface {
  is_active: string;
  brand: string;
  name: string;
  type: string;
  description: string;
  suitable: string;
  usage: string;
  usage_kids: string;
  sk: string;
  goal: string;
  additional: string;
  clinic_situation: string;
  link: string;
  must_be: string;
  must_not_be: string;
  stage_title: string;
  stage_description: string;
  image: string;
  className?: string;
  buyLink?: string;
  stage_image: string;
}

const ProductCard: FC<ProductCardInterface> = ({
  brand,
  name,
  usage,
  image,
  className,
  link,
}) => {
  return (
    <div className={clsx('flex text-white flex-col w-full gap-2', className)}>
      {image ? (
        <img
          className={'w-full aspect-square object-cover rounded-xl'}
          src={`/images/drugs/${image}`}
        />
      ) : (
        <div
          className={
            'bg-black w-full bg-opacity-10 aspect-square rounded-xl'
          }></div>
      )}
      <ReactMarkdown
        className={'font-extrabold'}>{`${brand} ${name}`}</ReactMarkdown>
      <ReactMarkdown className={'leading-[110%] whitespace-pre-line text-sm'}>
        {usage}
      </ReactMarkdown>
      {link && (
        <Link
          href={link}
          className={
            'tile-shadow bg-cOrange w-fit px-5 py-1 rounded-full text-white font-bold'
          }>
          Купить
        </Link>
      )}
    </div>
  );
};

export default ProductCard;
