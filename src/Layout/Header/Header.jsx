import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {BsFillCameraReelsFill} from 'react-icons/bs'
import {useDispatch, useSelector} from "react-redux";
import {changeSearch} from '../../redux/reducers/cinema'
import {logOutAccount} from "../../redux/reducers/user";


const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user} = useSelector((store) => store.user)

    const handleChange = (e) => {
        dispatch(changeSearch(e.target.value))
    }

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link to={'/'}>
                        <h1 className="header__logo">
                            <BsFillCameraReelsFill/>
                            I-R Cinema
                        </h1>
                    </Link>
                    <ul className="header__menu ">
                        <li className="header__item header__item_films">
                            <NavLink className="header__link " to={'/films'}>
                               Фильмы
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink className="header__link" to={'/series'}>
                                Сериалы
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink className="header__link" to={''}>
                                Мультфильмы
                            </NavLink>
                        </li>
                    </ul>

                    <div className="header__right">
                        <input className="header__search" type="search" placeholder='Поиск' onChange={handleChange}/>

                        {
                            user.email.length ?
                                <div className="header__auth">
                                    <p onClick={() => {
                                        dispatch(logOutAccount())
                                        localStorage.removeItem('user')
                                        navigate('/')
                                    }}>Выйти</p>
                                </div>:
                                <div className="header__auth">
                                    <Link to={'/login'}>Логин</Link>
                                    /
                                    <Link to={'/registration'}>Регистрация</Link>
                                </div>
                        }
                        <Link to={'/admin-panel'}>
                            Админ панель
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;