const max = (array) =>{
    if(array.length == 0) return null;
    return Math.max(...array);
}

module.exports = max