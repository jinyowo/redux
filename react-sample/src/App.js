import React from 'react';
import { render } from 'react-dom';

import Container from './container/Container1';

class App {
    static main() {
        render(<Container/>, document.getElementById('app'));
    }
}

App.main();
