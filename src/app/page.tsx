import MainBlock from '@/widgets/main-block/ui';
import AnamnesIcon from '../../public/icons/profile.svg';
import ConsultationIcon from '../../public/icons/consultation.svg';
import TabletsIcon from '../../public/icons/tablets.svg';

export default function Home() {
  const data = {
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
  };

  return (
    <>
      <main>
        <MainBlock
          description={data.mainBlock.description}
          title={data.mainBlock.title}
          tiles={data.mainBlock.tiles}
        />
      </main>
    </>
  );
}
