/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
class HighScores {
  constructor(input) {
    this.scores = input;
    this.input = input;
    this.latest = input[input.length - 1];

    let highestInput = 0;
    for (let i = 0; i < input.length; i++) {
      highestInput = input[i] > highestInput ? highestInput = input[i]
        : highestInput;
    }

    const bests = input;
    console.log('****** this.highest *****', input);
    this.highest = highestInput;
    this.top = bests;
    // top = this.input.sort((a, b) => b - a);
  }
}

module.exports = {
  HighScores,
};
