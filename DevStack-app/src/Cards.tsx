import {use} from 'react';
import type { CardType } from './Types';



const Cards = ({CardPromis}:{CardPromis: Promise<CardType[]>}) => {
    const allCards = use(CardPromis);
    
    return (
        <div className='container mx-auto items-center mt-20 mb-20'>
            <div>
                <h1 className=' text-2xl font-bold '>Explore The <span className='text-fuchsia-600'>Technologies</span></h1>
                <p className='text-gray-400'>Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className='col-span-3 grid grid-cols-3 gap-5'>
                {allCards.length === 0 && <p>No Tech Found</p>}
                {allCards.map((Acards) => (
                    <p>{Acards.id}</p>
                ))}
            </div>

        </div>
    );
};

export default Cards;