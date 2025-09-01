const pattern = /\b(repetition)+\b/g;

const text = `repetition is a literary device where words or phrases repeat for emphasis. There are several different types of repetition. For instance, alliteration is the repetition of a consonant sound. `;

for (const match of text.matchAll(pattern)) {
  console.log(match);
}