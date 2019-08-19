import { combineReducers } from 'redux';
import { dataListReducer } from './datalist';

//комбинируем всередьюсеры в сторе
export const rootReducer = combineReducers({
    data: dataListReducer,
})