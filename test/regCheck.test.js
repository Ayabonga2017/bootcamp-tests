describe('regCheck function', function(){

    it('should return registration Code', function(){
        assert.equal(regCheck('CY123'),false);
    });
    it('should not return registration Code', function(){

        assert.equal(regCheck('CCZTYTRX'),false);
    });
});
