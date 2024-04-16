import { FC, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

export interface InfoTileInterface extends VariantProps<typeof cvaRoot> {
  title?: ReactNode;
  description: ReactNode;
  icon: ReactNode;
  className?: string;
}

const cvaRoot = cva(
  ['p-4 rounded-xl text-base flex justify-center gap-4 text-white items-start'],
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
const cvaTitle = cva(['font-bold']);
const cvaDescription = cva(['font-normal']);
const InfoTile: FC<InfoTileInterface> = ({
  title,
  description,
  icon,
  className,
  isActive,
}) => {
  return (
    <div className={clsx(cvaRoot({ isActive }), className)}>
      {icon}
      <div className={'flex flex-col gap-1'}>
        <div className={cvaTitle()}>{title}</div>
        <div className={cvaDescription()}>{description}</div>
      </div>
    </div>
  );
};

export default InfoTile;
