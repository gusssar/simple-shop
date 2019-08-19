import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export class Item extends React.Component{

    onChangeCount = (value, gid, gprice) => {
        const obj={
            value:value,
            gid:gid,
            gprice:gprice,
        };
        console.log(obj);
        this.props.ChangeCount(obj);
    }

    render(){
        const { isInit, item } = this.props;
        //вся инфа что пришла

        

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
                                     this.onChangeCount(event.currentTarget.value, el.gid, el.gprice)}/>
                                </td>
                            <td className='table__amount item__amount'>0</td>
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
    item: PropTypes.array.isRequired,
    isInit:PropTypes.bool.isRequired,
    ChangeCount: PropTypes.func.isRequired,
}