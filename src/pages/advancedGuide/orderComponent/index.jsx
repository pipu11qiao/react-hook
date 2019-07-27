import React, { Component } from 'react';
import createPrevent from 'components/prevent';

const appleProps = createPrevent({ text: 'apple' });
const bananaProps = createPrevent({ text: 'babana' });

const TextBox = (props) => {
    const { text = 'xixi' } = props;
    return <div>{text}</div>;
};
@appleProps
class AppleBox extends Component {
    render() {
        return <TextBox {...this.props} />;
    }
}

@bananaProps
class BananaBox extends Component {
    render() {
        return <TextBox {...this.props} />;
    }
}


class Page extends Component {
    render() {
        return (
            <div>
                <h1>order component</h1>
                <AppleBox />
                <BananaBox />
            </div>
        );
    }
}


export default Page;
