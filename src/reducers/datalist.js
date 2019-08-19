import { 
    FILTER_BY_ID,
    SEND_REQUEST,
    REQUEST_SUCCESS,
    CHANGE_COUNT,
    SEND_BUCKET,
} from '../actions/DataListActions';

//инициализируем начальное состояние
export const initialState = {
    fromServ : [],
    isFetching: false,
    isInit: true,
    filterById:0,
    product:{},
}

//обновление state редьюсером в зависимости от экшена
export function dataListReducer(state = initialState, action){
    switch (action.type) {
        case SEND_REQUEST:
            return { ...state, isFetching: true }
        case REQUEST_SUCCESS:
            return {...state, fromServ:state.fromServ.concat(action.playload), isFetching: false, isInit: false }
        case FILTER_BY_ID:
            return {...state, filterById:action.playload}
        case CHANGE_COUNT:
                const gid=action.playload.gid;
                const _gid={};
                _gid[gid]={
                    value:action.playload.value,
                    amount:action.playload.amount,
                };
                return {...state, product: {...state.product, ..._gid}
                }
        case SEND_BUCKET:
            return {...state, product:{}}
        default:
            return state
    }
}