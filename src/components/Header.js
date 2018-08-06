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
            <div className="container-fluid"> 
                <div className="row">
                    <div className="text-left col-md-8">
                        
                        <h3 className="text-success mt-2"><img src="images/logo/logo.png" width="40" alt="" /> เฮลตี้ คาเฟ่ </h3>
                        
                    </div>
                    <div className="text-right col-md-4 mt-2"> {this.state.date.toLocaleTimeString()} </div>
                </div>                               
            </div>
        )
    }
}

export default Shoptime;
