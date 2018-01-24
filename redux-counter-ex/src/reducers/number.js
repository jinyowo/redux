import * as types from '../actions/index';

// 초기 상태 정의
const initialState = {
    number: 0
};

/**
 * state와 action을 파라미터로 가지는 함수
 * switch문을 통해 action.type에 따라 상태 변화
 */
function number(state = initialState, action) {
    switch(action.type) {
        case types.INCREMENT:
            return {
                number: state.number + 1
            };
        case types.DECREMENT:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
};

export default number;