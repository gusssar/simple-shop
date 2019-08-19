//надо добавить isomorphic-fetch в import
import { GetRequest } from '../utils/getReq';

export const FILTER_BY_ID = 'FILTER_BY_ID';
export const SEND_REQUEST = 'SEND_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const RETRY_REQUEST = 'RETRY_REQUEST';

export function NeedGetRequest(i,n){
    return dispatch => {
        dispatch({
            type: SEND_REQUEST,
        })
            //запускаем опросник
            let _arr=GetRequest();
            //ждём подгрузки данных 1 секунду
            setTimeout(()=>{
                console.log(_arr);
                dispatch({
                    type: REQUEST_SUCCESS,
                    playload: _arr,
                })
            },1000);
        }
}

export function FilterById(id){
    return dispatch =>{
        dispatch({
            type:FILTER_BY_ID,
            playload: id,
        })
    }
}