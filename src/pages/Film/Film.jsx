import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getOneFilm} from "../../redux/reducers/oneFilm";
import FilmsInfo from "./FilmsInfo/FilmsInfo";
import FilmsRight from "./FilmRight/FilmsRight";

const Film = () => {

    const dispatch = useDispatch()
    const params = useParams();
    const {status, error,product} = useSelector((store) => store.onefilm);

    useEffect(() => {
        dispatch(getOneFilm(params.id))
    },[]);

    return (
        <section className="film">
            <div className="container">
                <div className="film__row">
                    <FilmsRight product={product}/>
                   <FilmsInfo product={product}/>
                </div>
            </div>
        </section>
    );
};

export default Film;