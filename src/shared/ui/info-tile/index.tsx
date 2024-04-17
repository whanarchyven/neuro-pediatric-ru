import { FC } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';

export interface InfoTileInterface extends VariantProps<typeof cvaRoot> {
  title?: string;
  description: string;
  icon: string;
  className?: string;
}

const cvaRoot = cva(
  [
    'sm:p-4 p-2 rounded-xl text-base flex justify-center gap-4 text-white items-start',
  ],
  {
    variants: {
      isActive: {
        true: 'bg-cOrange tile-shadow bg-opacity-100',
        false: 'bg-black bg-opacity-10',
      },
    },
    defaultVariants: { isActive: false },
  }
);
const cvaTitle = cva(['sm:text-base text-sm font-bold']);
const cvaDescription = cva(['sm:text-base text-xs font-normal']);
const InfoTile: FC<InfoTileInterface> = ({
  title,
  description,
  icon,
  className,
  isActive,
}) => {
  return (
    <div className={clsx(cvaRoot({ isActive }), className)}>
      <img src={icon} className="w-4" />
      <div className={'flex flex-col gap-1'}>
        <ReactMarkdown className={cvaTitle()}>{title}</ReactMarkdown>
        <ReactMarkdown className={cvaDescription()}>
          {description}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default InfoTile;
