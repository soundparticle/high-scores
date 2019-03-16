/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
class HighScores {
  constructor(input) {
    let highestInput = 0;
    const scoresInput = [];

    this.scores = scoresInput;
    this.input = input;
    this.latest = input[input.length - 1];

    for (let i = 0; i < input.length; i++) {
      highestInput = input[i] > highestInput ? highestInput = input[i]
        : highestInput;
      scoresInput.push(input[i]);
    }

    console.log('****** console *****', scoresInput);
    this.highest = highestInput;
    this.top = input.sort((a, b) => b - a);
  }
}

module.exports = {
  HighScores,
};
