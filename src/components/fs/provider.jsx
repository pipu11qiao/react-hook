import React, { PureComponent } from 'react';

const createProvider = (ContextProvider, store) => (WrappedComponent) => {
    class Provider extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                ...store,
                setStore: this.setStore,
            };
        }

            setStore = (state, callback) => {
                this.setState(state, callback);
            }

            render() {
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

export default createProvider;
