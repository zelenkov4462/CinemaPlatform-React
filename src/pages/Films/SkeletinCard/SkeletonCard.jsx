import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = ({cards}) => {
    return (
        Array(cards).fill(0).map((item, idx) =>
            <div className="films__skeleton" key={idx}>
                <Skeleton className="films__skeleton-card" height={300}/>
                <Skeleton count={1}/>
            </div>
        )
    );
};

export default SkeletonCard;