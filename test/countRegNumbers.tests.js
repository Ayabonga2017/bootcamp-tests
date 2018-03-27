
describe('displayEachRegNumber function', function(){

    it('should display each registration number in the list on a new line', function(){
        assert.equal(countRegNumbers('CJ, CL, CY, CA'),true);
    });
    it('should fail to display each registration number in the list on a new line', function(){

        assert.equal(countRegNumbers('CA 345 673,'),false);
    });
});
