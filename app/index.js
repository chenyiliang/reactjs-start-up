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

class Hello extends Component {

    constructor(props) {
        super(props);
        console.log('init state');
        this.state = {
            opacity: 1.0,
            fontSize: '50px'
        };
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(()=> {
            console.log(this.state);
            this.setState({
                opacity: 1.0,
                fontSize: '100px'
            });
            console.log(this.state);
        }, 2000);
    }

    render() {
        console.log('render');
        return (<div style={this.state}>Life Cycle</div>);
    }
}

class ClickComponent extends Component {

    render() {
        return (<div>
            <button onClick={this.handleClick.bind(this)}>显示|隐藏</button>
            <span ref={span=>this.tipSpan=span}>测试点击</span></div>);
    }

    handleClick(event) {
        if (this.tipSpan.style.display === 'none') {
            this.tipSpan.style.display = 'inline';
        } else {
            this.tipSpan.style.display = 'none';
        }
        event.stopPropagation();
        event.preventDefault();
    }
}

class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputContent: ''
        };
    }

    changeHandler(event) {
        this.setState({
            inputContent: event.target.value
        });
        event.stopPropagation();
        event.preventDefault();
    }

    render() {
        return (<div><input type="text" onChange={this.changeHandler.bind(this)}/><span>{this.state.inputContent}</span>
        </div>);
    }
}

ReactDOM.render(<div><App/><Hello/><ClickComponent/><InputComponent/></div>, document.getElementById('container'));


