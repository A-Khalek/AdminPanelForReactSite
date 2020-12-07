import React, {Component} from 'react';
import Menu from './components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu>
                    <h1>I am child</h1>
                </Menu>
            </div>
        );
    }
}

export default App;
