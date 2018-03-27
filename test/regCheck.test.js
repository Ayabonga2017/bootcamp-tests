describe('regCheck function', function(){

    it('should return registration Code', function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });
    it('should not return registration Code', function(){

        assert.equal(regCheck('DV 23 LP GP', 'MP'),false);
    });
});
