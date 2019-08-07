import React, { PureComponent } from 'react';

const createProvider = (ContextProvider, store) => (WrappedComponent) => {
    class ProviderState extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                ...store,
                setStore: this.setStore
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
    ProviderState.displayName = `Provider${WrappedComponent.displayName || WrappedComponent.name || 'component'}`;
    return ProviderState;
};

export default createProvider;
