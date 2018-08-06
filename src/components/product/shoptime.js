import React, {Component} from 'react';

// Class Components (ใช้ this.props ไม่ใช่ props เฉยๆ)
class Shoptime extends Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()}
        
        console.log("constructor");
    }
    componentDidMount(){
        this.timerTest = setInterval(() => this.tick(), 1000);
    }
    componentDidUpdate(){
        //ปล่อยว่างๆ
    }
    componentWillUnmount(){
        clearInterval(this.timerTest);
    }
    tick(){
        this.setState({date:new Date()});
    }
    render(){
        return(
            <div> {this.state.date.toLocaleTimeString()} </div>
        )
    }
}

export default Shoptime;
