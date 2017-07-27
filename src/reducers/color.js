import * as types from '../actions/index';

// 초기 상태 정의
const initialState = {
    color: 'black'
};

/**
 * state와 action을 파라미터로 가지는 함수
 * switch문을 통해 action.type에 따라 상태 변화
 */
function color(state = initialState, action) {
    switch(action.type) {
        case types.SET_COLOR:
            return {
                color: action.color
            };
        default:
            return state;
    }
};

export default color;