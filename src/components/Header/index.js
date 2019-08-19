import React from 'react';

import './index.css';

export class Header extends React.Component{

    componentDidMount(){
            this.props.Load();
    }

    render(){

        return(
            <div className='header'>
                <h1>Магазин "Simple"</h1>
            </div>
        )
    }
}