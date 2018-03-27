describe('The findItemOver function' , function(){

    it('should find and return Items that are over 7 ', function(){
      assert.equal(findItemsOver(
      [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 7},
          {name : 'bananas', qty : 17},
          {name : 'apples', qty : 8}
      ],7)[{name : 'apples', qty : 10},
      {name : 'bananas', qty : 17},
      {name : 'apples', qty : 8}]);
    });
    it('should find and return Items that are over 8 ', function(){
      assert.equal(findItemsOver(
      [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 7},
          {name : 'bananas', qty : 17},
          {name : 'apples', qty : 8}
      ],8)[{name : 'apples', qty : 10},
      {name : 'bananas', qty : 17}]);
    });


  });
