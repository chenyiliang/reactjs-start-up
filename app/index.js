import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
    render() {
        let styleObj = {color: 'blue', fontSize: '44px'};
        return (<div className="alert-text" style={{fontSize:'x-large'}}>Hello {this.props.name}&nbsp;&nbsp;
            <span style={styleObj}>Teaboy</span></div>);
    }
}

ReactDOM.render(<App name="World"/>, document.getElementById('container'));
