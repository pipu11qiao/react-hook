import React from 'react';
import { NavLink } from "react-router-dom";
import { splitCamel } from 'components/util';
import './style.scss';
/**
 * navArr[{path: 'a/b/c',name:'aaa'}]
 */

export default function NavBox(props) {
    return (
        <ul className="route-nav-list">
            {
                props.navList.map((link,index)=> {
                    let name = link.name;
                    if(!name){
                        const linkArr = link.path.split(/[\\/]/);
                        name = splitCamel(linkArr[linkArr.length - 1]).join(' ');
                    }

                    return (
                        <li key={`nav-item-${index}`}>
                            <NavLink to={link.path} activeClassName="active-route-link" >{name}</NavLink>
                        </li>
                    );
                })
            }
        </ul>
    );
};
