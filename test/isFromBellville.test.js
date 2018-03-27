describe('isFromBellvile function', function(){

    it('returns true if a registration number is for Bellville otherwise returns false.', function(){
        assert.equal(isFromBellville('CY123'),true);
    });
    it('returns false if a registration number is for Bellville otherwise returns false.', function(){

        assert.equal(isFromBellville('CJ123'),false);
    });
});
