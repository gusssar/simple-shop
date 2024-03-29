import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export class Item extends React.Component{

    onChangeCount = (value, gid, gprice) => {
        const obj={
            value:value,
            gid:gid,
            amount:(value)?gprice*value:0,
        };
        this.props.ChangeCount(obj);
    }

    render(){
        const { isInit, item, amountItem } = this.props;

        const elem = (isInit)?
        null:
            item.goods.map((el,i)=>
                <table key={i} className='item__table'>
                    <tbody>
                        <tr className='flex'>
                            <td className='table__id item__id'>{el.gid}</td>
                            <td className='table__name item__name'>{el.gname}</td>
                            <td className='table__price item__price'>{el.gprice}</td>
                            <td className='table__count item__count'>
                                <input type='number' onChange={(event)=> 
                                     this.onChangeCount(event.currentTarget.value, el.gid, el.gprice)}
                                     value={(amountItem[el.gid])?amountItem[el.gid].value:''}
                                     placeholder='0'
                                     />
                                </td>
                            <td className='table__amount item__amount'>{(amountItem[el.gid])?amountItem[el.gid].amount:'0'}</td>
                        </tr>
                    </tbody>
                </table>
            );

        return(
            <div className='item'>
                {elem}
            </div>
        )
    }
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    isInit:PropTypes.bool.isRequired,
    ChangeCount: PropTypes.func.isRequired,
    amountItem: PropTypes.object.isRequired,
}