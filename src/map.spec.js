const map = require('./map');

describe('Cube',()=>{
    it('Map of [1,2,3] and cube is [1,8,27]', () => {
        expect(map([1,2,3],'cube')).toEqual([1,8,27]);
    });

    it('Map of [] and cube is []',()=>{
        expect(map([],'cube')).toEqual([]);
    });
});

describe('Identity',()=>{
    it('Map of [1,2,3] and identity is [1,2,3]',()=>{
        expect(map([1,2,3],'identity')).toEqual([1,2,3]);
    });
});