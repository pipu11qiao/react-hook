import React,{Component,useState,useEffect} from 'react';
import useEventListener from './useEventListener';

function ClickBox(props) {
    const {addEl,minusEl} = props;
    const [count,setCount] = useState(0);
    useEventListener('click',function () {
        console.log('add click');
        setCount(count => count + 1);
    },addEl);
    useEventListener('click',function () {
        console.log('minus click');
        setCount(count => count - 1);
    },minusEl);
    return (
        <div>
            <p>次数:<span>{count}</span></p>
        </div>
    );
}

export default class Page extends Component{
    constructor(props){
        super(props);
        this.state ={
            addEl: null,
            minusEl: null
        };
    }
    componentDidMount() {
        this.setState({
            addEl: document.querySelector('.el_add_btn'),
            minusEl: document.querySelector('.el_minus_btn'),
        });
    }

    render() {
        return (
            <div>
                <p>event listener</p>
                <button className="el_add_btn">点击+1</button>
                <button className="el_minus_btn">点击-1</button>
                <ClickBox addEl={this.state.addEl} minusEl={this.state.minusEl}/>
            </div>
        );
    }
}