describe('transportFee function', function(){

    it('should return R20 for my morningFee', function(){
      assert.equal(transportFee("morning"),"R20")
    });
    it('should return R10 for my afternoonFee', function(){
      assert.equal(transportFee("afternoon"),"R10")
    });
    it('should return free for my nightshiftFee', function(){
    assert.equal(transportFee("nightshift"),"free")
    });
});
