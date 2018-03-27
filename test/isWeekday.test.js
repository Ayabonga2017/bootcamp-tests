describe('isWeekday function', function(){

    it('returns week if the day is a Weekday.', function(){
      assert.equal(weekOrWeekend('Wednesday'), 'week');
    });
    it('returns weekend if the day is a Weekend.', function(){

        assert.equal(weekOrWeekend('Sunday'), 'weekend');
    });
});
