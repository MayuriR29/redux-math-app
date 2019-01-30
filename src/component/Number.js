import React, {Component } from 'react';
import {Button} from 'react-bootstrap';

import {connect} from 'react-redux';
// import{bindActionCreators} from 'redux';

import{incrementNumber,decrementNumber} from '../actions';

  class Number extends Component{
    render(){
        console.log("in render",this.props)
        return(
            <div>
                <div className="row-5 col-sm-offset-5">{this.props.num}</div>
                <div className="row-2 col-sm-offset-4">
                    <Button variant="outline-primary" onClick={()=>this.props.incrementNumber(this.props.num)}>Increment
                    </Button>
                    <Button variant="outline-primary" className="col-sm-offset-1" onClick={()=>this.props.decrementNumber(this.props.num)}>Decrement
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
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({incrementNumber,decrementNumber},dispatch)
// }

export default connect(mapStateToProps,{incrementNumber,decrementNumber})(Number);
//mapStateToProps -> used to connect the properties of state to component via props
//mapDispatchToProps -> used to connect the functions(actions) of state to component via props
//bindActionCreators ->bind actions together