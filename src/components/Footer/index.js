import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export class Footer extends React.Component{

    render(){

        const { amountItem, SndReqest } = this.props;

        let count=0;
        let amount=0;
        let objReq={};

        for(let key in amountItem){
            count+= +amountItem[key].value;
            amount+= +amountItem[key].amount;
            objReq[key]=amountItem[key].value;
        }

        function onBtnClick(){
            console.log(objReq);
            SndReqest(objReq);
        }

        return(
            <div className='footer'>
                <div className='footer__count'>Количество товаров в корзине: {count} на сумму {amount} руб.</div>
                <button onClick={onBtnClick}>В корзину</button>
            </div>
        )
    }
}

Footer.propTypes= {
    amountItem: PropTypes.object.isRequired,
    SndReqest: PropTypes.func.isRequired,
}