/* eslint-disable max-len */
import React, { Component } from 'react';
import './style.scss';

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
    }

    onMouseMove = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY,
        });
    }

    render() {
        return (
            <div style={{ height: '200px', border: '1px solid #ddd' }} onMouseMove={this.onMouseMove}>
                {
                    this.props.render(this.state)
                }
            </div>
        );
    }
}
const MouseRender = () => (
    <Mouse render={
        ({ x, y }) => (
            <span
                className="mouse-tip gray"
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                }}
            />
        )
    }
    />
);
const withMouse = (WrappedCmponent) => (props) => <Mouse render={mouse => (<WrappedCmponent {...props} mouse={mouse} />)} />;

const MouseRenderRed = withMouse((props) => (
    <span
        className="mouse-tip red"
        style={{
            left: `${props.mouse.x}px`,
            top: `${props.mouse.y}px`,
        }}
    />
));


const AllNode = () => (
    <div>
        <hr />
        <MouseRender />
        <hr />
        <MouseRenderRed />
        <hr />
    </div>
);

export default AllNode;
