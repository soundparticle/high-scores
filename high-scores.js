/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
class HighScores {
  constructor(input) {
    let highestInput = 0;
    const personalBest = [];

    this.scores = personalBest;
    this.input = input;
    this.latest = input[input.length - 1];

    for (let i = 0; i < input.length; i++) {
      highestInput = input[i] > highestInput ? highestInput = input[i]
        : highestInput;
      personalBest.push(input[i]);
    }
    this.highest = highestInput;

    const top = input.sort((a, b) => b - a).slice(0, 3);
    this.top = top;

    const bestMessage = `Your latest score was ${highestInput}. That's your personal best!`;
    this.report = bestMessage;

    console.log('****** console *****', bestMessage);
  }
}

module.exports = {
  HighScores,
};
