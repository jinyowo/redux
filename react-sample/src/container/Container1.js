import React, { Component } from 'react';

import Component1 from '../component/Component1';
import Component2 from '../component/Component2';

class Container1 extends Component {
    render() {
        return [
            <Component1 />,
            <Component2 />,
        ];
    }
}

export default Container1;
