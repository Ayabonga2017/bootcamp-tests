describe('fromWhere function', function(){

  it('returns Paarl if a registration number starts with CJ otherwise returns some place.', function(){
      assert.equal(fromWhere('CJ 583'),'Paarl');
  });

    it('returns Cape Town if a registration number starts with CA otherwise returns some place.', function(){
        assert.equal(fromWhere('CA 464'),'Cape Town');
    });
    it('returns Bellville if a registration number starts with CY otherwise returns some place.', function(){
        assert.equal(fromWhere('CY 1098'),'Bellville');
    });
    it('returns some other place if the registration number doesnt start with CA,CJ or CY.', function(){
        assert.equal(fromWhere('Some other place!'),'Some other place!');
    });
});
