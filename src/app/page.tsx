import MainBlock, { MainBlockInterface } from '@/widgets/main-block';
import AnamnesIcon from '../../public/icons/profile.svg';
import ConsultationIcon from '../../public/icons/consultation.svg';
import TabletsIcon from '../../public/icons/tablets.svg';
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
      description: (
        <p>
          <strong>Цифровой рецепт</strong> – это ваш персональный путеводитель в
          мире здоровой кожи.
          <br />
          <br />
          Созданный специально для вас, он учитывает все особенности вашего типа
          кожи,
          <br />
          индивидуальные потребности и предпочтения.
          <br />
          <br />С его помощью вы получите точные рекомендации по уходу и
          лечению, доступные всегда
          <br />и везде на вашем смартфоне или компьютере.
        </p>
      ),
      tiles: [
        {
          title: 'Анамнез:',
          description:
            'Имеются участки выраженного покраснения кожи с наличием корок и явлениями мокнутия, сопровождающиеся сильным зудом.',
          icon: <AnamnesIcon className="w-10" />,
        },
        {
          description:
            'Вам требуется консультация дерматолога для назначения и/или коррекции лекарственного лечения.',
          icon: <ConsultationIcon className="w-10" />,
          isActive: true,
        },
        {
          description: (
            <p>
              Для <strong>облегчения</strong> состояния кожи ребенка и
              предотвращения раздражения, следуйте рекомендациям в поледующих
              блоках.
            </p>
          ),
          icon: <TabletsIcon className="w-10" />,
        },
      ],
    },
    treatmentStages: [
      {
        title: '1. Подсушивание и успокоение кожи:',
        description: (
          <ul>
            <li>
              Начните с аккуратного подсушивания и успокоения кожи ребенка.
            </li>
            <li>
              При наличии мокнущих высыпаний, используйте стерильные марлевые
              салфетки, смоченные одним из нижеперечисленных средств. (гиф как
              это делать)
            </li>
            <li>
              Меняйте примочки каждые 5-10 минут до подсушивания высыпаний.
            </li>
            <li>
              <strong>Не удаляйте корки насильно</strong>; они отторгнутся
              самостоятельно.
            </li>
          </ul>
        ),
        drugs: [
          {
            title: (
              <p>
                La Roche-Posay
                <br />
                Lipikar Lait
              </p>
            ),
            description: (
              <p>
                <strong>Категория 1:</strong>
                <br />
                <br />
                используйте 1-2 раза в сутки, дополнительно по потребности.
                Подходит с первых дней жизни.
                <br />
                <br />
                <strong>Категория 2:</strong>
                <br />
                <br />
                используйте 1-2 раза в сутки, дополнительно по потребности.
                Подходит с первых дней жизни.
              </p>
            ),
            image:
              'https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwac5618cd/LRP_Product/Lipikar/3337875552127_Lipikar-Body-Milk_400ml_01_La-Roche-Posay.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70',
            buyLink:
              'https://www.laroche-posay.fr/gammes/corps/lipikar/lipikar-soin/lipikar-lait-hydratant-corps/LRP_091.html',
          },
          {
            title: (
              <p>
                La Roche-Posay
                <br />
                Lipikar Lait
              </p>
            ),
            description: (
              <p>
                <strong>Категория 1:</strong>
                <br />
                <br />
                используйте 1-2 раза в сутки, дополнительно по потребности.
                Подходит с первых дней жизни.
                <br />
                <br />
                <strong>Категория 2:</strong>
                <br />
                <br />
                используйте 1-2 раза в сутки, дополнительно по потребности.
                Подходит с первых дней жизни.
              </p>
            ),
            image:
              'https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwac5618cd/LRP_Product/Lipikar/3337875552127_Lipikar-Body-Milk_400ml_01_La-Roche-Posay.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70',
            buyLink:
              'https://www.laroche-posay.fr/gammes/corps/lipikar/lipikar-soin/lipikar-lait-hydratant-corps/LRP_091.html',
          },
        ],
      },
      {
        title: '1. Подсушивание и успокоение кожи:',
        description: (
          <ul>
            <li>
              Начните с аккуратного подсушивания и успокоения кожи ребенка.
            </li>
            <li>
              При наличии мокнущих высыпаний, используйте стерильные марлевые
              салфетки, смоченные одним из нижеперечисленных средств. (гиф как
              это делать)
            </li>
            <li>
              Меняйте примочки каждые 5-10 минут до подсушивания высыпаний.
            </li>
            <li>
              <strong>Не удаляйте корки насильно</strong>; они отторгнутся
              самостоятельно.
            </li>
          </ul>
        ),
        drugs: [
          {
            title: (
              <p>
                La Roche-Posay
                <br />
                Lipikar Lait
              </p>
            ),
            description: (
              <p>
                <strong>Категория 1:</strong>
                <br />
                <br />
                используйте 1-2 раза в сутки, дополнительно по потребности.
                Подходит с первых дней жизни.
                <br />
                <br />
                <strong>Категория 2:</strong>
                <br />
                <br />
                используйте 1-2 раза в сутки, дополнительно по потребности.
                Подходит с первых дней жизни.
              </p>
            ),
            image:
              'https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwac5618cd/LRP_Product/Lipikar/3337875552127_Lipikar-Body-Milk_400ml_01_La-Roche-Posay.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70',
            buyLink:
              'https://www.laroche-posay.fr/gammes/corps/lipikar/lipikar-soin/lipikar-lait-hydratant-corps/LRP_091.html',
          },
          {
            title: (
              <p>
                La Roche-Posay
                <br />
                Lipikar Lait
              </p>
            ),
            description: (
              <p>
                <strong>Категория 1:</strong>
                <br />
                <br />
                используйте 1-2 раза в сутки, дополнительно по потребности.
                Подходит с первых дней жизни.
                <br />
                <br />
                <strong>Категория 2:</strong>
                <br />
                <br />
                используйте 1-2 раза в сутки, дополнительно по потребности.
                Подходит с первых дней жизни.
              </p>
            ),
            image:
              'https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwac5618cd/LRP_Product/Lipikar/3337875552127_Lipikar-Body-Milk_400ml_01_La-Roche-Posay.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70',
            buyLink:
              'https://www.laroche-posay.fr/gammes/corps/lipikar/lipikar-soin/lipikar-lait-hydratant-corps/LRP_091.html',
          },
        ],
      },
    ],
    lastBlock: {
      title: 'Средства для ежедневного ухода',
      description: (
        <p>
          <strong>Помните!</strong> Соблюдайте рекомендации Вашего лечащего
          врача! Не занимайтесь самолечением! Рекомендации по уходу за кожей̆
          наиболее эффективны при соблюдении режима лечения, предписанного
          врачом!{' '}
        </p>
      ),
      advices: [
        {
          reason: 'Купание',
          product: {
            title: (
              <p>
                La Roche-Posay
                <br />
                Lipikar Lait
              </p>
            ),
            description: (
              <p>
                <strong>Категория 1:</strong>
                <br />
                <br />
                используйте 1-2 раза в сутки, дополнительно по потребности.
                Подходит с первых дней жизни.
                <br />
                <br />
                <strong>Категория 2:</strong>
                <br />
                <br />
                используйте 1-2 раза в сутки, дополнительно по потребности.
                Подходит с первых дней жизни.
              </p>
            ),
            image:
              'https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwac5618cd/LRP_Product/Lipikar/3337875552127_Lipikar-Body-Milk_400ml_01_La-Roche-Posay.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70',
            buyLink:
              'https://www.laroche-posay.fr/gammes/corps/lipikar/lipikar-soin/lipikar-lait-hydratant-corps/LRP_091.html',
          },
        },
        {
          reason: 'Увлажнение',
          product: {
            title: (
              <p>
                La Roche-Posay
                <br />
                Lipikar Lait
              </p>
            ),
            description: (
              <p>
                <strong>Категория 1:</strong>
                <br />
                <br />
                используйте 1-2 раза в сутки, дополнительно по потребности.
                Подходит с первых дней жизни.
                <br />
                <br />
                <strong>Категория 2:</strong>
                <br />
                <br />
                используйте 1-2 раза в сутки, дополнительно по потребности.
                Подходит с первых дней жизни.
              </p>
            ),
            image:
              'https://www.laroche-posay.fr/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-lrp-ng-master-catalog/fr_FR/dwac5618cd/LRP_Product/Lipikar/3337875552127_Lipikar-Body-Milk_400ml_01_La-Roche-Posay.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=70',
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
