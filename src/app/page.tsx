'use client';
// app/page.tsx
import MainBlock, { MainBlockInterface } from '@/widgets/main-block';
import TreatmentStage, {
  TreatmentStageInterface,
} from '@/widgets/treatment-stage';
// import LastBlock, {LastBlockInterface} from '@/widgets/last-block';
import { getAnamnes } from '@/shared/utils/getAnamnes';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import LoadingIcon from '../../loading.svg';

export default function Home() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const queryParams = new URLSearchParams(
        searchParams.toString()
      ).toString();
      const res = await fetch(`/api/products?${queryParams}`);
      const data = await res.json();
      console.log(data);
      setProducts(data);
      setIsLoading(false);
    };
    fetchProducts();
  }, [searchParams]);

  const anamnes = getAnamnes('2');

  const data: {
    mainBlock: MainBlockInterface;
    treatmentStages: TreatmentStageInterface[];
  } = {
    mainBlock: {
      title: 'Персональная программа \n' + 'по уходу за кожей',
      description:
        '**Цифровой рецепт** – это ваш персональный путеводитель в мире здоровой кожи.\n' +
        '\n' +
        'Созданный специально для вас, он учитывает все особенности вашего типа кожи, индивидуальные потребности и предпочтения.\n' +
        '\n' +
        'С его помощью вы получите точные рекомендации по уходу и лечению, доступные всегда и везде на вашем смартфоне или компьютере.\n',
      tiles: [
        {
          title: 'Анамнез:',
          description: anamnes,
          icon: '/icons/profile.svg',
        },
        {
          description:
            'Вам требуется консультация дерматолога для назначения и/или коррекции лекарственного лечения.',
          icon: '/icons/consultation.svg',
          isActive: true,
        },
        {
          description:
            'Для **облегчения** состояния кожи ребенка и предотвращения раздражения, следуйте рекомендациям в следующих блоках.\n',
          icon: '/icons/tablets.svg',
        },
      ],
    },
    treatmentStages: [],
  };

  return (
    <>
      <main className={'flex flex-col gap-2'}>
        {isLoading && (
          <div
            className={
              'fixed top-0 left-0 loading z-50 w-full h-full flex justify-center items-center'
            }>
            <LoadingIcon className={'w-[50px] aspect-square animate-spin'} />
          </div>
        )}

        <MainBlock
          description={data.mainBlock.description}
          title={data.mainBlock.title}
          tiles={data.mainBlock.tiles}
        />
        <div className={'flex sm:px-10 p-2 flex-col gap-2'}>
          {products.map((stage: any, index: number) => {
            if (stage.stage_title) {
              return (
                <TreatmentStage
                  key={index}
                  displayArrow
                  title={stage.stage_title}
                  image={`/images/stages/${stage.stage_image}`}
                  description={stage.stage_description}
                  drugs={stage.preparats}
                />
              );
            }
          })}
        </div>
      </main>
    </>
  );
}
