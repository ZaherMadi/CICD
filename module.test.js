const { calculateAge } = require('./module');


/**
 * @function calculateAge
 * 
 */

describe('calculateAge Unit Test Suites', () => { 
    it('should return a correct age', () => {
        const loise = {
            birth: new Date("11/07/1991")
        };
        expect(calculateAge(loise)).toEqual(33)
    })

})