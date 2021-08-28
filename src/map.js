const cube = (number) =>{
    return Math.pow(number,3);
};

const identity = (number) =>{
    return number;
}

const map = (array,fn) =>{
    return array.map(eval(fn));
};

module.exports = map;

