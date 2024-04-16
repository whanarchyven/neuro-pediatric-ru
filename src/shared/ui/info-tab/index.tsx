import { FC, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';

interface InfoTabProps {
  children: ReactNode;
  className?: string;
}

const cvaRoot = cva(['info-tab rounded-[2.5rem] bg-cGray bg-opacity-10']);

const InfoTab: FC<InfoTabProps> = ({ children, className }) => {
  return <div className={clsx(cvaRoot(), className)}>{children}</div>;
};

export default InfoTab;
