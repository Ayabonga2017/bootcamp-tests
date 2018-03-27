
describe('displayEachRegNumber function', function(){

    it('should displays each registration number in the list on a new line', function(){
        assert.equal(countRegNumbers('CJ, CL, CY'),true);
    });
    it('should fail to displays each registration number in the list on a new line', function(){

        assert.equal(countRegNumbers('CA 345 673,'),false);
    });
});
