/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
class HighScores {
  constructor(input) {
    let highestInput = 0;
    const personalBest = [];
    let lastInput = 0;
    let highestDiff = 0;

    this.scores = personalBest;
    this.input = input;
    this.latest = input[input.length - 1];

    for (let i = 0; i < input.length; i++) {
      highestInput = input[i] > highestInput ? highestInput = input[i]
        : highestInput;
      personalBest.push(input[i]);
      lastInput = personalBest[personalBest.length - 1];
      highestDiff = highestInput - lastInput;
    }
    this.highest = highestInput;

    const top = input.sort((a, b) => b - a).slice(0, 3);
    this.top = top;

    const bestMessage = `Your latest score was ${highestInput}. That's your personal best!`;
    const diffMessage = `Your latest score was ${lastInput}. That's ${highestDiff} short of your personal best!`;
    this.report = lastInput === highestInput ? bestMessage
      : diffMessage;

    console.log('****** personalBest *****', personalBest);
    console.log('****** highestInput *****', highestInput);
    console.log('****** highestDiff *****', highestDiff);
    console.log('****** diff MSG *****', diffMessage);
  }
}

module.exports = {
  HighScores,
};
