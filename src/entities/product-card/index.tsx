import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

export interface ProductCardInterface {
  title: ReactNode;
  description?: ReactNode;
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
      <div className={'font-extrabold'}>{title}</div>
      <div className={'leading-[110%] text-sm'}>{description}</div>
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
