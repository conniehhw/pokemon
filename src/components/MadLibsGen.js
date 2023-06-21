export default [
  {
    title: "So, you want to train Pokemon?",
    getWord: function (key) {
      return this.words.find((word) => {
        return word.key === key;
      }).value;
    },

    // where are the words stored?
    getText: function () {
      return `So, you want to ${this.getWord(
        "verb_1"
      )} Pokemon, huh? Well, it is not as ${this.getWord(
        "adjective_1"
      )} as it seems. 
        First off, you will need to find them. You can catch Pokemon in the wild or in (the) ${this.getWord(
          "place_1"
        )}. 
        Once you have a Charizard or a Blastoise, you will need to gain its trust. That is not always easy. You can try feeding it or 
        ${this.getWord(
          "verb_2"
        )} it, but the best way to gain a Pokemons trust is to ${this.getWord(
        "verb_3"
      )} with it.`;
    },

    words: [
      {
        key: "verb_1",
        label: "Verb 1",
      },
      {
        key: "adjective_1",
        label: "Adjective 1",
      },
      {
        key: "place_1",
        label: "Place 1",
      },
      {
        key: "verb_2",
        label: "Verb 2",
      },
      {
        key: "verb_3",
        label: "Verb 3",
      },
    ],
  },
  {
    title: "Ash's Pikachu!",
    getWord: function (key) {
      return this.words.find((word) => {
        return word.key === key;
      }).value;
    },

    // where are the words stored?

    getText: function () {
      return `I am sure you have heard of Pikachu, Ashs ${this.getWord(
        "adjective_1"
      )} Pokemon. 
      Like most Pikachu, it has a plump ${this.getWord(
        "adjective_2"
      )} body with a red ${this.getWord("noun_1")} on 
      each cheek. It has ${this.getWord(
        "colour_1"
      )} tips on its ears and ${this.getWord("number_1")} stripes on its 
      ${this.getWord(
        "part of body_1"
      )}. Ashs Pikachu may have evolved from a/an ${this.getWord(
        "adjective_3"
      )} Pichu, 
      and coulid evolve (if it wanted) into a Raichu, which is quite like a/ an ${this.getWord(
        "sillyword_1"
      )}.`;
    },

    words: [
      {
        key: "adjective_1",
        label: "Adjective 1",
      },
      {
        key: "adjective_2",
        label: "Adjective 2",
      },
      {
        key: "noun_1",
        label: "Noun 1",
      },
      {
        key: "colour_1",
        label: "colour",
      },
      {
        key: "number_1",
        label: "number 1",
      },
      {
        key: "part of body_1",
        label: "part of body 1",
      },
      {
        key: "adjective_3",
        label: "Adjective 3",
      },
      {
        key: "sillyword_1",
        label: "sillyword 1",
      },
    ],
  },
  {
    title: "Story 3",
    getWord: function (key) {
      return this.words.find((word) => {
        return word.key === key;
      }).value;
    },
    getText: function () {
      return `Testing ${this.getWord("verb_1")} Testing ${this.getWord(
        "adjective_1"
      )} Testing. `;
    },

    words: [
      {
        key: "verb_1",
        label: "Verb 1",
      },
      {
        key: "adjective_1",
        label: "Adjective 1",
      },
    ],
  },
];
