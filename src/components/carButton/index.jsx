/*eslint-disable*/
import React,{useState,useEffect} from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';

// import './style.scss';

/** This is an awesome looking button for React.  */

const CarButton = function (props){
    let isControl = false; // 是否受控
    if(typeof props.num !== 'undefined'){
        isControl = true;
    }
    // console.log(props.num ,typeof props.num !== 'undefined');
    const [value,setValue] = useState(typeof props.num !== 'undefined' ? props.num :  0);
    useEffect(()=>{
        if(typeof props.num !== 'undefined' && !isControl){
            isControl = true;
        }
        if(isControl){
            if(value !== props.num){
                setValue(props.num);
            }
        }
    },[props.num]);
    function btnClick(num){
        const newValue = value + num;
        if(newValue >= 0 ){
            if(!isControl){
                setValue(value + num);
            }
            props.onChange(newValue);
        }
    }
    // console.log(value);
    return (
        <div className="car-btn-box">
            <button onClick={()=>{btnClick(1)}}>+</button>
            <span>{value}</span>
            <button onClick={()=>{btnClick(-1)}}>-</button>
        </div>
    );
};
CarButton.defauttProps = {
    onChange(){}
};
CarButton.propTypes = {
    /** sizeadfdfasf */
    size: PropTypes.string,
    /** sizeadfdfasf */
    index: PropTypes.number,
    buttons: PropTypes.array,
    onBtnClick: PropTypes.func,

    /** a func */
    onChange:PropTypes.func
}
export default CarButton;
