import React from 'react';
import PropTypes from 'prop-types';

import './index.css';


export class SideBarFilter extends React.Component{
    onTitleClick = (rid) => {
        this.props.FilterById(+rid);
    }

    render(){

        const { isInit, data } = this.props;

        const title = (isInit)?
        <p>Загрузка...</p>:
            data.fromServ[0].map((el,i)=>
                <p className='sidebar__content' key={i} onClick={()=> this.onTitleClick(el.rid)}>{el.rname}</p>
            );

        return(
            <div className='sidebar'>
                <div className='sidebar__title'>Список разделов</div>
                <p onClick={()=> this.onTitleClick(0)}>Весь список</p>
                {title}
            </div>
        )
    }
}

SideBarFilter.propTypes = {
    isInit: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    FilterById: PropTypes.func.isRequired,

}