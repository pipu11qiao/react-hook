import React, { createContext, PureComponent } from 'react';

// 返回一个装饰器函数，参数是当前的组件函数
const createConnect = (ContextConsumer) => (WrappedComponent) => (props) => {
    const ConnectFun = (allProps) => <WrappedComponent {...allProps} />;
    ConnectFun.staticName = `Connect(${WrappedComponent.displayName
            || WrappedComponent.name
            || 'Component'})`;
    return (
        <ContextConsumer>
            {
                (state) => {
                    console.log(state);
                    return (
                        <ConnectFun {...state} {...props} />
                    );
                }
            }
        </ContextConsumer>
    );
};

const createProvider = (ContextProvider, store) => (WrappedComponent) => {
    class Provider extends PureComponent {
        constructor(props) {
            super(props);
            console.log('saaa');
            this.state = {
                ...store,
                setStore: this.setStore,
            };
        }

        setStore = (state, callback) => {
            this.setState(state, callback);
        }

        render() {
            console.log(ContextProvider);
            console.log(this.state);
            return (
                <ContextProvider value={this.state}>
                    <WrappedComponent {...this.props} {...this.state} />
                </ContextProvider>
            );
        }
    }
    Provider.displayName = `Provider${WrappedComponent.displayName || WrappedComponent.name || 'component'}`;
    return Provider;
};


const createStore = (store) => {
    const context = createContext();
    const Provider = createProvider(context.Provider, store);
    const Connect = createConnect(context.Consumer);
    return {
        Provider,
        Connect,
        Consumer: context.Consumer
    };
};

export default createStore;
