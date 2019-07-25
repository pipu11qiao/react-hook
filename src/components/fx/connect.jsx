import React from 'react';
// 返回一个装饰器函数，参数是当前的组件函数
const createConnect = (Consumer) => {
    return (wrappedComponent)=> {
        <Consumer>
            {
                (store) =>{
                    return (
                        <wrappedComponent  {...store} {}/>
                    )
                }
            }
            </Consumer>
    }
};
