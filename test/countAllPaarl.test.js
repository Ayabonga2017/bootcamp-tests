
describe('countAllPaarl function', function(){

    it('should return all registration numbers from Paarl', function(){
        assert.equal(countAllPaarl('CJ 345 123', 'CJ 2345', 'CL 123-546', 'CK 345,'),1)
    });
    it('should not return registration numbers from Paarl', function(){

        assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123') ,2);
    });
});
