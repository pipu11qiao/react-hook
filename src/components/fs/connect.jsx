import React from 'react';

const createConnect = (ContextConsumer) => (WrappedComponent) => {
    const ConnectFun = (props) => <WrappedComponent {...props} />;
    ConnectFun.displayName = `Connect${WrappedComponent.displayName || WrappedComponent.name || 'component'}`;

    return (props) => (
        <ContextConsumer>
            {
                (state) => <ConnectFun {...props} {...state} />
            }
        </ContextConsumer>
    );
};
export default createConnect;
