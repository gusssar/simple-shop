import React from 'react';
import PropTypes from 'prop-types';

import './index.css';


export class SideBarFilter extends React.Component{
    onTitleClick = (elem, rid) => {
        this.props.FilterById(+rid);
    }

    render(){

        const { isInit, data, filterById } = this.props;

        const title = (isInit)?
        <p>Загрузка...</p>:
            data.fromServ[0].map((el,i)=>
                <p className={(+el.rid===filterById)?"selected":""}
                    key={i} 
                    onClick={(elem)=> this.onTitleClick(elem, el.rid)}
                    >{el.rname}</p>
            );

        return(
            <div className='sidebar'>
                <div className='sidebar__title'>Список разделов</div>
                <p className={(filterById===1)?"selected":""}
                onClick={(elem)=> this.onTitleClick(elem, 1)}>Весь список</p>
                {title}
            </div>
        )
    }
}

SideBarFilter.propTypes = {
    isInit: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    FilterById: PropTypes.func.isRequired,
    filterById: PropTypes.number.isRequired,
}