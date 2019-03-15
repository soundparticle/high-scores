/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
class HighScores {
  constructor(input) {
    this.input = input;
    this.scores = input;
    this.latest = input[input.length - 1];

    let highestInput = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] > highestInput) {
        highestInput = input[i];
      }
    }
    this.highest = highestInput;
    console.log('****** this.highest *****', highestInput);
  }
}

module.exports = {
  HighScores,
};
