import React from 'react';
// 返回一个装饰器函数，参数是当前的组件函数


const createConnect = (ContextConsumer) => (WrappedComponent) => (props) => {
    const ConnectFun = (allProps) => <WrappedComponent {...allProps} />;
    ConnectFun.staticName = `Connect(${WrappedComponent.displayName
            || WrappedComponent.name
            || 'Component'})`;
    return (
        <ContextConsumer>
            {
                (state) => <ConnectFun {...state} {...props} />
            }
        </ContextConsumer>
    );
};

export default createConnect;
