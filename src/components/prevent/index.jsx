// 创建一个劫持的装饰器

import React from 'react';
// const Prevent= (props) => {
// const {renderComponent,...other} = props;
// return renderComponent(other);
// };

const createPrevent = (externalProps)=>{
    return (WrappedComponent) => (props)=> <WrappedComponent {...props} {...externalProps} />;
};

export default createPrevent;
