import React, { Component } from 'react';

import { Provider, Connect } from './store.jsx';


const Box = (props) => {
    const {
        title, fun = () => {}, num, text, children
    } = props;
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            margin: '10px',
        }}
        >
            <div>
                <h5>{title}</h5>
                <p>
当前num是
                    <span>{num}</span>
                </p>
                <p>
当前text是
                    <span>{text}</span>
                </p>
                <button type="button" onClick={() => { fun('add') }}>增加</button>
                <button type="button" onClick={() => { fun('minus') }}>减少</button>
            </div>
            <div style={{
                paddingLeft: '20px',
            }}
            >
                {children}
            </div>
        </div>
    );
};

@Connect
class Child1 extends Component {
    clickFun = (type) => {
        this.props.setStore({
            num: this.props.num + (1 * (type === 'add' ? 1 : -1))
        });
    }

    render() {
        return (
            <Box
                title="Child Component 1 每次增加/减少5"
                {...this.props}
                fun={this.clickFun}
            />
        );
    }
}

@Connect
class Child2 extends Component {
    clickFun = (type) => {
        this.props.setStore({
            num: this.props.num + (1 * (type === 'add' ? 1 : -1))
        });
    }

    render() {
        return (
            <Box
                title="Child Component 2 每次增加/减少5"
                {...this.props}
                fun={this.clickFun}
            />
        );
    }
}

@Connect
class Parent1 extends Component {
    clickFun = (type) => {
        this.props.setStore({
            num: this.props.num + (5 * (type === 'add' ? 1 : -1))
        });
    }

    render() {
        return (
            <Box
                title="Parent Component 1 每次增加/减少5"
                {...this.props}
                fun={this.clickFun}
            >
                <Child1 />
                <Child2 />
            </Box>
        );
    }
}

@Connect
class Parent2 extends Component {
    clickFun = (type) => {
        this.props.setStore({
            num: this.props.num + (5 * (type === 'add' ? 1 : -1))
        });
    }

    render() {
        return (
            <Box
                title="Parent Component 2 每次增加/减少5"
                {...this.props}
                fun={this.clickFun}
            >
                <Child1 />
                <Child2 />
            </Box>
        );
    }
}


@Provider
class Page extends Component {
    changeFun = (e) => {
        const { target } = e;
        this.props.setStore({
            text: target.value
        });
    }

    clickFun = (type) => {
        this.props.setStore({
            num: this.props.num + (10 * (type === 'add' ? 1 : -1))
        });
    }

    render() {
        return (
            <Box
                title="Page 每次增加/减少 10"
                {...this.props}
                fun={this.clickFun}
            >
                <div><input type="text" onChange={this.changeFun} /></div>
                <Parent1 />
                <Parent2 />
            </Box>
        );
    }
}


export default Page;
