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
      )} with it. Once you and your Pokemon are best ${"plural-noun_1"}, start training. You can
      do this with a friend or even with ${"noun_1"} at a/an ${"adjective_1"} Gym nearby. Think
      of it like training a/an ${"noun_2"}! Only when you've trained enough should you challenge
      another ${"noun_3"} for real. After all that work, it would be ${"adjective_2"} for someone
      // to come along and take your ${"noun_4"} away!`;
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
        label: "Place",
      },
      {
        key: "verb_2",
        label: "Verb ending with -ing",
      },
      {
        key: "verb_3",
        label: "Verb 3",
      },
      {
        key: "plural-noun_1",
        label: "Plural noun 1",
      },
      {
        key: "noun_1",
        label: "Celebrity",
      },
      {
        key: "adjective_2",
        label: "Adjective 2",
      },
      {
        key: "noun_2",
        label: "Noun 2",
      },
      {
        key: "noun_3",
        label: "Occupation / Job",
      },
      {
        key: "adjective_3",
        label: "Adjective 3",
      },
      {
        key: "noun_4",
        label: "Noun 4",
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
      )}. But Ash's Pikachu likes itself just as it is. Professor ${"noun_2"} gave Pikachu to Ash
      when he was ten, and they've been best ${"plural-noun_1"} ever since. Even though Pikachu
      is very cute, it can also ${"verb_1"} really well. Using the power of electricity, Pikachu can 
      do all sorts of ${"plural-noun 2"} to defeat other Pokemon in battle. Some of its ${"adjective_4"}
      moves include Thunder Shock, Iron Tail, and ${"verb_2"}! So, Rockruff, Bounsweet, or ${"noun_3"}: 
      You had better watch out. Pikachu is here! Pika-pika!`;
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
      {
        key: "noun_2",
        label: "Person in the Room",
      },
      {
        key: "plural-noun_1",
        label: "Plural Noun",
      },
      {
        key: "verb_1",
        label: "Verb",
      },
      {
        key: "plural-noun_2",
        label: "Plural Noun",
      },
      {
        key: "adjective_4",
        label: "Adjective",
      },
      {
        key: "verb_2",
        label: "Verb",
      },
      {
        key: "noun_3",
        label: "Person in the Room",
      },
    ],
  },
  {
    title: "My Perfect Pokemon Battle",
    getWord: function (key) {
      return this.words.find((word) => {
        return word.key === key;
      }).value;
    },
    getText: function () {
      return `The ${this.getWord(
        "adjective_1"
      )} seats are full. The crowd is ${this.getWord(
        "verb_1"
      )} loudly. I have a/an ${this.getWord(
        "noun_1"
      )} in my hand. And I'm ready to
        watch the most ${this.getWord(
          "adjective_2"
        )} Pokemon battle of all time! In my perfect
        battle, Ash would let Pikachu ${this.getWord(
          "verb_2"
        )} the charge, while 
        ${this.getWord(
          "noun_2"
        )} would be using Turtonator. Turtonator would start by 
        ${this.getWord(
          "verb_3"
        )} fire from its nostrils, but Pikachu is way too ${this.getWord(
        "adjective_3"
      )}!
        Pikachu would dodge to the left and ${this.getWord(
          "verb_4"
        )} to the right! 
        Then Pikachu would blast Turtonator with Static, making Turtonator feel like 
        a limp ${this.getWord("noun_3")}. Watch out! Next, Pikachu goes on a/an 
        ${this.getWord(
          "adjective_4"
        )} attack. Pikachu would slowly ${this.getWord("adverb_1")} 
        use Thunder Shock to ${this.getWord(
          "verb_5"
        )} Turtonator, and Turtonator would 
        fall to the ${this.getWord("noun_4")} . The crowd would ${this.getWord(
        "verb_6"
      )} 
        louder and louder until it felt like the whole stadium was going to collapse into 
        a pile of ${this.getWord(
          "plural-noun_1"
        )}! No matter who you were rooting for, 
        everyone would leave the ${this.getWord(
          "noun_5"
        )} feeling like it was a/an
         ${this.getWord("noun_6")} worth watching!`;
    },

    words: [
      {
        key: "adjective_1",
        label: "Adjective 1",
      },
      {
        key: "verb_1",
        label: "Verb 1",
      },
      {
        key: "noun_1",
        label: "Noun 1",
      },
      {
        key: "adjective_2",
        label: "Adjective 2",
      },
      {
        key: "verb_2",
        label: "Verb 2",
      },
      {
        key: "noun_2",
        label: "Noun 2",
      },
      {
        key: "verb_3",
        label: "Verb 3",
      },
      {
        key: "adjective_3",
        label: "Adjective 3",
      },
      {
        key: "verb_4",
        label: "Verb 4",
      },
      {
        key: "noun_3",
        label: "Noun 3",
      },
      {
        key: "adjective_4",
        label: "Adjective 4",
      },
      {
        key: "adverb_1",
        label: "Adverb 1",
      },
      {
        key: "verb_5",
        label: "Verb 5",
      },
      {
        key: "noun_4",
        label: "Noun 4",
      },
      {
        key: "verb_6",
        label: "Verb 6",
      },
      {
        key: "plural-noun_1",
        label: "Plural Noun 1",
      },
      {
        key: "noun_5",
        label: "Noun 5",
      },
      {
        key: "noun_6",
        label: "Noun 6",
      },
    ],
  },
];
