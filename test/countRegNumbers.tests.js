describe('displayEachRegNumber function', function(){

    it('should display each registration number in the list on a new line', function(){

        assert.equal(countRegNumbers("CA 345 673, CJ 2535, CL 37437,CL 447"),1);
    });
    it('should return Paarl to display on a new line', function(){

        assert.equal(countRegNumbers('CJ 345 673, CJ 2535, CJ 37437,CL 447'),3);
    });
});

