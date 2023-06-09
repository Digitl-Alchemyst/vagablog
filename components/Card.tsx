import React from 'react'
import Link from 'next/link'


type Props = {
    className?: string;
    imageHeight?: string;
    isSmallCard?: boolean;
    isLargeCard?: boolean;
}

const Card = ({
    className,
    imageHeight,
    isSmallCard = false,
    isLargeCard = false,
}: Props) => {

  return (

    <div className={className}>
        
        <Link className='basis-full hover:opacity-70'
            href='/'
        >
        <div className={`relative w-auto mb-3 rounded-md p-1 ${imageHeight}`}>image</div>
        </Link>
        <div className='basis-full'>
            
            <Link href='/'>
                <h4 className={`font-bold hover:text-lime-300
                        ${isSmallCard ? 'text-base' : 'text-lg'}
                        ${isSmallCard ? 'line-clamp-2' : ''}
                    `}
                >
                    Title
                </h4>
            </Link>

            <div className={`${isSmallCard ? 'my-2' : 'flex my-3'} gap-3 p-1 inline-block bg-rose-400`}>
                <h5 className='text-sm font-semibold text-slate-300'>Author</h5>
                <h6 className='text-sm  text-slate-200'>Date</h6>
            </div>

            <p className={`text-slate-200 p-1 bg-fuchsia-800 rounded-md ${
                    isLargeCard ? 'line-clamp-5' : 'line-clamp-3'
                }`}
            >
                Snippet of the article. Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

        </div>    

      

    </div>


  );
};

export default Card;