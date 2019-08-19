import React from 'react';

import './index.css';

export class Footer extends React.Component{

    render(){

        const { count, amount } = this.props;
        const rubl='рублей';

        return(
            <div className='footer'>
                <div className='footer__count'>У Вас в корзине {count} товаров на сумму {amount} {rubl}</div>
                <button>В корзину</button>
            </div>
        )
    }
}