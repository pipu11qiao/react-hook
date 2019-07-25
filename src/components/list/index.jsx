import React, {Component, useState, useReducer, useContext} from 'react';
import {Context, reducer} from './components/reducer';
import Couter from './components/couter';

import './style.scss';

const Util = {
    num: 0,
    getCounter() {
        this.num++;
        return {
            id: `counter${this.num}`,
            count: 0
        }
    }
};

function AllCountBox() {
    const {ctx} = useContext(Context);
    const {list} = ctx;
    return (
        <div>
            <p>couter数量:
                <span>{list.length}</span>
                ,总数:
                <span>{list.reduce((next, cur, i) => (next + cur.count), 0)}</span>
            </p>
        </div>
    )
}

function ToolBar() {
    const {dispatch} = useContext(Context);
    return (
        <div>
            <div className="btn"
                 onClick={() => {
                     dispatch({
                         type: 'addCounter',
                         counter: Util.getCounter(),
                     })
                 }}
            >计数器加一
            </div>
            <div className="btn"
                 onClick={() => {
                     dispatch({
                         type: 'changeCount',
                         num: 1
                     })
                 }}
            >全部加一
            </div>
            <div className="btn"
                 onClick={() => {
                     dispatch({
                         type: 'changeCount',
                         num: -1
                     })
                 }}

            >全部减一
            </div>
        </div>
    )
}

function ListRoot(props) {
    const list = props.list;
    const initState = {
        list
    };
    const [ctx, dispatch] = useReducer(reducer, initState);
    return (
        <Context.Provider value={{ctx, dispatch}}>
            <div>list</div>
            <AllCountBox/>
            <ToolBar/>
            {
                list.map(item => <Couter item={item} key={item.id}/>)
            }
        </Context.Provider>
    )

}

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        this.setData();
    }

    setData() {
        const list = [];
        list.push(Util.getCounter());
        list.push(Util.getCounter());
        console.log(list);
        this.setState({
            list
        });
    }

    render() {
        const {list} = this.state;
        return (
            <div className="list-box">
                {
                    list.length > 0 ?
                        <ListRoot
                            list={list}
                        /> :
                        ''
                }
            </div>
        )
    }
};