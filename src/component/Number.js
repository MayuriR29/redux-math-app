import React, {Component } from 'react';
import {Button} from 'react-bootstrap';
export default class Number extends Component{
    render(){
        return(
            <div>
                <div className="row-5 col-sm-offset-5">0</div>
                <div className="row-8 col-sm-offset-5">
                    <Button variant="outline-primary">Increment
                    </Button>
                </div>
                <div>
                    <Button variant="outline-primary">Decrement
                    </Button>
                </div>
                
            </div>
        )
    }
};
