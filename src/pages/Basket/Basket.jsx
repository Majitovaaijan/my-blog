import React from 'react';
import styles from "./Basket.module.css";
import {basket} from"../../constant/index"

const Basket = () => {
    return (
        <div>
            <table>
                <tr>
                    <th>№</th>
                    <th>Название</th>
                    <th>Количество</th>
                    <th>-</th>
                    <th>+</th>
                    <th>Сумма</th>
                    <th><button>Удалить</button></th>
                </tr>
                {
                    basket.map((item)=>{
                       return <tr>
                            <td>{item.number}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td><button>-</button></td>
                            <td><button>+</button></td>
                            <td>{item.total}</td>
                            <td><button>Удалить</button></td>
                        </tr>
                    })
                }

            </table>
        </div>
    );
};

export default Basket;