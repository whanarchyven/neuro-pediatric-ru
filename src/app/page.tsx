import InfoTile from "@/shared/ui/info-tile";

import MockIcon from "../../public/icons/tablets.svg"

export default function Home() {
    return (
        <>
            <main>
                <h1>Next.js Project home page</h1>
                <InfoTile title={'Анамнез:'}
                          description={'Имеются участки выраженного покраснения кожи с наличием корок и явлениями мокнутия, сопровождающиеся сильным зудом.'}
                          icon={<MockIcon className={'w-10'}/>}
                          className={'w-1/2'}
                />
                <InfoTile isActive={true} title={'Анамнез:'}
                          description={'Имеются участки выраженного покраснения кожи с наличием корок и явлениями мокнутия, сопровождающиеся сильным зудом.'}
                          icon={<MockIcon className={'w-10'}/>}
                          className={'w-1/2'}
                />
            </main>
        </>
    );
}
