import React, {Component } from 'react';
import {Button} from 'react-bootstrap';

import {connect} from 'react-redux';
import{bindActionCreators} from 'redux';

import{incrementNumber,decrementNumber} from '../actions';

  class Number extends Component{
    render(){
        console.log("in render",this.props)
        return(
            <div>
                <div className="row-5 col-sm-offset-5">{this.props.num}</div>
                <div className="row-8 col-sm-offset-5">
                    <Button variant="outline-primary" onClick={()=>this.props.incrementNumber(this.props.num)}>Increment
                    </Button>
                </div>
                <div>
                    <Button variant="outline-primary" onClick={()=>this.props.decrementNumber(this.props.num)}>Decrement
                    </Button>
                </div>
                
            </div>
        )
    }
};

function mapStateToProps(state){
    console.log("in Number.js",state);
    return{
        num:state.num
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({incrementNumber,decrementNumber},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Number);