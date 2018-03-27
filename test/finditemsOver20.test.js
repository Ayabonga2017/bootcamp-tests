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
    it('should Return items that are over 20 ', function(){
      assert.equal(findItemsOver20(
      [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 127},
          {name : 'bananas', qty : 97},
          {name : 'apples', qty : 81},
          {name : 'lemon', qty : 11},
      ],20)[{name : 'pears', qty : 127},
      {name : 'bananas', qty : 97},
      {name : 'apples', qty : 81}]);
    });
  });

