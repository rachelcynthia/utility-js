const min = require('./min');

describe('min', () => {

    it('Min of [1,2,3,4] is 1', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });

    it('Min of [] is null', () => {
        expect(min([])).toEqual(null);
    });

});
