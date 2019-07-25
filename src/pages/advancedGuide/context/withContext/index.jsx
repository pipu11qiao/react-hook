
import React,{Component,createContext} from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
import Button from '../components/btnWithTheme';
const ThemeContext = createContext('light');

class Box extends Component {
    render (){
        return (
            <ThemeContext.Provider value="kkk">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
};
// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends Component {
    static contextType=ThemeContext;
    render () {
        return (
            <Button theme={this.context} />
        );

    }
}

export default Box;
