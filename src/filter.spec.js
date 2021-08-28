const filter = require('./filter');

describe('Filter',()=>{

    it('Filter of [] and x => true is []', () => {
        expect(filter([],x => true)).toEqual([]);
    });

    it('Filter of [1,2,3] and x => true is [1,2,3]', () => {
        expect(filter([1,2,3],x => true)).toEqual([1,2,3]);
    });

    it('Filter of [1,2,3] and x => false is []', () => {
        expect(filter([1,2,3],x => false)).toEqual([]);
    });

    it('Filter of [1,2,3] and x => x>1 is [2,3]', () => {
        expect(filter([1,2,3],x => x > 1)).toEqual([2,3]);
    });

    it('Filter of [a,B,C,d] and toUpperCase is [B,C]',()=>{
        expect(filter(['a','B','C','d'], x=> x == x.toUpperCase())).toEqual(['B','C']);
    });
    
    
});