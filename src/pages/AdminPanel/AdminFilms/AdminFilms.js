import React from 'react';

const AdminFilms = () => {
    return (
        <div className="admin__info">
            <h2 className="admin__info-title">
                Все филмы
            </h2>
            <table className="admin__table" >
                <tr className="admin__table-block">
                    <th className="admin__table-title">
                        ID
                    </th>
                    <th className="admin__table-title">
                        Название
                    </th>
                    <th className="admin__table-title">
                        Год
                    </th>
                    <th className="admin__table-title">
                        Жанр
                    </th>
                    <th className="admin__table-title">
                        Статус
                    </th>
                    <th className="admin__table-title">
                        Изменить
                    </th>
                    <th className="admin__table-title">
                        Удалить
                    </th>
                </tr>
                <tr className="admin__table-block">
                    <td className="admin__table-info">
                        1
                    </td>
                    <td className="admin__table-info">
                        Человек-паук: Нет пути домой
                    </td>
                    <td className="admin__table-info">
                        2021
                    </td>
                    <td className="admin__table-info">
                        Приключения
                    </td>
                    <td className="admin__table-info">
                        Free
                    </td>
                    <td className="admin__table-info">
                        <button className="admin__table-btn">
                            Изменить
                        </button>
                    </td>
                    <td className="admin__table-info">
                        <button className="admin__table-btn">
                            X
                        </button>
                    </td>
                </tr>
            </table >
        </div>
    );
};

export default AdminFilms;