/** Textual markov chain generator */


class MarkovMachine {

  static choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = new Map();
  
    this.words.forEach((word, i) => {
      let followingWord = this.words[i + 1] || null;
  
      if (!chains.has(word)) {
        chains.set(word, []);
      }
  
      chains.get(word).push(followingWord);
    });
  
    this.chains = chains;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = [...this.chains.keys()];
    let key = MarkovMachine.choice(keys);
    let result = [];
  
    while (result.length < numWords && key) {
      result.push(key);
      let followingWords = this.chains.get(key) || [];
      key = MarkovMachine.choice(followingWords);
    }
  
    return result.join(" ");
  }

  
  
}

module.exports = MarkovMachine;

// let mm = new MarkovMachine("the cat in the hat");
// console.log(mm.makeText());
// console.log(mm.makeText(numWords=50));