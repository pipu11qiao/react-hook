import React,{Component} from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';

import CarButton from 'components/carButton';
import BoxWithTheme from './noContext/boxWithTheme';
import BoxWithContextTheme from './withContext';
import BoxWithContextText from './withContext/base';
import BoxWithContextConsumer from './withContext/consumer';
console.log(BoxWithContextConsumer.PureComponent);
console.log(BoxWithContextConsumer.props);

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            num: 1,
        };
    }
    numChange(num){
        // console.log(num);
        this.setState({
            num
        });
    }
    render(){
        return (
            <div>
                <CarButton num={this.state.num} onChange={(num) => {this.numChange(num)}} />
                <div>
                    <p>box:</p>
                    <BoxWithTheme theme={'haha'}/>
                    <BoxWithContextTheme />
                    <BoxWithContextText />
                    <BoxWithContextConsumer />
                </div>
            </div>
        );
    }
};

export default Page;
