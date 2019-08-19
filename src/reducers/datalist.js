import { 
    FILTER_BY_ID,
    SEND_REQUEST,
    REQUEST_SUCCESS,
    RETRY_REQUEST,
} from '../actions/DataListActions';

//инициализируем начальное состояние
export const initialState = {
    fromServ : [],
    isFetching: false,
    isInit: true,
    filterById:0,
}

//обновление state редьюсером в зависимости от экшена
export function dataListReducer(state = initialState, action){
    switch (action.type) {
        // case INITIALISATION:
        //     return {...state}
        case SEND_REQUEST:
            return { ...state, isFetching: true }
        case REQUEST_SUCCESS:
            return {...state, fromServ:state.fromServ.concat(action.playload), isFetching: false, isInit: false }
        case RETRY_REQUEST:
            return {...state, fromServ:action.playload}
        case FILTER_BY_ID:
            return {...state, filterById:action.playload}
        default:
            return state
    }
}