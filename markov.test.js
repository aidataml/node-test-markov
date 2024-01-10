const MarkovMachine = require("./markov"); 

const mm = new MarkovMachine("the cat in the hat");
console.log(mm.makeText());

describe('make markov machine', function () {
    test('makes chains', function () {
      let mm = new MarkovMachine("xx YY cc xx YY xx YY");
  
      expect(mm.chains).toEqual(new Map([
        ["xx", ["YY", "YY", "YY"]],
        ["YY", ["cc", "xx", null]],
        ["cc", ["xx"]]]));
    });
  
    test('choice picks from array', function () {
      expect(MarkovMachine.choice([1, 1, 1])).toEqual(1);
      expect([1, 2, 3]).toContain(MarkovMachine.choice([1, 2, 3]));
    });

  });