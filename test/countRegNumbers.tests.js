describe('displayEachRegNumber function', function(){

    it('should return 1 Paarl registration number in the list on a new line', function(){

        assert.equal(countRegNumbers("CA 345 673, CJ 2535, CL 37437,CL 447"),1);
    });
    it('should return 3 Paarl registration number in the list on a new line', function(){

        assert.equal(countRegNumbers('CJ 345 673, CJ 2535, CJ 37437,CL 447'),3);
    });
});

