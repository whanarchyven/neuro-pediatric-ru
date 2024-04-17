import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export interface ProductCardInterface {
  title: string;
  description?: string;
  image?: string;
  buyLink?: string;
  className?: string;
}

const ProductCard: FC<ProductCardInterface> = ({
  title,
  description,
  image,
  buyLink,
  className,
}) => {
  return (
    <div className={clsx('flex text-white flex-col w-full gap-2', className)}>
      {image ? (
        <img
          className={'w-full aspect-square object-cover rounded-xl'}
          src={image}
        />
      ) : (
        <div
          className={
            'bg-black w-full bg-opacity-10 aspect-square rounded-xl'
          }></div>
      )}
      <ReactMarkdown className={'font-extrabold'}>{title}</ReactMarkdown>
      <ReactMarkdown className={'leading-[110%] whitespace-pre-line text-sm'}>
        {description}
      </ReactMarkdown>
      {buyLink && (
        <Link
          href={buyLink}
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
