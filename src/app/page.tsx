import MainBlock, { MainBlockInterface } from '@/widgets/main-block';
import TreatmentStage, {
  TreatmentStageInterface,
} from '@/widgets/treatment-stage';
import LastBlock, { LastBlockInterface } from '@/widgets/last-block';

export default function Home() {
  const data: {
    mainBlock: MainBlockInterface;
    treatmentStages: TreatmentStageInterface[];
    lastBlock: LastBlockInterface;
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
          description:
            'Имеются участки выраженного покраснения кожи с наличием корок и явлениями мокнутия, сопровождающиеся сильным зудом.',
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
    treatmentStages: [
      {
        title: '1. Подсушивание и успокоение кожи:',
        image: '/images/derma.jpg',
        description:
          '- Начните с аккуратного подсушивания и успокоения кожи ребенка.\n' +
          '- При наличии мокнущих высыпаний, используйте стерильные марлевые салфетки, смоченные одним из нижеперечисленных средств. (гиф как это делать)\n' +
          '- Меняйте примочки каждые 5-10 минут до подсушивания высыпаний.\n' +
          '- **Не удаляйте корки насильно**; они отторгнутся самостоятельно.\n',
        drugs: [
          {
            title: 'La Roche-Posay\n' + 'Lipikar Lait\n',
            description:
              '**Категория 1:**\n' +
              '\n' +
              'используйте 1-2 раза в сутки, дополнительно по потребности. Подходит с первых дней жизни.\n' +
              '\n' +
              '**Категория 2:**\n' +
              '\n' +
              'используйте 1-2 раза в сутки, дополнительно по потребности. Подходит с первых дней жизни.\n',
            image: '/images/la-roche.jpg',
            buyLink:
              'https://www.laroche-posay.fr/gammes/corps/lipikar/lipikar-soin/lipikar-lait-hydratant-corps/LRP_091.html',
          },
          {
            title: 'La Roche-Posay\n' + 'Lipikar Lait\n',
            description:
              '**Категория 1:**\n' +
              '\n' +
              'используйте 1-2 раза в сутки, дополнительно по потребности. Подходит с первых дней жизни.\n' +
              '\n' +
              '**Категория 2:**\n' +
              '\n' +
              'используйте 1-2 раза в сутки, дополнительно по потребности. Подходит с первых дней жизни.\n',
            image: '/images/la-roche.jpg',
            buyLink:
              'https://www.laroche-posay.fr/gammes/corps/lipikar/lipikar-soin/lipikar-lait-hydratant-corps/LRP_091.html',
          },
        ],
      },
      {
        title: '1. Подсушивание и успокоение кожи:',
        image: '/images/derma.jpg',
        description:
          '- Начните с аккуратного подсушивания и успокоения кожи ребенка.\n' +
          '- При наличии мокнущих высыпаний, используйте стерильные марлевые салфетки, смоченные одним из нижеперечисленных средств. (гиф как это делать)\n' +
          '- Меняйте примочки каждые 5-10 минут до подсушивания высыпаний.\n' +
          '- **Не удаляйте корки насильно**; они отторгнутся самостоятельно.\n',
        drugs: [
          {
            title: 'La Roche-Posay\n' + 'Lipikar Lait\n',
            description:
              '**Категория 1:**\n' +
              '\n' +
              'используйте 1-2 раза в сутки, дополнительно по потребности. Подходит с первых дней жизни.\n' +
              '\n' +
              '**Категория 2:**\n' +
              '\n' +
              'используйте 1-2 раза в сутки, дополнительно по потребности. Подходит с первых дней жизни.\n',
            image: '/images/la-roche.jpg',
            buyLink:
              'https://www.laroche-posay.fr/gammes/corps/lipikar/lipikar-soin/lipikar-lait-hydratant-corps/LRP_091.html',
          },
          {
            title: 'La Roche-Posay\n' + 'Lipikar Lait\n',
            description:
              '**Категория 1:**\n' +
              '\n' +
              'используйте 1-2 раза в сутки, дополнительно по потребности. Подходит с первых дней жизни.\n' +
              '\n' +
              '**Категория 2:**\n' +
              '\n' +
              'используйте 1-2 раза в сутки, дополнительно по потребности. Подходит с первых дней жизни.\n',
            image: '/images/la-roche.jpg',
            buyLink:
              'https://www.laroche-posay.fr/gammes/corps/lipikar/lipikar-soin/lipikar-lait-hydratant-corps/LRP_091.html',
          },
        ],
      },
    ],
    lastBlock: {
      title: 'Средства для ежедневного ухода',
      description:
        '**Помните!** Соблюдайте рекомендации Вашего лечащего врача! Не занимайтесь самолечением! Рекомендации по уходу за кожей̆ наиболее эффективны при соблюдении режима лечения, предписанного врачом!\n',
      advices: [
        {
          reason: 'Купание',
          product: {
            title: 'La Roche-Posay\n' + 'Lipikar Lait\n',
            description:
              '**Категория 1:**\n' +
              '\n' +
              'используйте 1-2 раза в сутки, дополнительно по потребности. Подходит с первых дней жизни.\n' +
              '\n' +
              '**Категория 2:**\n' +
              '\n' +
              'используйте 1-2 раза в сутки, дополнительно по потребности. Подходит с первых дней жизни.\n',
            image: '/images/la-roche.jpg',
            buyLink:
              'https://www.laroche-posay.fr/gammes/corps/lipikar/lipikar-soin/lipikar-lait-hydratant-corps/LRP_091.html',
          },
        },
        {
          reason: 'Увлажнение',
          product: {
            title: 'La Roche-Posay\n' + 'Lipikar Lait\n',
            description:
              '**Категория 1:**\n' +
              '\n' +
              'используйте 1-2 раза в сутки, дополнительно по потребности. Подходит с первых дней жизни.\n' +
              '\n' +
              '**Категория 2:**\n' +
              '\n' +
              'используйте 1-2 раза в сутки, дополнительно по потребности. Подходит с первых дней жизни.\n',
            image: '/images/la-roche.jpg',
            buyLink:
              'https://www.laroche-posay.fr/gammes/corps/lipikar/lipikar-soin/lipikar-lait-hydratant-corps/LRP_091.html',
          },
        },
      ],
    },
  };

  return (
    <>
      <main className={'flex flex-col gap-2'}>
        <MainBlock
          description={data.mainBlock.description}
          title={data.mainBlock.title}
          tiles={data.mainBlock.tiles}
        />
        <div className={'flex sm:px-10 p-2 flex-col gap-2'}>
          {data.treatmentStages.map(
            (stage: TreatmentStageInterface, index: number) => {
              return <TreatmentStage key={index} displayArrow {...stage} />;
            }
          )}
        </div>
        <LastBlock
          title={data.lastBlock.title}
          description={data.lastBlock.description}
          advices={data.lastBlock.advices}
        />
      </main>
    </>
  );
}
