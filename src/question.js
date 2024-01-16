class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }
  shuffleChoices() {
    const shuffled = [];
    while (this.choices.length) {
      const random = Math.floor(Math.random() * this.choices.length);
      shuffled.push(this.choices.splice(random, 1)[0]);
    }
    this.choices = shuffled;
  }
}

// const choices = [1, 2, 3, 4];
// const shuffled = [];

// for (let i = 0; i < choices.length; i++) {
//   const random = Math.floor(Math.random() * choices.length);
//   shuffled.push(choices.splice(random, 1)[0]);
//   i--;
// }

// for (let i = choices.length - 1; i >= 0; i--) {
//   const random = Math.floor(Math.random() * choices.length);
//   shuffled.push(choices.splice(random, 1)[0]);
// }

// while (choices.length) {
//   const random = Math.floor(Math.random() * choices.length);
//   shuffled.push(choices.splice(random, 1)[0]);
// }

// const newChoices = choices
//   .map((e) => ({ e, random: Math.random() }))
//   .sort((a, b) => a.random - b.random)
//   .map(({ e }) => e);
// console.log(newChoices);

// console.log(choices, shuffled);

// [1,2,3,4]
// [3,4,2,1]

const originalArr = [1, 2, 3, 4];
const shuffled = [];

// option 1
// for (let i = 0; i < originalArr.length; i++) {
//   const random = Math.floor(Math.random() * originalArr.length);
//   shuffled.push(originalArr.splice(random, 1)[0]);
//   i--;
// }

// option 2
// for (let i = originalArr.length - 1; i >= 0; i--) {
//   const random = Math.floor(Math.random() * originalArr.length);
//   shuffled.push(originalArr.splice(random, 1)[0]);
// }

// option 3
// while (originalArr.length) {
//   const random = Math.floor(Math.random() * originalArr.length);
//   shuffled.push(originalArr.splice(random, 1)[0]);
// }
// console.log(originalArr);
// console.log(shuffled);

// option 4
// const newShuffled = originalArr
//   .map((e) => ({ e, random: Math.random() }))
//   .sort((a, b) => a.random - b.random)
//   .map(({ e }) => e);
// console.log(JSON.stringify(newShuffled));
