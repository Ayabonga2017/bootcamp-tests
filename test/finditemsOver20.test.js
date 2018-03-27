describe('The findItemOver20 function' , function(){
    it('It should return items that are over 20 .', function(){
    assert.equal(findItemsOver20(
    [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
    ],20)[{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}]);
    });
    it('should Return items that are over 10 ', function(){
      assert.equal(findItemsOver20(
      [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 7},
          {name : 'bananas', qty : 17},
          {name : 'apples', qty : 8}
      ],10)[{name : 'bananas', qty : 17}]);
    });
  });
