
describe('isFromCapeTown function', function(){

    it('should return registration that isFromCapeTown', function(){
        assert.equal(isFromCapeTown('CA 123 908'),true);
    });
    it('should not return registration that is not FromCapeTown', function(){

        assert.equal(isFromCapeTown('CJ 123 908'),false);
    });
});
