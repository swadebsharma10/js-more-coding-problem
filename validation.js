// handle Error

function add ( num1, num2){
    if(typeof num1 !== 'number'|| typeof num2 !== 'number'){
        return 'Please Enter a number'
    }
    return num1+ num2
}
const result = add ( 24, '26');
console.log(result);