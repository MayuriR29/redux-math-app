export const INC_NUMBER="INC_NUMBER";
export const DEC_NUMBER="DEC_NUMBER";

export const incrementNumber=(num)=>{
const action={
    type:INC_NUMBER,
    num
}
return action;
}
export const decrementNumber=(num)=>{
    const action={
        type:DEC_NUMBER,
        num
    }
 return action;
}