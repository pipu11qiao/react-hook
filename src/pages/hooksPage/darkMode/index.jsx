import React,{Component} from 'react';


export default class Page extends Component{
    componentDidMount() {
        const btn = document.querySelector('.test-btn');
        console.log(btn);
        btn.addEventListener('click',function () {
            const  imgs = document.getElementsByTagName('img');
            try{

                for(let i = 0; i < imgs.length.length.length; i++){
                    console.log(i);
                }
            }catch (e) {
                console.log(e);
            }
        },false);
    }

    render() {
        return (
            <div>
                dark mode
                <div>
                    <button className="test-btn">btn</button>
                </div>
            </div>
        );
    }
}