import {INC_NUMBER} from "../actions/index";
import {DEC_NUMBER} from "../actions/index";

export default function performAction(state={num:0},action){
    switch(action.type){
        case INC_NUMBER:console.log('action performed from the reducer');
            console.log(state,action);
            state={num:state.num+1}
            return state;

        case DEC_NUMBER:
            state={num:state.num-1};
            return state;
        default:
            return state;
       
    }
};

