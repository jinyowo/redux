import React from 'react';
import PropTypes from 'prop-types'
import './Counter.css';

/**
 *
 * @param number
 * @param color
 * @param onIncrement 클릭시 숫자 증가
 * @param onDecrement 우 클릭시 숫자 감소
 * @param onSetColor 더블 클릭시 색 변경
 * @returns {XML}
 * @constructor
 */
const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div className="Counter"
             onClick={onIncrement}
             onContextMenu={
                 (e) => {
                     e.preventDefault();    // 메뉴 열리는 이벤트 방지
                     onDecrement();
                 }
             }
             onDoubleClick={onSetColor}
             style={{backgroundColor: color}} >
            {number}
        </div>
    );
};

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;
