const reduce = (array,previousValue, initialValue = undefined) =>{
    if(initialValue == undefined) {
        if(array.length == 0){
            return undefined;
        }
        else{
            return array.reduce(previousValue);
        }
    }
    return array.reduce(previousValue,initialValue);
}
module.exports = reduce;