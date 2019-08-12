import React, { Component } from 'react';
import withPortal from '../withPortal';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
console.log(withPortal);
const ModalContent = () => (<div>amodal content</div>);


class Modal extends Component {
    render() {
        return (
            <div>
                <ModalContent />
            </div>
        );
    }
}

export default withPortal(Modal);
