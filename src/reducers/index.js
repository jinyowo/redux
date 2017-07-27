import color from './color';
import number from './number';
import { combineReducers } from 'redux';

/**
 * 서브 리듀서들을 하나로 합침
 *
 * {
 *      numberData: {
 *          number: 0
 *      },
 *      colorData: {
 *          color: 'black'
 *      }
 * }
 */
const reducers = combineReducers({
    numberData: number,
    colorData: color
});

export default reducers;