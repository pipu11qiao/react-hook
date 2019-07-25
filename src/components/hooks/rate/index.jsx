import React, {useState} from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

import './style.scss'


export default function Rate(props) {
    const {
        defaultCount,
        defaultValue,
        character,
        allowHalf,
        onChange,
        allowClear,
    } = props;
    const list = [];
    for (let i = 0; i < defaultCount; i++) {
        list.push({});
    }
    const [startList] = useState(list);
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [starIndex, setStarIndex] = useState(defaultValue >= 0 ? defaultValue : -1);

    function onClickStartIndex(index) {
        let setIndex;
        if (index !== starIndex) {
            setIndex = index;
        }else{
            if(allowClear){
                setIndex = -1;
            }
        }
        onChange(setIndex);
        setStarIndex(setIndex);
    }

    function onHoverIndex(index) {
        if (index !== hoverIndex) {
            setHoverIndex(index)
        }
    }

    return (
        <ul
            className="rate-star-list"
            onMouseLeave={() => {
                setHoverIndex(-1)
            }}
        >
            {
                startList.map((item, i) => {
                    let activeClass;
                    if (hoverIndex > -1) {
                        if (i <= hoverIndex) {
                            activeClass = i + 1 > hoverIndex && `${hoverIndex}`.indexOf('.') > -1 ? 'rate-star-half' : 'rate-star-full';
                        }
                    } else if (starIndex > -1) {
                        if (i <= starIndex) {
                            activeClass = i + 1 > starIndex && `${starIndex}`.indexOf('.') > -1 ? 'rate-star-half' : 'rate-star-full';
                        }
                    }
                    return (
                        <li
                            className={classnames(['rate-star-item', activeClass])}
                            key={`start-${i}`}
                        >
                            <div>
                                <div
                                    className="rate-star-first"
                                    onMouseEnter={() => {
                                        onHoverIndex(allowHalf ? i + 0.5 : i)
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onClickStartIndex(allowHalf ? i + 0.5 : i);
                                    }}
                                >{character}</div>
                                <div
                                    className="rate-star-second"
                                    onMouseEnter={() => {
                                        onHoverIndex(i)
                                    }}
                                    onClick={() => {
                                        onClickStartIndex(i)
                                    }}
                                >{character}</div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )

};

Rate.defaultProps = {
    allowClear: false,
    allowHalf: false,
    disabled: false,
    character: 'A',
    defaultCount: 5,
    defaultValue: -1,
    onChange: function () {},
};
Rate.propTypes = {
    allowClear: propTypes.bool,
    allowHalf: propTypes.bool,
    disabled: propTypes.bool,
    character: propTypes.any,
    defaultCount: propTypes.number,
    defaultValue: propTypes.number,
    onChange: propTypes.func,
};
