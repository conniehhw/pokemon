export default [
  {
    title: "So, you want to train Pokemon?",
    getWord: function (key) {
      return this.words.find((word) => {
        return word.key === key;
      }).value;
    },

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
        )} (verb ending in -ing) it, but the best way to gain a Pokemons trust is to ${this.getWord(
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
];
