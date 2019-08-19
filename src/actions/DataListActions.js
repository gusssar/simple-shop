//надо добавить isomorphic-fetch в import
import { GetRequest, SndReqest } from '../utils/Request';

export const FILTER_BY_ID = 'FILTER_BY_ID';
export const SEND_REQUEST = 'SEND_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const CHANGE_COUNT = 'CHANGE_COUNT';
export const SEND_BUCKET = 'SEND_BUCKET';

export function NeedGetRequest(){
    return dispatch => {
        dispatch({
            type: SEND_REQUEST,
        })
            //запускаем опросник
            let _arr=GetRequest();
            //ждём подгрузки данных 1 секунду
            setTimeout(()=>{
                dispatch({
                    type: REQUEST_SUCCESS,
                    playload: _arr,
                })
            },1000);
        }
}

export function NeedSndReqest(obj){
    return dispatch => {
        dispatch({
            type: SEND_BUCKET,
        })
        SndReqest(obj);
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

export function ChangeCount(obj){
    return dispatch => {
        dispatch({
            type: CHANGE_COUNT,
            playload: obj,
        })
    }
}