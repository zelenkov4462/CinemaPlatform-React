import React, {useEffect} from 'react';
import {getCinema} from "../../redux/reducers/cinema";
import {useDispatch, useSelector} from "react-redux";
import FilmsCard from "./FilmsCard/FilmsCard";
import SkeletonCard from "./SkeletinCard/SkeletonCard";
import FilmsSort from "./FilmsFilter/FilmsSort";
import FilmsYear from "./FilmsFilter/FilmsYear";

const Films = () => {

    const dispatch = useDispatch()
    const {status, error, data, filter} = useSelector((store) => store.cinema)
    const {user} = useSelector((store) => store.user)


    useEffect(() => {
        dispatch(getCinema({
            ...filter,
            status: JSON.parse(localStorage.getItem('user')) !== null ? 'gold' : 'free'
        }))

    }, [filter])


    return (
        <section className="films">
            <div className="container">
                <h2 className="films__title">
                    Фильмы
                </h2>
                <div className="films__sort">
                    <select>
                        <option value="" selected>По популярности</option>
                        <option value="">Дате</option>
                        <option value="">Рейтингу</option>
                    </select>
                </div>
                <div className="films__filter">
                    <div className="films__filter-sort">
                        <FilmsSort/>
                        <FilmsYear/>
                    </div>
                </div>
                <div className="films__row">
                    {
                        status === 'loading' ?
                            <SkeletonCard cards={12}/>
                            : status === 'resolve' ?
                            <>
                                {data.map((item) => (
                                    <FilmsCard item={item}/>
                                ))
                                }
                            </> : <h2>{error}</h2>
                    }
                </div>
            </div>
        </section>
    );
};

export default Films;