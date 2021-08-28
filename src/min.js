const min = (array) =>{
    if(array.length == 0) return null;
    return Math.min(...array);
}

module.exports = min