describe('fromWhere function', function(){

    it('returns Paarl if a registration number starts with CJ otherwise returns some place.', function(){
        assert.equal(fromWhere('CJ'),'Paarl');
    });

    it('returns Cape Town if a registration number starts with CA otherwise returns some place.', function(){
        assert.equal(fromWhere('CA'),'Cape Town');
    });

    it('returns some other place if the registration number doesnt start with CA,CJ or CY.', function(){
        assert.equal(fromWhere('Some other place!'),'Some other place!');
    });
});
