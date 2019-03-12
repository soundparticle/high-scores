class HighScores {
  constructor(input) {
    this.input = input;
    this.scores = input;
    this.latest = input[input.length - 1];
    console.log('****** this.input *****', this.latest);
  }
}

module.exports = {
  HighScores,
};
