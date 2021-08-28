const reduce = require('./reduce');

describe('Reduce',()=>{

    it('Reduce of [] and (x,y)=>x+y is undefined', () => {
        expect(reduce([],(x,y)=>x+y)).toEqual(undefined);
    });

    it('reduce of [] and (x,y)=>x+y,10 is 10', () => {
        expect(reduce([],(x,y)=>x+y,10)).toEqual(10);
    });

    it('reduce of [1,2,3] and (x,y)=>x+y,10 is 10', () => {
        expect(reduce([1,2,3],(x,y)=>x+y,10)).toEqual(16);
    });

    it('reduce of [a,b,c] and (x,y)=>x+y) is abc', () => {
        expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual('abc');
    });

    it('reduce of [a,b,c] and (x,y)=>x+y,z is zabc', () => {
        expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc');
    });
    
    
});