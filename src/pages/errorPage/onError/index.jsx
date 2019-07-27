import React, { Component } from 'react';


export default class Page extends Component {
    componentDidMount() {
        const btn = document.querySelector('.test-btn');
        console.log(btn);
        btn.addEventListener('click', function () {
            const imgs = document.getElementsByTagName('img');

            for (let i = 0; i < imgs.length.length.length; i++) {
                console.log(i);
            }
        }, false);
        window.onerror = function (msg, url, line, col, error) {
            console.log(msg);
            console.log(url);
            console.log(line);
            console.log(col);
            console.log(error);
        };
    }

    render() {
        return (
            <div>
                on error page
                <div>
                    <button type="button" className="test-btn">btn</button>
                </div>
            </div>
        );
    }
}
