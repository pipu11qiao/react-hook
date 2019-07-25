import React, {Component,createContext} from 'react';

const TextContext = createContext('aaa'); // set defautl value of context

export default class Base extends Component {
    render (){
        return (
            <TextContext.Provider value='base text'>
                <Box />
            </TextContext.Provider>
        );
    }
};

function Box (props){
    return (
        <div>
            <TextButtonBox />
        </div>
    );
}
class TextButtonBox extends Component {
    render(){
        return(
            <div>
                <TextContext.Consumer>
                    {value => <TextButton text={value}/>}
                </TextContext.Consumer>
            </div>
        );
    }
}
function TextButton (props) {
    return (<div>{props.text}</div>);
}
