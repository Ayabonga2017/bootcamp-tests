
describe('yearsAgo function  returns how many years ago that was', function(){

    it('should return 18 years ago for the year 2000', function(){
        assert.equal(yearsAgo('2000'),'18');
    });
    it('should return 42 years ago for the year 1976', function(){

        assert.equal(yearsAgo('1976'),'42');
    });
})
