describe('isFromBellvile function', function(){

    it('returns true if a registration number is for Bellville otherwise returns false.', function(){
        assert.equal(isFromBellville('CY123'),true);
    });
    it('returns false because this registration number is not from Bellville.', function(){

        assert.equal(isFromBellville('CJ123'),false);
    });
});
