import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '../Item/index.js';

import './index.css';

export class List extends React.Component{

    render(){
        //принимаем пропс объекта
        const { data, isInit, filterById, ChangeCount, amountItem } = this.props;

        // //если это первый инит ставим спинер
        // //иначе разбираем массив из стора
        
        let _filter = (isInit)?null:data.fromServ[0].filter((el)=> +el.rid === +filterById);

        const item = (isInit)?
        <p>Загрузка...</p>:(filterById&& +filterById!==1)?
            _filter.map((el,i)=>
            <div className='list__content' key={i}>
                <h1>{el.rname}</h1>
                <table className='list__content__table'>
                    <tbody>
                        <tr className='flex'>
                            <td className='table__id list__id'>ID</td>
                            <td className='table__name list__name'>Название товара</td>
                            <td className='table__price list__price'>Цена</td>
                            <td className='table__count list__count'>Количество</td>
                            <td className='table__amount list__amount'>Сумма</td>
                        </tr>
                    </tbody>
                </table>
                <Item isInit={isInit} ChangeCount={ChangeCount} amountItem={amountItem} item={el}/>
            </div>
            )
            :data.fromServ[0].map((el,i)=>
            <div className='list__content' key={i}>
                <h1>{el.rname}</h1>
                <table className='list__content__table'>
                    <tbody>
                        <tr className='flex'>
                            <td className='table__id list__id'>ID</td>
                            <td className='table__name list__name'>Название товара</td>
                            <td className='table__price list__price'>Цена</td>
                            <td className='table__count list__count'>Количество</td>
                            <td className='table__amount list__amount'>Сумма</td>
                        </tr>
                    </tbody>
                </table>
                <Item isInit={isInit} ChangeCount={ChangeCount} amountItem={amountItem} item={el}/>
            </div>
            );
        
        return(
            <div className='list'>
                {item}
            </div>
        )
    }
}

List.propTypes = {
    viewLine: PropTypes.number,
    data: PropTypes.object.isRequired,
    isInit:PropTypes.bool.isRequired,
    LoadAllList: PropTypes.func.isRequired,
    filterById: PropTypes.number.isRequired,
    ChangeCount: PropTypes.func.isRequired,
    amountItem: PropTypes.object.isRequired,
}