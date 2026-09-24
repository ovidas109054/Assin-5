import {use} from 'react';
import type { CardType } from './Types';



const Cards = ({CardPromis,selectedStack,onAdd}:{CardPromis: Promise<CardType[]>; selectedStack: CardType[]; onAdd: (card:CardType) => void;}) => {
    const allCards = use(CardPromis);
    
    return (
         <div className='col-span-3 grid grid-cols-3 gap-5'>
                {allCards.length === 0 && <p>No Tech Found</p>}
                {allCards.map((Acards) => {

                    const isAdded = selectedStack.some((item) => item.id === Acards.id);
                    
                    return (
                <div key = {Acards.id} className='bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex flex-col gap-4'>
                    <div className=' flex items-start justify-between'>
                        <img src={Acards.icon} alt={Acards.name} className='w-10 h-10 object-contain'/>
                        <span className='bg-blue-50 text-blue-500 text-[10px] font-medium px-3 py-1 rounded-full'>
                                {Acards.badge}
                        </span>

                    </div>

                    <h3 className='text-lg font-bold text-gray-900 text-[15px]'>{Acards.name}</h3>
                    <p className='text-[8px] text-gray-500 leading-relaxed'>{Acards.description}</p>

                    <div className='flex items-center gap-3 text-sm'>
                        <span className='bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[8px]'>
                            {Acards.category}
                        </span>
                        <span className='text-gray-500 text-[8px]'>{Acards.difficulty}</span>
                        <span className='flex items-center gap-1 text-gray-700 ml-auto'>
                            
                            <span className='text-[10px] font-medium'>⭐{Acards.rating}</span>
                        </span>
                    </div>

                    <button
                          onClick={() => onAdd(Acards)}
                          disabled={isAdded}
                          className={`w-full text-[12px] font-medium py-3 rounded-2xl transition-colors duration-200 ${isAdded
                                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed': 'bg-gray-900 text-white hover:bg-gray-800'
                                       }`}>{isAdded ? 'Added' : 'Add to Stack'}
                     </button>
                </div>
                   
                );
                    
           })}
          
        </div>
    );
};

export default Cards;