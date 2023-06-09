import React from 'react'

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
    <div>Card</div>


  );
};

export default Card;